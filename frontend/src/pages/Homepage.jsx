// frontend/src/pages/Homepage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { sectors, homeSliders, homeProjects, homeTestimonials, homePartners } from '../data/mockData';

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tự động chạy Slider Banner chính
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeSliders.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-between">
      {/* HEADER */}
      <Header />

      <main className="flex-grow">
        {/* 1. HERO SLIDER BANNER */}
        <section className="relative h-[480px] md:h-[600px] overflow-hidden bg-gray-900 text-white">
          {homeSliders.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ backgroundImage: `url('${slide.img}')` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-widest uppercase mb-4 drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-200 border-b border-white/40 pb-2">
                  Giải pháp toàn diện về hệ cửa & nội thất cao cấp
                </p>
              </div>
            </div>
          ))}
          
          {/* Nút điều hướng Slider */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
            {homeSliders.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-red-600 w-8' : 'bg-white/50'}`}
              ></button>
            ))}
          </div>
        </section>

        {/* 2. KHỐI LĨNH VỰC HOẠT ĐỘNG (SECTORS) */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-red-600 tracking-widest uppercase">DANH MỤC</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-wide uppercase">LĨNH VỰC HOẠT ĐỘNG</h2>
            <div className="w-12 h-1 bg-red-600 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sec) => (
              <div key={sec.id} className="group cursor-pointer space-y-4">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 relative">
                  <img 
                    src={sec.img} 
                    alt={sec.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-white">
                    <span className="text-xs font-mono opacity-60 font-bold">{sec.id}/</span>
                    <h3 className="font-black text-sm tracking-wide uppercase">{sec.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. KHỐI DỰ ÁN TIÊU BIỂU (DỰ ÁN TRANG CHỦ) */}
        <section className="py-20 bg-gray-50/50 border-t border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <span className="text-xs font-bold text-gray-400 font-mono block mb-1">APLUS GROUP /</span>
                <h2 className="text-2xl font-black text-red-600 tracking-wide uppercase">DỰ ÁN TIÊU BIỂU</h2>
              </div>
              <button className="text-xs font-black border border-red-600 text-red-600 px-5 py-2.5 rounded-xl bg-white hover:bg-red-600 hover:text-white transition-all uppercase tracking-wider cursor-pointer">
                Xem tất cả dự án ›
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeProjects.slice(0, 3).map((p, i) => (
                <div key={i} className="group rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col justify-between">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                  </div>
                  <div className="p-4 bg-gray-900 text-white text-center">
                    <h4 className="font-black text-xs tracking-wide uppercase line-clamp-1">{p.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. KHỐI Ý KIẾN KHÁCH HÀNG & ĐỐI TÁC */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Đánh giá khách hàng bên trái */}
            <div className="lg:col-span-7 space-y-8">
              <h3 className="text-xl font-black text-gray-900 tracking-wide uppercase border-l-4 border-red-600 pl-3">
                ĐÁNH GIÁ TỪ KHÁCH HÀNG
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {homeTestimonials.slice(0, 2).map((t, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-4">
                    <p className="text-gray-600 text-xs leading-relaxed italic text-justify">
                      "{t.comment}"
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border">
                        <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h5 className="font-black text-xs text-gray-900">{t.name}</h5>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.address}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo đối tác bên phải */}
            <div className="lg:col-span-5 space-y-6 bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-sm font-black text-center text-gray-400 tracking-widest uppercase">
                ĐỐI TÁC CHIẾN LƯỢC
              </h3>
              <div className="grid grid-cols-2 gap-4 items-center">
                {homePartners.map((partner, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200/60 shadow-sm flex items-center justify-center h-20 group hover:border-red-600/40 transition-colors">
                    <img src={partner.img} alt={partner.name} className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}