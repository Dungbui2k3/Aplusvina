import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/mockData';

const partnerLogos = [
  "/ảnh web vina/ảnh trang chủ/đối tác 1.png",
  "/ảnh web vina/ảnh trang chủ/đối tác 2.png",
  "/ảnh web vina/ảnh trang chủ/đối tác 3.png",
  "/ảnh web vina/ảnh trang chủ/đối tác 4.png",
  "/ảnh web vina/logo header.png",
];

// Repeat to create a seamless marquee
const marqueeItems = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

export default function NhanTuVan() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play interval that clears and resets when currentSlide changes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  return (
    <section className="bg-white pt-20 pb-0 border-t border-gray-100">
      {/* Testimonials container (constrained width) */}
      <div className="container mx-auto px-4 max-w-[1360px]">
        
        {/* HEADER */}
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-3xl font-black text-gray-900 tracking-wider uppercase">
            KHÁCH HÀNG
          </h2>
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
            APLUS GROUP/
          </p>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-3"></div>
        </div>

        {/* TESTIMONIALS CAROUSEL */}
        <div className="relative px-4 md:px-10">
          
          {/* Slides */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side - Text Content */}
            <div className="lg:col-span-5 relative min-h-[300px]">
              {testimonials.map((t, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <div
                    key={idx}
                    className={`transition-all duration-700 ease-in-out ${
                      isActive 
                        ? 'relative opacity-100 translate-x-0 z-10 pointer-events-auto' 
                        : 'absolute inset-0 opacity-0 translate-x-10 z-0 pointer-events-none'
                    }`}
                  >
                    <div className="space-y-5">
                      {/* Slide number */}
                      <span className="text-6xl font-black text-red-200 block leading-none font-mono">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Stars */}
                      <div className="flex gap-1 text-amber-400 text-lg">
                        ★★★★★
                      </div>

                      {/* Comment */}
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed font-semibold italic text-justify">
                        "{t.comment}"
                      </p>

                      {/* Author */}
                      <div className="space-y-1 pt-2">
                        <h4 className="font-black text-gray-900 text-lg tracking-wide">
                          {t.name}
                        </h4>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                          {t.address}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right side - Overlapping Images */}
            <div className="lg:col-span-7">
              <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[400px]">
                {testimonials.map((t, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        isActive ? 'opacity-100 scale-100 z-10 pointer-events-auto' : 'opacity-0 scale-95 z-0 pointer-events-none'
                      }`}
                    >
                      <div className="relative aspect-[4/3] w-full max-w-[500px] mx-auto md:mr-0 pl-6 pt-6 md:pl-8 md:pt-8">
                        {/* Project Image (square/rect underneath) */}
                        <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
                          <img 
                            src={t.projectImg} 
                            alt="Dự án Aplus" 
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Customer Avatar (circle on top) */}
                        <div className="absolute top-0 left-0 w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden z-20 bg-white">
                          <img 
                            src={t.img} 
                            alt={t.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Slide number overlay badge */}
                        <div className="absolute bottom-6 right-6 bg-black/80 text-white px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-widest z-10">
                          {String(idx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? 'bg-red-600 w-3 h-3'
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          {/* Prev button */}
          <button
            onClick={() => goToSlide((currentSlide - 1 + testimonials.length) % testimonials.length)}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={() => goToSlide((currentSlide + 1) % testimonials.length)}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

      </div>

      {/* PARTNER LOGOS INFINITE MARQUEE (Full-width, outside the constrained container) */}
      <div className="mt-20 pt-10">
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.25em]">ĐỐI TÁC CHIẾN LƯỢC</span>
        </div>
        
        {/* Marquee viewport - full width, stretches to page edges */}
        <div className="relative w-full overflow-hidden py-6 bg-[#be1e2d] shadow-inner">
          <div className="flex gap-8 items-center animate-marquee whitespace-nowrap">
            {marqueeItems.map((logo, idx) => (
              <div key={idx} className="inline-flex items-center justify-center bg-white rounded-xl px-4 py-2 h-10 w-28 shadow-sm flex-shrink-0">
                <img src={logo} alt="Đối tác Aplus" className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
