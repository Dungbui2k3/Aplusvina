import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSiteData } from '../context/SiteDataContext';
import { slugify } from '../utils/slug';

const newsSlugs = [
  'khu-nghi-duong-crimson-bay',
  'aplus-group-mo-rong-hoat-dong-sang-thi-truong-quoc-te',
  'aplus-group-hop-tac-voi-doi-tac-chien-luoc-nhat-ban',
  'hoi-nghi-xuc-tien-dau-tu-aplus-group-2024',
];

const getNewsSlug = (item, index) => item.slug || newsSlugs[index] || slugify(item.title);

export default function TinTuc() {
  const { news = [], newsCategories = [], newsKeywords = [] } = useSiteData();

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[260px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/ảnh web vina/ảnh trang chủ/tin tức 1.png')" }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-4">
            <span className="text-xs uppercase tracking-[0.35em] text-red-400">TIN TỨC APLUS</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight">Tin tức & sự kiện</h1>
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-100">Cập nhật tin tức mới nhất về Aplus Group, dự án, hợp tác và hoạt động thương hiệu.</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] font-black text-red-600">
                <span className="w-10 h-0.5 bg-red-600 inline-block"></span>
                Danh sách bài viết
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Tin nóng và sự kiện mới nhất</h2>
              <p className="text-sm text-gray-600 leading-relaxed">Xem toàn bộ tin tức cập nhật về hoạt động Aplus, đối tác chiến lược và các dự án nổi bật.</p>
            </div>

            <div className="space-y-6">
              {news.map((item, idx) => (
                <article key={idx} className="flex flex-col sm:flex-row gap-5 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="sm:w-5/12 h-[220px] overflow-hidden bg-gray-100">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] font-black text-red-600 mb-4">
                        <span>{item.date}</span>
                        <span className="text-gray-300">/</span>
                        <span>{item.month}</span>
                      </div>
                      <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                    </div>
                    <Link to={`/thong-tin-hop-tac/${getNewsSlug(item, idx)}`} className="mt-6 inline-flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-[0.35em] px-6 py-3 hover:bg-red-700 transition-colors">
                      Xem chi tiết
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-10">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h4 className="text-lg font-black text-gray-900 uppercase tracking-[0.25em] mb-5">Danh mục</h4>
              <ul className="space-y-3 text-sm font-bold text-gray-600">
                {newsCategories.map((item, idx) => (
                  <li key={idx} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <Link to="/tin-tuc" className="hover:text-red-600 transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h4 className="text-lg font-black text-gray-900 uppercase tracking-[0.25em] mb-5">Tin xem nhiều</h4>
              <ul className="space-y-4 text-sm text-gray-700">
                {news.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-14 h-14 overflow-hidden rounded-xl bg-gray-100">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <Link to={`/thong-tin-hop-tac/${getNewsSlug(item, idx)}`} className="font-black text-sm text-gray-900 hover:text-red-600 block">{item.title}</Link>
                      <p className="text-xs text-gray-500">1 bình luận</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h4 className="text-lg font-black text-gray-900 uppercase tracking-[0.25em] mb-5">Từ khóa</h4>
              <div className="flex flex-wrap gap-3">
                {newsKeywords.map((tag, idx) => (
                  <span key={idx} className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 border border-gray-200 rounded-full px-3 py-2">{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
