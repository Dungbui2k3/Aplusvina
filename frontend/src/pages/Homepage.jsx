// frontend/src/pages/Homepage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSiteData } from '../context/SiteDataContext';
import { slugify } from '../utils/slug';

// Danh mục tab cho phần Dự án
const PROJECT_TABS = [
  'TỔ HỢP KHU CHUNG CƯ VĂN PHÒNG',
  'QUẦN THỂ DU LỊCH, NGHỈ DƯỠNG',
  'HÀNG KHÔNG',
  'KHU CÔNG NGHIỆP CÔNG NGHỆ CAO',
];

// Menu danh mục cho phần Tin tức
const NEWS_MENU = [
  'TIN ANPLUS GROUP',
  'CÔNG TY THÀNH VIÊN',
  'THÔNG TIN BÁO CHÍ',
  'THÔNG TIN HỢP TÁC',
];

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const {
    homeSliders = [],
    sectors = [],
    projects = [],
    news = [],
    testimonials = [],
  } = useSiteData();

  // Logo đối tác (dải băng đỏ chạy) - lặp lại để tạo hiệu ứng vô tận
  const partnerLogos = [
    '/ảnh web vina/logo header.png',
    '/ảnh web vina/ảnh trang chủ/đối tác 1.png',
    '/ảnh web vina/ảnh trang chủ/đối tác 2.png',
    '/ảnh web vina/ảnh trang chủ/đối tác 3.png',
    '/ảnh web vina/ảnh trang chủ/đối tác 4.png',
  ];

  useEffect(() => {
    if (!homeSliders.length) return undefined;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeSliders.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [homeSliders.length]);

  useEffect(() => {
    if (!testimonials.length) return undefined;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="bg-[#FAF9F6] text-gray-800 min-h-screen font-sans flex flex-col justify-between overflow-x-clip">
      
      {/* --- HEADER --- */}
      <Header />

      <main className="flex-grow">
        
        {/* 1. HERO BANNER SLIDER (Cỡ chữ tiêu đề lớn, thoáng đạt) */}
        <section className="relative h-[440px] md:h-[540px] overflow-hidden bg-gray-900 text-white">
          {homeSliders.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform ${
                idx === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-102 z-0'
              }`}
              style={{ backgroundImage: `url('${slide.img}')` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-red-500 mb-3 drop-shadow-sm">
                  {slide.sub}
                </span>
                <h1 className="text-2xl md:text-5xl font-black tracking-widest uppercase max-w-4xl leading-snug drop-shadow-md mb-5">
                  {slide.title}
                </h1>
                <div className="w-16 h-[2px] bg-red-600 mb-6"></div>
                <Link to="/gioi-thieu" className="text-xs font-bold tracking-widest uppercase border-2 border-white px-7 py-3 hover:bg-red-600 hover:border-red-600 transition-all duration-300">
                  Khám phá ngay
                </Link>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
            {homeSliders.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-[3px] transition-all duration-500 ${idx === currentSlide ? 'bg-red-600 w-10' : 'bg-white/40 w-4'}`}
              ></button>
            ))}
          </div>
        </section>

        {/* 2. KHỐI GIỚI THIỆU APLUS GROUP (Thiết kế chữ to rõ ràng, bố cục cân xứng) */}
        <section className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gray-200/60">
          {/* Cụm ảnh bên trái */}
          <div className="lg:col-span-5 w-full relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl border border-gray-100 bg-gray-50">
            <img src="/ảnh web vina/ảnh giới thiệu/giới thiệu 1.jpg" alt="Không gian Aplus" className="w-full h-full object-cover" />
            <img src="/ảnh web vina/logo header.png" alt="Logo APlus" className="absolute top-6 right-6 h-10 w-auto object-contain" />
          </div>

          {/* Nội dung chữ bên phải */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block">GIỚI THIỆU</span>
            <h2 className="text-4xl lg:text-5xl font-black text-red-600 tracking-wide uppercase">APLUS GROUP</h2>

            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4 text-justify font-medium">
              <p>
                <strong>APLUS GROUP</strong> là thương hiệu đa lĩnh vực theo đuổi tiêu chuẩn cao cấp, định hình phong cách sống hiện đại và đẳng cấp. Không chỉ cung cấp sản phẩm, APLUS xây dựng hệ sinh thái toàn diện từ cửa, nội thất, khóa đến bàn bida và thiết bị âm thanh, đảm bảo sự đồng bộ về chất lượng và trải nghiệm.
              </p>
              <p>
                Với triết lý <strong>uy tín – chất lượng – khác biệt</strong>, mỗi sản phẩm của APLUS đều được chọn lọc kỹ lưỡng, chú trọng từ thiết kế đến độ bền và tính ứng dụng thực tế. Chúng tôi tin rằng giá trị thương hiệu được tạo nên từ trải nghiệm khách hàng, vì vậy luôn không ngừng cải tiến để mang đến giải pháp tối ưu và bền vững.
              </p>
              <p>
                Hướng đến vị thế dẫn đầu, APLUS GROUP cam kết đồng hành cùng khách hàng trong việc kiến tạo không gian sống và giải trí đẳng cấp, khác biệt và mang dấu ấn riêng.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/lien-he" className="bg-red-600 text-white text-xs md:text-sm font-bold px-8 py-4 rounded-xl hover:bg-red-700 shadow-md shadow-red-600/10 cursor-pointer uppercase tracking-wider flex items-center justify-center transition-colors">
                Tư vấn ngay ›
              </Link>
              <div className="flex items-center gap-3 border border-gray-200/60 rounded-xl px-5 py-2.5 bg-gray-50/50">
                <span className="text-red-600 text-base">📞</span>
                <div>
                  <span className="text-gray-400 block text-[10px] font-bold tracking-widest uppercase">HOTLINE TƯ VẤN</span>
                  <a href="tel:+84945389389" className="font-black text-gray-800 hover:text-red-600 text-sm md:text-base tracking-wide">+84.945.389.389</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LĨNH VỰC ĐẦU TƯ */}
        <section className="w-full bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">
            {/* Bảng đỏ bên trái */}
            <div className="bg-red-700 text-white px-8 py-12 flex flex-col justify-between text-right">
              <div>
                <p className="text-2xl md:text-3xl font-light tracking-wide">LĨNH VỰC</p>
                <h2 className="mt-1 text-3xl md:text-4xl font-black uppercase tracking-wide">ĐẦU TƯ</h2>
                <p className="mt-5 text-sm font-bold tracking-[0.25em] text-white/90">APLUS GROUP/</p>
              </div>
              <div className="mt-12 flex items-center justify-end gap-3">
                <span className="text-[#E6B450] text-sm font-bold leading-tight">
                  Xem toàn bộ<br />lĩnh vực
                </span>
                <span className="h-[2px] w-14 bg-[#E6B450]"></span>
              </div>
            </div>

            {/* 5 thẻ lĩnh vực tràn viền */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {sectors.map((sec) => (
                <Link key={sec.id} to={sec.link} className="group relative h-[460px] lg:h-[820px] overflow-hidden">
                  <img src={sec.img} alt={sec.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-8 left-6 right-6">
                    <span className="text-[#E6B450] text-lg font-black">{sec.id}</span>
                    <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/80">Lĩnh vực</p>
                    <h3 className="mt-1 text-base lg:text-lg font-black uppercase tracking-wide text-white leading-tight">
                      {sec.name}
                    </h3>
                    <span className="mt-4 inline-block bg-red-600 px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white transition group-hover:bg-red-700">
                      XEM THÊM
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. DỰ ÁN */}
        <section className="relative w-full bg-white overflow-hidden">
          {/* Tam giác đỏ ngược nối tiếp từ phần Lĩnh vực, kết thúc ở cuối phần Dự án */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-[85%] md:w-[50%] bg-red-700 z-0"
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          ></div>

          <div className="relative z-10">
            {/* Tiêu đề + tab danh mục */}
            <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10 pt-12 pb-10 pl-6 md:pl-12 pr-6">
              <div className="text-white shrink-0">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide">DỰ ÁN</h2>
                <p className="mt-1 text-xs font-bold tracking-[0.25em] text-white/90">APLUS GROUP/</p>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] md:text-xs font-bold uppercase tracking-wider md:ml-auto md:max-w-[46%]">
                {PROJECT_TABS.map((tab, idx) => (
                  <React.Fragment key={tab}>
                    {idx > 0 && <span className="text-gray-300">/</span>}
                    <span className={idx === 0 ? 'text-red-600 cursor-pointer' : 'text-gray-500 hover:text-red-600 cursor-pointer transition-colors'}>
                      {tab}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Lưới dự án: 1 nổi bật + 4 thẻ — cách lề chút để lộ viền đỏ */}
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] pl-5 md:pl-12 pr-5 md:pr-10 pb-28">
              {/* Dự án nổi bật */}
              <div className="flex flex-col">
                <Link to={projects[0] ? `/project/${slugify(projects[0].title)}` : '#'} className="group relative h-[360px] lg:h-[520px] overflow-hidden rounded-sm bg-gray-100 shadow-sm block">
                  <img src={projects[0]?.img} alt={projects[0]?.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <img src="/ảnh web vina/logo header.png" alt="APlus" className="absolute top-5 right-5 h-7 w-auto object-contain opacity-90" />
                </Link>
                {/* Dải chữ nền trắng nằm trên nền đỏ */}
                <div className="flex items-center justify-between gap-4 bg-white px-4 md:px-6 py-5 rounded-b-sm">
                  <Link to={projects[0] ? `/project/${slugify(projects[0].title)}` : '#'} className="text-base md:text-xl font-black uppercase tracking-wide text-gray-900 leading-snug hover:text-red-600 transition-colors">
                    {projects[0]?.title}
                  </Link>
                  <Link to={projects[0] ? `/project/${slugify(projects[0].title)}` : '#'} className="shrink-0 bg-red-600 text-white text-[11px] md:text-xs font-black uppercase tracking-widest px-6 py-3 rounded-md hover:bg-red-700 transition">
                    XEM THÊM
                  </Link>
                </div>
              </div>

              {/* 4 thẻ dự án */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.slice(1, 5).map((project, idx) => (
                  <div key={idx} className="group flex flex-col bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden">
                    <Link to={`/project/${slugify(project.title)}`} className="relative h-40 lg:h-48 overflow-hidden bg-gray-100 block">
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </Link>
                    <div className="relative p-4 pb-5">
                      <Link to={`/project/${slugify(project.title)}`} className="block text-sm font-black uppercase tracking-wide text-gray-900 leading-snug pr-12 hover:text-red-600 transition-colors">
                        {project.title}
                      </Link>
                      <Link to={`/project/${slugify(project.title)}`} className="mt-3 inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-md hover:bg-red-700 transition">
                        XEM THÊM
                      </Link>
                      <img src="/ảnh web vina/logo header.png" alt="APlus" className="absolute bottom-4 right-4 h-5 w-auto object-contain opacity-80" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. KHÁCH HÀNG */}
        <section className="w-full bg-white pt-16 pb-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-red-600">KHÁCH HÀNG</h2>
              <p className="mt-2 text-sm font-bold tracking-[0.2em] text-gray-700 ml-1">APLUS GROUP/</p>
            </div>
          </div>

          {/* Carousel đánh giá — tràn sát lề, nổi rõ thẻ giữa */}
          <div className="relative w-full">
            {/* Nút điều hướng */}
            <button
              type="button"
              onClick={() => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full bg-white/90 text-red-600 shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              aria-label="Đánh giá trước"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => setActiveTestimonial((p) => (p + 1) % testimonials.length)}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full bg-white/90 text-red-600 shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              aria-label="Đánh giá tiếp theo"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>

            <div className="flex items-center justify-center gap-4 md:gap-5">
              {(() => {
                const n = testimonials.length;
                if (!n) return null;
                const slots = [-2, -1, 0, 1, 2];
                const variants = ['edge', 'side', 'active', 'side', 'edge'];
                return slots.map((d, i) => {
                  const t = testimonials[(activeTestimonial + d + n * 2) % n];
                  const variant = variants[i];
                  const sizeClass =
                    variant === 'active'
                      ? 'w-[80%] sm:w-[46%] lg:w-[40%] h-[360px] opacity-100 z-20 shadow-2xl'
                      : variant === 'side'
                      ? 'hidden sm:block w-[27%] lg:w-[24%] h-[300px] opacity-60'
                      : 'hidden lg:block w-[18%] h-[280px] opacity-40';
                  return (
                    <div
                      key={i}
                      onClick={() => variant !== 'active' && setActiveTestimonial((activeTestimonial + d + n * 2) % n)}
                      className={`relative shrink-0 self-center rounded-2xl overflow-hidden transition-all duration-500 ${variant !== 'active' ? 'cursor-pointer' : ''} ${sizeClass}`}
                    >
                      <img src={t.projectImg} alt={t.name} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/45" />
                      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center text-white">
                        <div className="flex items-center gap-4">
                          <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover border-2 border-white/70 shrink-0" />
                          <div className="text-[#E6B450] text-base tracking-widest">★★★★★</div>
                        </div>
                        <p className="mt-4 text-sm md:text-base italic leading-relaxed line-clamp-4">
                          {t.comment}
                        </p>
                        <p className="mt-4 font-black tracking-wide">
                          {t.name} <span className="font-medium text-white/80">/ {t.address}</span>
                        </p>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>

          {/* Chấm phân trang */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2 rounded-full transition-all ${idx === activeTestimonial ? 'bg-red-600 w-6' : 'bg-gray-300 w-2'}`}
                aria-label={`Xem đánh giá ${idx + 1}`}
              ></button>
            ))}
          </div>

          {/* Dải băng logo đối tác chạy */}
          <div className="mt-12 bg-red-600 py-5 overflow-hidden">
            <div className="flex items-center gap-4 w-max animate-[aplus-marquee_28s_linear_infinite]">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <div key={idx} className="bg-white rounded-md h-16 w-40 flex items-center justify-center px-5 shrink-0">
                  <img src={logo} alt="Đối tác" className="max-h-9 max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
          <style>{`@keyframes aplus-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </section>

        {/* 6. TIN TỨC */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-10">
            {/* Sidebar */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-red-600">TIN TỨC</h2>
              <p className="mt-2 text-sm font-bold tracking-[0.2em] text-gray-700 ml-1">APLUS GROUP/</p>
              <ul className="mt-8 space-y-4">
                {NEWS_MENU.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-800 hover:text-red-600 cursor-pointer transition-colors">
                    <span className="text-red-600 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4 thẻ tin tức */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {news.map((n, idx) => (
                <Link key={idx} to="/tin-tuc" className="group flex flex-col">
                  <div className="relative h-44 overflow-hidden rounded-md bg-gray-100">
                    <img src={n.img} alt={n.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 bg-white rounded-sm border border-red-600 text-center px-2.5 py-1.5 shadow-sm">
                      <span className="block text-lg font-black leading-none text-gray-900">{n.date}</span>
                      <span className="block text-[10px] font-bold text-red-600">{n.month}</span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-sm md:text-[15px] font-black text-gray-900 leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {n.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}
