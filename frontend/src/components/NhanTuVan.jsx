import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/mockData';

export default function NhanTuVan() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
    setAutoPlay(false);
  };

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-wider uppercase">
            KHÁCH HÀNG
          </h2>
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">
            APLUS GROUP/
          </p>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-3"></div>
        </div>

        {/* TESTIMONIALS CAROUSEL */}
        <div className="relative">
          
          {/* Slides */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side - Text Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ${
                      idx === currentSlide 
                        ? 'opacity-100 translate-x-0 z-10' 
                        : idx < currentSlide
                        ? 'opacity-0 -translate-x-10 z-0'
                        : 'opacity-0 translate-x-10 z-0'
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Slide number */}
                      <div className="flex items-center gap-2">
                        <span className="text-5xl font-black text-red-600 opacity-30">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>

                      {/* Comment */}
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium italic">
                        "{t.comment}"
                      </p>

                      {/* Author */}
                      <div className="space-y-1 pt-2">
                        <h4 className="font-black text-gray-900 text-lg tracking-wide">
                          {t.name}
                        </h4>
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">
                          {t.address}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="h-64"></div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-3xl shadow-lg border border-gray-200">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ${
                      idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <img 
                      src={t.img} 
                      alt={t.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Slide number overlay */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-bold tracking-wider z-10">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                </div>
              </div>
            </div>

          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2.5 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentSlide
                    ? 'bg-red-600 w-3 h-3'
                    : 'bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          {/* Prev/Next buttons */}
          <button
            onClick={() => goToSlide((currentSlide - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-20 text-gray-400 hover:text-red-600 transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
            </svg>
          </button>

          <button
            onClick={() => goToSlide((currentSlide + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-20 text-gray-400 hover:text-red-600 transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
