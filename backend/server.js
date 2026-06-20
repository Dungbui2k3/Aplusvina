const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const siteData = require('./data/siteData');

const app = express();
const PORT = process.env.PORT || 5000;
const ADMIN_CONTENT_PATH = path.join(__dirname, 'data', 'adminContent.json');

if (fs.existsSync(ADMIN_CONTENT_PATH)) {
  try {
    Object.assign(siteData, JSON.parse(fs.readFileSync(ADMIN_CONTENT_PATH, 'utf8')));
  } catch (error) {
    console.warn('Khong doc duoc adminContent.json:', error.message);
  }
}

app.use(cors());
app.use(express.json());

function slugify(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const newsSlugs = [
  'khu-nghi-duong-crimson-bay',
  'aplus-group-mo-rong-hoat-dong-sang-thi-truong-quoc-te',
  'aplus-group-hop-tac-voi-doi-tac-chien-luoc-nhat-ban',
  'hoi-nghi-xuc-tien-dau-tu-aplus-group-2024',
];

function enrichProduct(product, index, type) {
  const sourceSlug = product.slug || product.code || product.title || `${type}-${index + 1}`;
  return {
    ...product,
    id: product.id || `${type}-${slugify(sourceSlug)}`,
    slug: product.slug || slugify(sourceSlug),
    type,
  };
}

function enrichProducts(data, type) {
  return {
    ...data,
    products: (data.products || []).map((product, index) => enrichProduct(product, index, type)),
  };
}

function enrichNewsItem(item, index) {
  return {
    ...item,
    id: item.id || `news-${index + 1}`,
    slug: item.slug || newsSlugs[index] || slugify(item.title || `news-${index + 1}`),
    category: item.category || 'Thông Tin Hợp Tác',
    author: item.author || 'Vietsmiler',
  };
}

function getContent() {
  return {
    ...siteData,
    compositeData: enrichProducts(siteData.compositeData, 'composite'),
    fireproofData: enrichProducts(siteData.fireproofData, 'chong-chay'),
    aluminumData: enrichProducts(siteData.aluminumData, 'nhom-kinh'),
    news: (siteData.news || []).map(enrichNewsItem),
  };
}

function getDoorSystems() {
  const content = getContent();
  return {
    composite: content.compositeData,
    'chong-chay': content.fireproofData,
    'nhom-kinh': content.aluminumData,
  };
}

function getAllProducts() {
  return Object.values(getDoorSystems()).flatMap((system) => system.products || []);
}

function getSystemData(type) {
  const systemMap = {
    composite: siteData.compositeData,
    'chong-chay': siteData.fireproofData,
    'nhom-kinh': siteData.aluminumData,
  };

  return systemMap[type];
}

function saveContent() {
  fs.writeFileSync(ADMIN_CONTENT_PATH, JSON.stringify(siteData, null, 2), 'utf8');
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/content', (req, res) => {
  res.json(getContent());
});

app.get('/api/navigation', (req, res) => {
  res.json(getContent().navigation);
});

app.get('/api/home', (req, res) => {
  const content = getContent();
  res.json({
    homeSliders: content.homeSliders,
    homeIntroData: content.homeIntroData,
    sectors: content.sectors,
    projects: content.projects,
    news: content.news,
    testimonials: content.testimonials,
  });
});

app.get('/api/door-systems', (req, res) => {
  res.json(getDoorSystems());
});

app.get('/api/door-systems/:type', (req, res) => {
  const system = getDoorSystems()[req.params.type];

  if (!system) {
    return res.status(404).json({ message: 'Door system not found' });
  }

  res.json(system);
});

app.get('/api/products', (req, res) => {
  const products = getAllProducts();
  const type = req.query.type;
  res.json(type ? products.filter((product) => product.type === type) : products);
});

app.get('/api/products/:slug', (req, res) => {
  const product = getAllProducts().find((item) => item.slug === req.params.slug);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

app.post('/api/products', (req, res) => {
  const { type = 'composite', product } = req.body;
  const systemMap = {
    composite: siteData.compositeData,
    'chong-chay': siteData.fireproofData,
    'nhom-kinh': siteData.aluminumData,
  };
  const targetSystem = systemMap[type];

  if (!targetSystem || !product) {
    return res.status(400).json({ message: 'Missing valid type or product' });
  }

  const savedProduct = enrichProduct(product, targetSystem.products.length, type);
  targetSystem.products.push(savedProduct);
  res.status(201).json(savedProduct);
});

app.put('/api/admin/door-menu', (req, res) => {
  const doorMenu = siteData.navigation.menu.find((item) => item.link === '/he-cua');

  if (!doorMenu || !Array.isArray(req.body.submenu)) {
    return res.status(400).json({ message: 'Invalid door menu payload' });
  }

  doorMenu.submenu = req.body.submenu.map((item) => ({
    name: item.name || '',
    link: item.link || '/he-cua',
  }));

  saveContent();
  res.json(doorMenu);
});

app.post('/api/admin/door-systems/:type/products', (req, res) => {
  const targetSystem = getSystemData(req.params.type);

  if (!targetSystem || !req.body) {
    return res.status(400).json({ message: 'Missing valid type or product' });
  }

  const savedProduct = enrichProduct(req.body, targetSystem.products.length, req.params.type);
  targetSystem.products.push(savedProduct);
  saveContent();
  res.status(201).json(savedProduct);
});

app.put('/api/admin/door-systems/:type/products/:id', (req, res) => {
  const targetSystem = getSystemData(req.params.type);
  const productIndex = targetSystem?.products?.findIndex((item, index) => {
    const enriched = enrichProduct(item, index, req.params.type);
    return enriched.id === req.params.id;
  });

  if (!targetSystem || productIndex < 0) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const current = enrichProduct(targetSystem.products[productIndex], productIndex, req.params.type);
  const updated = enrichProduct({ ...current, ...req.body, id: current.id }, productIndex, req.params.type);
  targetSystem.products[productIndex] = updated;
  saveContent();
  res.json(updated);
});

app.delete('/api/admin/door-systems/:type/products/:id', (req, res) => {
  const targetSystem = getSystemData(req.params.type);
  const productIndex = targetSystem?.products?.findIndex((item, index) => {
    const enriched = enrichProduct(item, index, req.params.type);
    return enriched.id === req.params.id;
  });

  if (!targetSystem || productIndex < 0) {
    return res.status(404).json({ message: 'Product not found' });
  }

  targetSystem.products.splice(productIndex, 1);
  saveContent();
  res.status(204).send();
});

app.get('/api/news', (req, res) => {
  res.json(getContent().news);
});

app.get('/api/news/:slug', (req, res) => {
  const article = getContent().news.find((item) => item.slug === req.params.slug);

  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }

  res.json(article);
});

app.post('/api/news', (req, res) => {
  const article = req.body;

  if (!article || !article.title) {
    return res.status(400).json({ message: 'Missing article title' });
  }

  const savedArticle = enrichNewsItem(article, siteData.news.length);
  siteData.news.push(savedArticle);
  saveContent();
  res.status(201).json(savedArticle);
});

app.post('/api/admin/news', (req, res) => {
  const article = req.body;

  if (!article || !article.title) {
    return res.status(400).json({ message: 'Missing article title' });
  }

  const savedArticle = enrichNewsItem(article, siteData.news.length);
  siteData.news.push(savedArticle);
  res.status(201).json(savedArticle);
});

app.put('/api/admin/news/:id', (req, res) => {
  const articleIndex = siteData.news.findIndex((item, index) => enrichNewsItem(item, index).id === req.params.id);

  if (articleIndex < 0) {
    return res.status(404).json({ message: 'Article not found' });
  }

  const current = enrichNewsItem(siteData.news[articleIndex], articleIndex);
  const updated = enrichNewsItem({ ...current, ...req.body, id: current.id }, articleIndex);
  siteData.news[articleIndex] = updated;
  saveContent();
  res.json(updated);
});

app.delete('/api/admin/news/:id', (req, res) => {
  const articleIndex = siteData.news.findIndex((item, index) => enrichNewsItem(item, index).id === req.params.id);

  if (articleIndex < 0) {
    return res.status(404).json({ message: 'Article not found' });
  }

  siteData.news.splice(articleIndex, 1);
  saveContent();
  res.status(204).send();
});

app.post('/api/consultation', (req, res) => {
  const { name, phone, email } = req.body;
  console.log(`[Lead]: Tên: ${name} | SĐT: ${phone} | Email: ${email}`);
  res.status(200).json({ success: true, message: 'Đăng ký thành công!' });
});

app.listen(PORT, () => {
  console.log(`Server BE đang chạy tại: http://localhost:${PORT}`);
});
