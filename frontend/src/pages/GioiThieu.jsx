// frontend/src/pages/GioiThieu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSiteData } from '../context/SiteDataContext';

export default function GioiThieu() {
  const { introPageData = { coreValues: [], featuredProjects: [] } } = useSiteData();

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-between">
      {/* HEADER CỐ ĐỊNH */}
      <Header />

      <main className="flex-grow">
        {/* 1. TOP BANNER PAGE */}
        <section
          className="relative h-[280px] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url('${introPageData.bannerImg}')` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          <h1 className="relative z-10 text-4xl font-black tracking-widest uppercase text-white border-b-4 border-white/20 pb-2">
            Giới Thiệu
          </h1>
        </section>

        {/* 2. KHỐI GIỚI THIỆU CHÍNH (ẢNH LỒNG NGHỆ THUẬT) */}
        <section className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Cụm ảnh kép bo góc xếp chồng bên trái */}
          <div className="lg:col-span-5 relative min-h-[480px] w-full hidden sm:flex justify-center">
            <div className="absolute top-0 left-4 w-[75%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 z-10">
              {/* Sửa lại đường dẫn ảnh local tại đây */}
              <img src="/ảnh web vina/ảnh giới thiệu/giới thiệu 2.jpg" alt="Không gian Aplus 1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-4 w-[75%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20 translate-y-4">
              {/* Sửa lại đường dẫn ảnh local tại đây */}
              <img src="/ảnh web vina/ảnh giới thiệu/giới thiệu 3.jpg" alt="Không gian Aplus 2" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Nội dung chữ bên phải */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">GIỚI THIỆU</span>
            <h2 className="text-4xl lg:text-5xl font-black text-red-600 tracking-wide uppercase">APLUS GROUP</h2>

            <div className="text-gray-600 text-base lg:text-lg leading-relaxed space-y-4 text-justify">
              <p>
                <strong>APLUS GROUP</strong> là thương hiệu nội thất cao cấp theo đuổi tiêu chuẩn cao cấp, định hình phong cách sống hiện đại và đẳng cấp. Không chỉ cung cấp sản phẩm, APLUS xây dựng hệ sinh thái toàn diện từ cửa, nội thất, khóa đến bàn bida và thiết bị âm thanh, đảm bảo sự đồng bộ về chất lượng và trải nghiệm.
              </p>
              <p>
                Với triết lý <strong>uy tín – chất lượng – khác biệt</strong>, mỗi sản phẩm của APLUS đều được chọn lọc kỹ lưỡng, chú trọng từ thiết kế đến độ bền và tính ứng dụng thực tế. Chúng tôi tin rằng giá trị thương hiệu được tạo nên từ trải nghiệm khách hàng, vì vậy luôn không ngừng cải tiến để mang đến giải pháp tối ưu và bền vững.
              </p>
              <p>
                Hướng đến vị thế dẫn đầu, APLUS GROUP cam kết đồng hành cùng khách hàng trong việc kiến tạo không gian sống và giải trí đẳng cấp, khác biệt và mang dấu ấn riêng.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/lien-he" className="bg-red-600 text-white text-sm md:text-base font-bold px-8 py-4 rounded-xl hover:bg-red-700 shadow-md shadow-red-600/10 cursor-pointer uppercase tracking-wider">
                Tư vấn ngay ›
              </Link>
              <div className="flex items-center gap-3 border border-gray-200/60 rounded-xl px-5 py-2.5 bg-gray-50/50">
                <span className="text-red-600 text-base">📞</span>
                <div>
                  <span className="text-gray-400 block text-xs font-bold tracking-widest">HOTLINE TƯ VẤN</span>
                  <a href="tel:+84945389389" className="font-black text-gray-800 hover:text-red-600 text-base tracking-wide">+84.945.389.389</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. KHỐI GIÁ TRỊ CỐT LÕI NỀN ĐỎ (CHIẾN LƯỢC - TẦM NHÌN - SỨ MỆNH) */}
        <section className="w-full bg-[#be1e2d] text-white py-16 shadow-inner">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {introPageData.coreValues.map((v, i) => (
              <div key={i} className="pt-6 md:pt-0 md:px-6 space-y-3 first:pt-0">
                <div className="text-3xl mb-1">
                  {i === 0 ? "📋" : i === 1 ? "👁" : "📈"}
                </div>
                <h3 className="font-black text-lg md:text-xl tracking-widest uppercase">{v.title}</h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium max-w-sm mx-auto text-justify md:text-center">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. KHỐI DỰ ÁN TIÊU BIỂU (SLIDER / LIST CARD) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <span className="text-xs font-bold text-gray-400 font-mono block mb-1">APLUS GROUP/</span>
            <h2 className="text-3xl lg:text-4xl font-black text-red-600 mb-10 tracking-wide uppercase">DỰ ÁN TIÊU BIỂU</h2>

            <div className="relative flex items-center w-full">
              {/* Nút điều hướng mũi tên trái phải */}
              <button className="absolute -left-2 z-10 w-9 h-9 bg-white shadow-md border rounded-full flex items-center justify-center font-bold text-gray-600 hover:bg-red-600 hover:text-white transition-colors cursor-pointer">‹</button>
              <button className="absolute -right-2 z-10 w-9 h-9 bg-white shadow-md border rounded-full flex items-center justify-center font-bold text-gray-600 hover:bg-red-600 hover:text-white transition-colors cursor-pointer">›</button>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full px-4">
                {introPageData.featuredProjects.map((p, i) => (
                  <div key={i} className="group rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col justify-between">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 bg-black text-white text-center">
                      <h4 className="font-black text-sm md:text-base tracking-wide uppercase line-clamp-1">{p.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER CHÂN TRANG */}
      <Footer />
    </div>
  );
}
