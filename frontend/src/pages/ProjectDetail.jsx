import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSiteData } from '../context/SiteDataContext';
import { slugify } from '../utils/slug';

export const getProjectSlug = (project) => project.slug || slugify(project.title);

export default function ProjectDetail() {
  const { slug } = useParams();
  const {
    projects = [],
    news = [],
    newsCategories = [],
    newsKeywords = [],
  } = useSiteData();

  const index = projects.findIndex((item) => getProjectSlug(item) === slug);

  if (index === -1) {
    return <Navigate to="/" replace />;
  }

  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 max-w-7xl">
          <article className="border-r-0 lg:border-r lg:border-gray-200 lg:pr-10">
            <h1 className="text-3xl md:text-4xl font-black mb-5 uppercase">{project.title}</h1>
            <div className="w-10 h-0.5 bg-gray-200 mb-10"></div>

            <img src={project.img} alt={project.title} className="w-full max-h-[620px] object-cover mb-8" />

            <h2 className="text-2xl md:text-3xl font-black mb-5">Experts tips to clean glass doors and windows</h2>
            <p className="text-base leading-relaxed mb-5">
              Suspendisse aliquam mi et mi sagittis, ac congue orci volutpat. Cras sit amet lectus id magna scelerisque gravida nec eu lorem. Vestibulum at lectus venenatis, varius mauris quis, venenatis erat. Sed iaculis ultricies augue, ac tincidunt arcu tincidunt sit amet. Sed commodo convallis nibh. Donec fermentum non nibh sit amet fringilla. Donec hendrerit dui eget justo imperdiet mollis.
            </p>

            <h3 className="text-2xl font-black uppercase mb-4">Curabitur pellentesque odio magna</h3>
            <p className="text-base leading-relaxed mb-8">
              Donec luctus orci elit, vel mollis nisl cursus sit amet. Nam ut enim bibendum, placerat nulla ac, vestibulum urna. Praesent enim erat, consectetur vitae tempus sed, dapibus id nunc. Maecenas in purus cursus, efficitur massa nec, ullamcorper arcu. Integer justo nibh suscipit ut tincidunt ut, blandit id quam.
            </p>

            <img src={next?.img || prev?.img || project.img} alt={project.title} className="w-full max-h-[620px] object-cover mb-8" />

            <ul className="list-disc pl-8 space-y-4 mb-8 text-base">
              <li>Suspendisse et mi sagittis, volutpat. Cras sit amet lectus id magna scelerisque gravida nec eu lorem.</li>
              <li>Vestibulum at, varius mauris, venenatis erat. Sed iaculis ultricies augue, ac tincidunt arcu tincidunt.</li>
              <li>Commodo convallis. Donec hendrerit dui eget justo imperdiet mollis. Veslum.</li>
            </ul>

            <h3 className="text-2xl font-black uppercase mb-4">Odio magna curabitur pellentesque</h3>
            <p className="text-base leading-relaxed mb-10">
              Maecenas et cursus metus. Aenean luctus consequat sapien, eget accumsan justo. Donec luctus orci elit, vel mollis nisl cursus sit amet. Nam ut enim bibendum, placerat nulla ac, vestibulum urna. Praesent enim erat, consectetur vitae tempus sed, dapibus id nunc.
            </p>

            <div className="flex justify-center gap-3 text-gray-400 mb-10">
              {['f', 't', '✉', 'p', 'in'].map((item) => (
                <span key={item} className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-sm font-bold">{item}</span>
              ))}
            </div>

            <div className="border-y border-gray-200 py-4 text-sm mb-8">
              Bài viết này được đăng trong Dự án. Đánh dấu liên kết thường trực.
            </div>

            <div className="flex items-center gap-7 border-b border-gray-200 pb-8 mb-8">
              <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-5xl">●</div>
              <strong className="text-xl uppercase">Vietsmiler</strong>
            </div>

            <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-6">
              {prev ? (
                <Link to={`/project/${getProjectSlug(prev)}`} className="flex items-center gap-3 hover:text-red-600 transition-colors">
                  <span className="text-4xl leading-none">‹</span>
                  <span className="font-bold uppercase">{prev.title}</span>
                </Link>
              ) : <span />}
              {next && (
                <Link to={`/project/${getProjectSlug(next)}`} className="flex items-center gap-3 hover:text-red-600 transition-colors text-right">
                  <span className="font-bold uppercase">{next.title}</span>
                  <span className="text-4xl leading-none">›</span>
                </Link>
              )}
            </div>
          </article>

          <aside className="space-y-10">
            <SidebarBlock title="Danh mục">
              <ul className="space-y-3">
                {newsCategories.slice(0, 3).map((item, idx) => (
                  <li key={item} className="border-b border-gray-200 pb-3">
                    <Link to="/tin-tuc" className="hover:text-red-600">{item} ({idx === 0 ? 4 : idx === 2 ? 5 : 1})</Link>
                  </li>
                ))}
              </ul>
            </SidebarBlock>

            <SidebarBlock title="Tin xem nhiều">
              <ul className="space-y-4">
                {news.slice(0, 5).map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <img src={item.img} alt={item.title} className="w-12 h-12 object-cover" />
                    <div>
                      <Link to="/tin-tuc" className="font-medium hover:text-red-600 leading-snug block">{item.title}</Link>
                      <p className="text-xs text-gray-500">1 bình luận</p>
                    </div>
                  </li>
                ))}
              </ul>
            </SidebarBlock>

            <SidebarBlock title="Từ khóa">
              <div className="flex flex-wrap gap-2 text-xs text-gray-500">
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
