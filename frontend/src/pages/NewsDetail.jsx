import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
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

export default function NewsDetail() {
  const { slug } = useParams();
  const { news = [], newsCategories = [], newsKeywords = [] } = useSiteData();
  const article = news.find((item, index) => getNewsSlug(item, index) === slug);

  if (!article) {
    return <Navigate to="/tin-tuc" replace />;
  }

  const related = news.filter((item) => item !== article);

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 max-w-7xl">
          <article className="border-r-0 lg:border-r lg:border-gray-200 lg:pr-10">
            <h1 className="text-3xl md:text-4xl font-black mb-5">{article.title}</h1>
            <div className="w-10 h-0.5 bg-gray-200 mb-4"></div>
            <p className="text-xs font-black uppercase tracking-wider mb-12">Đăng vào {article.date}/04/2026 bởi Vietsmiler</p>

            <h2 className="text-2xl md:text-3xl font-black mb-5">Best windows & doors installation service in the USA</h2>
            <p className="text-base leading-relaxed mb-5">
              Suspendisse aliquam mi et mi sagittis, ac congue orci volutpat. Cras sit amet lectus id magna scelerisque gravida nec eu lorem. Vestibulum at lectus venenatis, varius mauris quis, venenatis erat.
            </p>
            <p className="text-base leading-relaxed mb-5">
              Sed iaculis ultricies augue, ac tincidunt arcu tincidunt sit amet. Donec fermentum non nibh sit amet fringilla. Donec hendrerit dui eget justo imperdiet mollis.
            </p>

            <h3 className="text-2xl font-black uppercase mb-4">Curabitur pellentesque odio magna</h3>
            <p className="text-base leading-relaxed mb-5">
              Donec luctus orci elit, vel mollis nisl cursus sit amet. Nam ut enim bibendum, placerat nulla ac, vestibulum urna. Praesent enim erat, consectetur vitae tempus sed, dapibus id nunc.
            </p>

            <img src={article.img} alt={article.title} className="w-full max-h-[620px] object-cover mb-8" />

            <ul className="list-disc pl-8 space-y-4 mb-8 text-base">
              <li>Suspendisse et mi sagittis, volutpat. Cras sit amet lectus id magna scelerisque gravida nec eu lorem.</li>
              <li>Vestibulum at, varius mauris, venenatis erat. Sed iaculis ultricies augue, ac tincidunt arcu tincidunt.</li>
              <li>Commodo convallis. Donec hendrerit dui eget justo imperdiet mollis.</li>
            </ul>

            <img src="/ảnh web vina/ảnh trang chủ/tin tức 2.png" alt="APlus service" className="w-full max-h-[620px] object-cover mb-8" />

            <h3 className="text-2xl font-black uppercase mb-4">Orci varius natoque curabitur pellentesque</h3>
            <p className="text-base leading-relaxed mb-8">
              Maecenas in purus cursus, efficitur massa nec, ullamcorper arcu. Integer justo nibh suscipit ut tincidunt ut, blandit id quam. Aenean luctus consequat sapien, eget accumsan justo.
            </p>

            <div className="flex justify-center gap-3 text-gray-400 mb-10">
              {['f', 't', '✉', 'p', 'in'].map((item) => (
                <span key={item} className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-sm font-bold">{item}</span>
              ))}
            </div>

            <div className="border-y border-gray-200 py-4 text-sm mb-8">
              Bài viết này được đăng trong Thông Tin Hợp Tác. Đánh dấu liên kết thường trực.
            </div>

            <div className="flex items-center gap-7 border-b border-gray-200 pb-8 mb-8">
              <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-5xl">●</div>
              <strong className="text-xl uppercase">Vietsmiler</strong>
            </div>

            {related[0] && (
              <Link to={`/thong-tin-hop-tac/${getNewsSlug(related[0])}`} className="flex items-center gap-3 border-b border-gray-200 pb-6 mb-8 hover:text-red-600 transition-colors">
                <span className="text-4xl leading-none">‹</span>
                <span>{related[0].title}</span>
              </Link>
            )}

            <section className="bg-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-black mb-5">Để lại một bình luận</h2>
              <p className="mb-4">Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
              <label className="block font-black mb-2">Bình luận *</label>
              <textarea className="w-full h-32 border border-gray-300 bg-white mb-6 p-3"></textarea>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <label className="block font-black">Tên *<input className="mt-2 w-full h-11 border border-gray-300 bg-white px-3 font-normal" /></label>
                <label className="block font-black">Email *<input className="mt-2 w-full h-11 border border-gray-300 bg-white px-3 font-normal" /></label>
                <label className="block font-black">Trang web<input className="mt-2 w-full h-11 border border-gray-300 bg-white px-3 font-normal" /></label>
              </div>
              <label className="flex items-center gap-3 text-sm font-bold mb-6"><input type="checkbox" /> Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.</label>
              <button type="button" className="bg-red-600 text-white px-6 py-3 font-black uppercase hover:bg-red-700 transition-colors">Gửi bình luận</button>
            </section>
          </article>

          <aside className="space-y-10">
            <SidebarBlock title="Danh mục">
              <ul className="space-y-3">
                {newsCategories.slice(0, 3).map((item, index) => (
                  <li key={item} className="border-b border-gray-200 pb-3">
                    <Link to="/tin-tuc" className="hover:text-red-600">{item} ({index === 0 ? 4 : 1})</Link>
                  </li>
                ))}
              </ul>
            </SidebarBlock>

            <SidebarBlock title="Tin xem nhiều">
              <ul className="space-y-4">
                {news.slice(0, 5).map((item, index) => (
                  <li key={getNewsSlug(item, index)} className="flex gap-3">
                    <img src={item.img} alt={item.title} className="w-12 h-12 object-cover" />
                    <div>
                      <Link to={`/thong-tin-hop-tac/${getNewsSlug(item, index)}`} className="font-medium hover:text-red-600 leading-snug block">{item.title}</Link>
                      <p className="text-xs text-gray-500">1 bình luận</p>
                    </div>
                  </li>
                ))}
              </ul>
            </SidebarBlock>

            <SidebarBlock title="Từ khóa">
              <div className="flex flex-wrap gap-2 text-xs">
                {newsKeywords.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </SidebarBlock>

            <SidebarBlock title="Aplus Group">
              <p className="text-sm leading-relaxed text-gray-600">Giải pháp hệ cửa, nội thất và khóa phụ kiện đồng bộ cho công trình hiện đại.</p>
            </SidebarBlock>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function SidebarBlock({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-black uppercase mb-4">{title}</h3>
      <div className="w-8 h-0.5 bg-gray-200 mb-6"></div>
      {children}
    </div>
  );
}
