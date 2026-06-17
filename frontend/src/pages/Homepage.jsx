// frontend/src/pages/Homepage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NhanTuVan from '../components/NhanTuVan';
import { homeSliders, homeIntroData, sectors, projects, news } from '../data/mockData';

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeSliders.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-gray-800 min-h-screen font-sans flex flex-col justify-between overflow-x-hidden">
      
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
        <section className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-b border-gray-200/60">
          <div className="md:col-span-7 space-y-5">
            <div className="space-y-1">
              <span className="text-xs md:text-sm font-bold text-red-600 tracking-[0.25em] uppercase block">
                {homeIntroData.subtitle}
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-wide uppercase">
                {homeIntroData.title}
              </h2>
              <div className="w-12 h-1 bg-red-600 mt-2"></div>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify font-medium">
              {homeIntroData.description}
            </p>
            <div className="pt-2">
              <Link to="/gioi-thieu" className="text-xs md:text-sm font-bold tracking-widest uppercase text-red-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1">
                Xem chi tiết hành trình của chúng tôi →
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-gray-50">
            <img src={homeIntroData.img} alt="Hành trình về Aplus Group" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* 3. LĨNH VỰC ĐẦU TƯ */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-8">
            <div className="rounded-[32px] bg-red-700 text-white p-12 flex flex-col justify-between shadow-2xl shadow-red-500/10">
              <div>
                <p className="text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-red-200/80">
                  LĨNH VỰC
                </p>
                <h2 className="mt-6 text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight">
                  ĐẦU TƯ
                </h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-red-100/90">
                  APlus Group mang đến giải pháp toàn diện cho hệ cửa, nội thất, khóa phụ kiện, âm thanh cao cấp và thiết kế bida đẳng cấp.
                </p>
              </div>
              <div className="mt-10">
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] font-bold text-red-100/80">
                  Xem toàn bộ lĩnh vực
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m13 18 6-6-6-6"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
              {sectors.map((sec) => (
                <Link key={sec.id} to={sec.link} className="group overflow-hidden rounded-[32px] shadow-2xl border border-gray-200/20 bg-white">
                  <div className="relative h-[560px] overflow-hidden">
                    <img src={sec.img} alt={sec.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/70">Lĩnh vực</span>
                      <h3 className="mt-3 text-lg md:text-xl font-black uppercase tracking-[0.06em] text-white leading-tight whitespace-nowrap overflow-hidden">
                        {sec.name}
                      </h3>
                      <button className="mt-5 rounded-full bg-red-600 px-5 py-2 text-xs md:text-sm font-black uppercase tracking-[0.25em] text-white transition hover:bg-red-700 whitespace-nowrap">
                        XEM THÊM
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-900 text-white border-t border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
              <div className="space-y-1">
                <span className="text-sm md:text-base font-bold text-red-500 font-mono tracking-widest block">DỰ ÁN /</span>
                <h2 className="text-3xl md:text-4xl font-black tracking-wider uppercase">A+PLUS GROUP</h2>
              </div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.28em] text-gray-400 max-w-2xl">
                TỔ HỢP KHU CHUNG CƯ VĂN PHÒNG / QUẦN THỂ DU LỊCH, NGHỈ DƯỠNG / HÀN KHÔNG / KHU CÔNG NGHIỆP CÔNG NGHỆ CAO
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
              <div className="rounded-[28px] overflow-hidden bg-white shadow-2xl shadow-black/20">
                <div className="relative h-[420px] overflow-hidden bg-black">
                  <img src={projects[0].img} alt={projects[0].title} className="w-full h-full object-contain" />
                </div>
                <div className="p-6 bg-zinc-950 border-t border-zinc-800">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide text-white">{projects[0].title}</h3>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm md:text-base font-black uppercase tracking-[0.2em] text-white hover:bg-red-700 transition">
                    XEM THÊM
                    <span>→</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.slice(1, 5).map((project, idx) => (
                  <div key={idx} className="group overflow-hidden rounded-[28px] bg-white shadow-xl shadow-black/20 border border-gray-200">
                    <div className="relative h-48 overflow-hidden bg-black">
                      <img src={project.img} alt={project.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="p-4 bg-zinc-950">
                      <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-white leading-tight">{project.title}</h4>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-red-500">
                        XEM THÊM
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. TIN TỨC & SỰ KIỆN */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-1">
            <span className="text-xs md:text-sm font-bold text-red-600 tracking-widest block">JOURNAL</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-wide uppercase">TIN TỨC & SỰ KIỆN</h2>
            <div className="w-12 h-1 bg-red-600 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((n, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-5 bg-white p-3.5 shadow-sm group cursor-pointer border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
                <div className="w-full sm:w-5/12 aspect-[4/3] overflow-hidden bg-gray-50 flex-shrink-0 relative rounded-xl">
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-600 uppercase font-mono">
                      <span>{n.date}</span>
                      <span className="text-gray-300">/</span>
                      <span className="text-gray-400">{n.month}</span>
                    </div>
                    <h3 className="font-black text-sm md:text-base uppercase text-gray-900 line-clamp-2 tracking-wide group-hover:text-red-600 transition-colors">
                      {n.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {n.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b-2 border-gray-900 w-max pt-1 group-hover:text-red-600 group-hover:border-red-600 transition-colors">
                    Đọc tiếp
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. NHÂN TƯ VẤN */}
        <NhanTuVan />
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}