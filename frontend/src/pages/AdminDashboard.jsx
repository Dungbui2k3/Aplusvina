import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  deleteDoorProduct,
  deleteNewsArticle,
  saveDoorProduct,
  saveNewsArticle,
  updateDoorMenu,
} from '../api/siteApi';
import { useSiteData } from '../context/SiteDataContext';

const EMPTY_PRODUCT = { code: '', title: '', img: '' };
const EMPTY_ARTICLE = { date: '', month: '', title: '', desc: '', img: '', category: '' };

const doorTypes = [
  { id: 'composite', label: 'Cửa Composite', key: 'compositeData' },
  { id: 'chong-chay', label: 'Cửa gỗ chống cháy', key: 'fireproofData' },
  { id: 'nhom-kinh', label: 'Cửa nhôm kính', key: 'aluminumData' },
];

function getDoorMenu(navigation) {
  return navigation?.menu?.find((item) => item.link === '/he-cua')?.submenu || [];
}

export default function AdminDashboard() {
  const siteData = useSiteData();
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('aplus_admin') === '1');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [message, setMessage] = useState('');
  const [doorMenu, setDoorMenu] = useState(() => getDoorMenu(siteData.navigation));
  const [selectedDoorType, setSelectedDoorType] = useState('composite');
  const [productSearch, setProductSearch] = useState('');
  const [productForm, setProductForm] = useState(EMPTY_PRODUCT);
  const [articleForm, setArticleForm] = useState(EMPTY_ARTICLE);
  const [productsByType, setProductsByType] = useState(() => ({
    composite: siteData.compositeData?.products || [],
    'chong-chay': siteData.fireproofData?.products || [],
    'nhom-kinh': siteData.aluminumData?.products || [],
  }));
  const [articles, setArticles] = useState(siteData.news || []);

  const stats = useMemo(() => {
    const productCount = Object.values(productsByType).reduce((total, list) => total + list.length, 0);
    return [
      { label: 'Menu hệ cửa', value: doorMenu.length },
      { label: 'Màu cửa', value: productCount },
      { label: 'Tin tức', value: articles.length },
    ];
  }, [articles.length, doorMenu.length, productsByType]);

  const selectedProducts = productsByType[selectedDoorType] || [];
  const filteredProducts = selectedProducts.filter((product) => {
    const keyword = productSearch.trim().toLowerCase();
    if (!keyword) return true;

    return [product.code, product.title]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(keyword));
  });

  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(''), 2500);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (loginForm.username === 'admin' && loginForm.password === '12345678') {
      localStorage.setItem('aplus_admin', '1');
      setIsLoggedIn(true);
      setLoginError('');
      return;
    }
    setLoginError('Sai tài khoản hoặc mật khẩu.');
  };

  const handleLogout = () => {
    localStorage.removeItem('aplus_admin');
    setIsLoggedIn(false);
  };

  const saveMenu = async () => {
    const cleanedMenu = doorMenu.filter((item) => item.name.trim()).map((item) => ({
      name: item.name.trim(),
      link: item.link.trim() || '/he-cua',
    }));
    const saved = await updateDoorMenu(cleanedMenu);
    setDoorMenu(saved.submenu || cleanedMenu);
    showMessage('Đã lưu menu hệ cửa.');
  };

  const submitProduct = async (event) => {
    event.preventDefault();
    const saved = await saveDoorProduct(selectedDoorType, productForm);
    setProductsByType((current) => ({
      ...current,
      [selectedDoorType]: productForm.id
        ? current[selectedDoorType].map((item) => (item.id === saved.id ? saved : item))
        : [...current[selectedDoorType], saved],
    }));
    setProductForm(EMPTY_PRODUCT);
    showMessage('Đã lưu màu cửa.');
  };

  const removeProduct = async (product) => {
    await deleteDoorProduct(selectedDoorType, product.id);
    setProductsByType((current) => ({
      ...current,
      [selectedDoorType]: current[selectedDoorType].filter((item) => item.id !== product.id),
    }));
    showMessage('Đã xóa màu cửa.');
  };

  const submitArticle = async (event) => {
    event.preventDefault();
    const saved = await saveNewsArticle(articleForm);
    setArticles((current) => (
      articleForm.id ? current.map((item) => (item.id === saved.id ? saved : item)) : [...current, saved]
    ));
    setArticleForm(EMPTY_ARTICLE);
    showMessage('Đã lưu tin tức.');
  };

  const removeArticle = async (article) => {
    await deleteNewsArticle(article.id);
    setArticles((current) => current.filter((item) => item.id !== article.id));
    showMessage('Đã xóa tin tức.');
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-[#101013] text-white flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="w-full max-w-md rounded-2xl border border-white/10 bg-[#18181b] p-8 shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">Aplus Admin</p>
          <h1 className="mt-3 text-3xl font-black">Đăng nhập quản trị</h1>
          <div className="mt-8 space-y-4">
            <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Tài khoản" value={loginForm.username} onChange={(event) => setLoginForm({ ...loginForm, username: event.target.value })} />
            <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Mật khẩu" type="password" value={loginForm.password} onChange={(event) => setLoginForm({ ...loginForm, password: event.target.value })} />
          </div>
          {loginError && <p className="mt-4 text-sm font-bold text-red-400">{loginError}</p>}
          <button className="mt-6 w-full rounded-xl bg-red-600 px-5 py-3 font-black uppercase tracking-wide hover:bg-red-700">Đăng nhập</button>
        </form>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white grid lg:grid-cols-[280px_1fr]">
      <aside className="border-r border-white/10 bg-[#141416] p-6 flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <p className="text-xs text-white/50">Xin chào, <strong className="text-white">admin</strong></p>
            <h1 className="mt-3 text-2xl font-black">Aplus Admin</h1>
          </div>
          {[
            ['overview', 'Tổng quan'],
            ['menu', 'Menu hệ cửa'],
            ['colors', 'Màu cửa'],
            ['news', 'Tin tức'],
          ].map(([id, label]) => (
            <button key={id} onClick={() => setActiveTab(id)} className={`mb-2 w-full rounded-xl px-4 py-3 text-left text-sm font-bold transition ${activeTab === id ? 'bg-red-600 text-white' : 'text-white/65 hover:bg-white/5 hover:text-white'}`}>
              {label}
            </button>
          ))}
        </div>
        <div className="space-y-2 border-t border-white/10 pt-5">
          <Link to="/" className="block rounded-xl px-4 py-3 text-sm font-bold text-white/65 hover:bg-white/5 hover:text-white">Xem trang chủ</Link>
          <button onClick={handleLogout} className="w-full rounded-xl px-4 py-3 text-left text-sm font-bold text-white/65 hover:bg-white/5 hover:text-white">Đăng xuất</button>
        </div>
      </aside>

      <main className="p-5 lg:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">Dashboard</p>
            <h2 className="mt-2 text-3xl font-black">Quản trị nội dung</h2>
          </div>
          {message && <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-bold text-emerald-300">{message}</div>}
        </div>

        {activeTab === 'overview' && (
          <section className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="text-4xl font-black">{stat.value}</div>
                <div className="mt-2 text-sm font-bold text-white/55">{stat.label}</div>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'menu' && (
          <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-black">Menu con của Hệ cửa</h3>
              <button onClick={() => setDoorMenu([...doorMenu, { name: '', link: '/he-cua' }])} className="rounded-lg bg-white px-4 py-2 text-sm font-black text-black">Thêm menu</button>
            </div>
            <div className="mt-5 space-y-3">
              {doorMenu.map((item, index) => (
                <div key={index} className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                  <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Tên menu" value={item.name} onChange={(event) => setDoorMenu(doorMenu.map((menuItem, menuIndex) => menuIndex === index ? { ...menuItem, name: event.target.value } : menuItem))} />
                  <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Đường dẫn" value={item.link} onChange={(event) => setDoorMenu(doorMenu.map((menuItem, menuIndex) => menuIndex === index ? { ...menuItem, link: event.target.value } : menuItem))} />
                  <button onClick={() => setDoorMenu(doorMenu.filter((_, menuIndex) => menuIndex !== index))} className="rounded-xl border border-red-500/40 px-4 py-3 text-sm font-black text-red-300">Xóa</button>
                </div>
              ))}
            </div>
            <button onClick={saveMenu} className="mt-5 rounded-xl bg-red-600 px-6 py-3 font-black hover:bg-red-700">Lưu menu</button>
          </section>
        )}

        {activeTab === 'colors' && (
          <section className="mt-8 grid gap-6 xl:grid-cols-[380px_1fr]">
            <form onSubmit={submitProduct} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 space-y-4">
              <h3 className="text-xl font-black">{productForm.id ? 'Sửa màu cửa' : 'Thêm màu cửa'}</h3>
              <select className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none" value={selectedDoorType} onChange={(event) => { setSelectedDoorType(event.target.value); setProductForm(EMPTY_PRODUCT); }}>
                {doorTypes.map((type) => <option key={type.id} value={type.id}>{type.label}</option>)}
              </select>
              <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Mã màu / mã cửa" value={productForm.code || ''} onChange={(event) => setProductForm({ ...productForm, code: event.target.value })} />
              <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Tên màu" value={productForm.title || ''} onChange={(event) => setProductForm({ ...productForm, title: event.target.value })} required />
              <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Đường dẫn ảnh" value={productForm.img || ''} onChange={(event) => setProductForm({ ...productForm, img: event.target.value })} required />
              <div className="flex gap-3">
                <button className="rounded-xl bg-red-600 px-5 py-3 font-black hover:bg-red-700">Lưu</button>
                {productForm.id && <button type="button" onClick={() => setProductForm(EMPTY_PRODUCT)} className="rounded-xl border border-white/10 px-5 py-3 font-black">Hủy</button>}
              </div>
            </form>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-black">Danh sách màu cửa</h3>
                <input
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600 md:max-w-sm"
                  placeholder="Tìm mã hoặc tên màu..."
                  value={productSearch}
                  onChange={(event) => setProductSearch(event.target.value)}
                />
              </div>
              <div className="mt-5 grid gap-3">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="grid gap-4 rounded-xl border border-white/10 bg-black/20 p-3 md:grid-cols-[76px_1fr_auto] md:items-center">
                    <img src={product.img} alt={product.title} className="h-16 w-16 rounded-lg object-cover bg-white/10" />
                    <div>
                      <p className="font-black">{product.code || 'Không có mã'}</p>
                      <p className="text-sm text-white/60">{product.title}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setProductForm(product)} className="rounded-lg bg-white px-3 py-2 text-sm font-black text-black">Sửa</button>
                      <button onClick={() => removeProduct(product)} className="rounded-lg border border-red-500/40 px-3 py-2 text-sm font-black text-red-300">Xóa</button>
                    </div>
                  </div>
                ))}
                {!filteredProducts.length && (
                  <div className="rounded-xl border border-white/10 bg-black/20 p-6 text-center text-sm font-bold text-white/55">
                    Không tìm thấy màu cửa phù hợp.
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'news' && (
          <section className="mt-8 grid gap-6 xl:grid-cols-[420px_1fr]">
            <form onSubmit={submitArticle} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 space-y-4">
              <h3 className="text-xl font-black">{articleForm.id ? 'Sửa tin tức' : 'Thêm tin tức'}</h3>
              <div className="grid grid-cols-2 gap-3">
                <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Ngày" value={articleForm.date || ''} onChange={(event) => setArticleForm({ ...articleForm, date: event.target.value })} />
                <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Tháng" value={articleForm.month || ''} onChange={(event) => setArticleForm({ ...articleForm, month: event.target.value })} />
              </div>
              <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Tiêu đề" value={articleForm.title || ''} onChange={(event) => setArticleForm({ ...articleForm, title: event.target.value })} required />
              <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Danh mục" value={articleForm.category || ''} onChange={(event) => setArticleForm({ ...articleForm, category: event.target.value })} />
              <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Đường dẫn ảnh" value={articleForm.img || ''} onChange={(event) => setArticleForm({ ...articleForm, img: event.target.value })} required />
              <textarea className="min-h-28 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-600" placeholder="Mô tả ngắn" value={articleForm.desc || ''} onChange={(event) => setArticleForm({ ...articleForm, desc: event.target.value })} />
              <div className="flex gap-3">
                <button className="rounded-xl bg-red-600 px-5 py-3 font-black hover:bg-red-700">Lưu</button>
                {articleForm.id && <button type="button" onClick={() => setArticleForm(EMPTY_ARTICLE)} className="rounded-xl border border-white/10 px-5 py-3 font-black">Hủy</button>}
              </div>
            </form>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="text-xl font-black">Danh sách tin tức</h3>
              <div className="mt-5 grid gap-3">
                {articles.map((article) => (
                  <div key={article.id} className="grid gap-4 rounded-xl border border-white/10 bg-black/20 p-3 md:grid-cols-[92px_1fr_auto] md:items-center">
                    <img src={article.img} alt={article.title} className="h-20 w-20 rounded-lg object-cover bg-white/10" />
                    <div>
                      <p className="font-black">{article.title}</p>
                      <p className="mt-1 line-clamp-2 text-sm text-white/60">{article.desc}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setArticleForm(article)} className="rounded-lg bg-white px-3 py-2 text-sm font-black text-black">Sửa</button>
                      <button onClick={() => removeArticle(article)} className="rounded-lg border border-red-500/40 px-3 py-2 text-sm font-black text-red-300">Xóa</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
