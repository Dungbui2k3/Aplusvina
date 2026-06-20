import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSiteData } from '../context/SiteDataContext';
import { slugify } from '../utils/slug';

const benefits = [
  'Thân thiện môi trường',
  'Tiêu chuẩn chống trầy',
  'Chứng nhận ISO',
  'Melamine Pro',
  'Tiêu chuẩn APlus',
  'Tiêu chuẩn CPCIA',
];

const doorStyles = [
  { name: 'Cửa Vòm', img: '/ảnh web vina/ảnh hệ cửa/hệ cửa 7.png' },
  { name: 'Cửa Line Art', img: '/ảnh web vina/ảnh hệ cửa/hệ cửa 8.png' },
  { name: 'Cửa Phào', img: '/ảnh web vina/ảnh hệ cửa/hệ cửa 9.png' },
  { name: 'Cửa Trơn', img: '/ảnh web vina/ảnh hệ cửa/hệ cửa 10.png', active: true },
  { name: 'Cửa Ô Kính', img: '/ảnh web vina/ảnh hệ cửa/hệ cửa 2.png' },
];

function getProductSlug(product) {
  return slugify(product.slug || product.code || product.title);
}

function findProduct(slug, productGroups) {
  for (const group of productGroups) {
    const product = group.data.products.find((item) => getProductSlug(item) === slug);
    if (product) {
      return { group, product };
    }
  }

  return null;
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { compositeData, fireproofData, aluminumData } = useSiteData();
  const productGroups = [
    { type: 'composite', path: '/he-cua/composite', title: compositeData.title, data: compositeData },
    { type: 'chong-chay', path: '/he-cua/chong-chay', title: fireproofData.title, data: fireproofData },
    { type: 'nhom-kinh', path: '/he-cua/nhom-kinh', title: aluminumData.title, data: aluminumData },
  ];
  const match = findProduct(slug, productGroups);

  if (!match) {
    return <Navigate to="/he-cua/composite" replace />;
  }

  const { group, product } = match;
  const relatedProducts = group.data.products.filter((item) => item !== product).slice(0, 4);

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section
          className="relative h-[150px] md:h-[190px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url('${group.data.featuredImg || product.img}')` }}
        >
          <div className="absolute inset-0 bg-black/55"></div>
          <h1 className="relative z-10 text-2xl md:text-4xl font-black tracking-widest text-white uppercase">{group.title}</h1>
        </section>

        <section className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex flex-wrap items-center gap-3 text-sm mb-8">
            <Link to="/" className="h-10 w-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-black">⌂</Link>
            <span className="text-gray-500">&gt;</span>
            <Link to={group.path} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-red-50 hover:text-red-600 transition-colors">{group.title}</Link>
            <span className="text-gray-500">&gt;</span>
            <span className="px-4 py-2 rounded-lg bg-gray-200">{product.code || product.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.35fr] gap-12 items-start">
            <div>
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm aspect-square">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="h-16 w-16 rounded-full bg-black/35 text-white text-4xl leading-none flex items-center justify-center">＋</span>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-9">
                <div>
                  <h2 className="text-3xl font-black text-black">{product.code || product.title}</h2>
                  {product.code && <p className="mt-2 text-lg text-black">{product.title}</p>}
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span>Đánh giá:</span>
                  <strong>5/5</strong>
                  <span className="text-yellow-400 tracking-wider text-lg">★★★★★</span>
                </div>
              </div>

              <div className="rounded-2xl border border-red-600 shadow-lg p-7 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-base">
                      <span className="h-6 w-6 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-black">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-5 mb-8">
                {['Chi tiết bề mặt', 'Ứng dụng 3D', 'Ảnh chụp thực tế'].map((label) => (
                  <button key={label} type="button" className="rounded-lg bg-red-600 px-6 py-3 text-sm font-black uppercase text-white shadow-md hover:bg-red-700 transition-colors">
                    {label}
                  </button>
                ))}
              </div>

              <img src="/ảnh web vina/logo header.png" alt="APlus Door" className="h-20 w-auto object-contain mb-8" />
            </div>
          </div>

          <p className="mt-8 text-base leading-relaxed text-black">
            Bề mặt {product.code || product.title} mang sắc độ hiện đại, dễ phối cùng nhiều phong cách nội thất và hệ cửa APlus. Chất liệu được hoàn thiện đồng đều, bền màu, phù hợp cho nhà ở, khách sạn, văn phòng và các công trình yêu cầu tính thẩm mỹ cao.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 mb-20 text-center">
            {doorStyles.map((style) => (
              <div key={style.name} className="space-y-4">
                <div className="h-56 flex items-end justify-center">
                  <img src={style.img} alt={style.name} className="max-h-full w-auto object-contain" />
                </div>
                <h3 className={`text-lg font-black ${style.active ? 'text-red-600' : 'text-black'}`}>{style.name}</h3>
              </div>
            ))}
          </div>

          <section>
            <h2 className="text-3xl font-black uppercase mb-8">Sản phẩm đề xuất</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((item) => (
                <Link key={getProductSlug(item)} to={`/san-pham/${getProductSlug(item)}`} className="rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-shadow bg-white">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black">{item.code || item.title}</h3>
                    {item.code && <p className="mt-1 text-sm text-gray-700">{item.title}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
