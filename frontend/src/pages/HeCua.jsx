// frontend/src/pages/HeCua.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { compositeData, fireproofData, aluminumData } from '../data/mockData';

export default function HeCua({ type }) {
  // Lựa chọn data fix cứng dựa vào loại cửa truyền xuống từ Router
  let currentData = compositeData;
  let titlePage = "CỬA COMPOSITE";
  // Cập nhật ảnh banner mặc định bằng file local
  let bannerImg = "/ảnh web vina/ảnh hệ cửa/composite/composite.jpg";

  if (type === 'chong-chay') {
    currentData = fireproofData;
    titlePage = "CỬA GỖ CHỐNG CHÁY";
    bannerImg = "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/chống cháy.jpg";
  } else if (type === 'nhom-kinh') {
    currentData = aluminumData;
    titlePage = "CỬA NHÔM KÍNH";
    bannerImg = "/ảnh web vina/ảnh hệ cửa/nhôm kính/nhôm kính.jpg";
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow">
        {/* Banner đầu trang (Giống ảnh 10, 12, 14) */}
        <section 
          className="relative h-[220px] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url('${bannerImg}')` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
          <div className="relative z-10 bg-white text-red-600 font-black text-sm md:text-base px-10 py-3 rounded-lg border border-red-600/20 shadow-xl uppercase tracking-wider">
            {titlePage}
          </div>
        </section>

        {/* Khối thanh bộ lọc Tag con (Giống ảnh: Cửa trơn, Cửa phào / 60 phút, 90 phút...) */}
        <section className="py-8 bg-white text-center">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
            {currentData.categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`px-5 py-2 text-xs font-black rounded-lg border transition-all ${idx === 0 ? 'border-red-600 text-red-600 bg-red-50/20' : 'border-gray-200 text-gray-600 hover:border-red-600 hover:text-red-600 bg-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Khối Grid danh sách sản phẩm (Mẫu màu/Mẫu cửa bo góc) */}
        <section className="pb-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentData.products.map((p, i) => (
                <div key={i} className="group cursor-pointer space-y-3">
                  {/* Khung ảnh bo góc sâu chuẩn thiết kế */}
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                    />
                  </div>
                  {/* Tên mã và mô tả màu sắc */}
                  <div className="px-1">
                    {p.code && <span className="block font-black text-gray-900 text-sm tracking-wide">{p.code}</span>}
                    <span className="block text-xs font-bold text-gray-500 mt-0.5">{p.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Phân trang (Nếu là dòng cửa chống cháy - có 3 trang) */}
            {type === 'chong-chay' && (
              <div className="flex justify-center items-center gap-2 mt-12 text-xs font-black">
                <span className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center">1</span>
                <span className="w-7 h-7 border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:border-red-600 hover:text-red-600 cursor-pointer">2</span>
                <span className="w-7 h-7 border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:border-red-600 hover:text-red-600 cursor-pointer">3</span>
                <span className="w-7 h-7 border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:border-red-600 hover:text-red-600 cursor-pointer">›</span>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}