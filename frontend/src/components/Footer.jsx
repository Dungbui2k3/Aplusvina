import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-xs pt-16 pb-6 border-t border-gray-900 tracking-wide">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* CỘT 1: THÔNG TIN CÔNG TY (Chiếm 4/12 cột) */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="font-black text-white uppercase text-sm tracking-widest relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-gray-700 after:mt-2">
            CÔNG TY TNHH THỊNH PHÚC HƯNG
          </h4>
          <p className="text-[11px] font-medium leading-relaxed text-gray-400">
            Aplus – Giải pháp Hệ Cửa, Nội Thất & Khóa Phụ Kiện.
          </p>
          <div className="space-y-3 text-[11px] font-medium text-gray-300">
            <p className="flex items-start gap-2">
              <span className="text-gray-500 shrink-0">📍</span>
              <span><strong>NHÀ MÁY:</strong> Ga Lạc Đạo, Hưng Yên, Việt Nam</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gray-500 shrink-0">📍</span>
              <span><strong>SHOWROOM HÀ NỘI:</strong> Liền kề 22, Louis 6, KĐT Louis City, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội, Việt Nam</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gray-500 shrink-0">📍</span>
              <span><strong>SHOWROOM HỒ CHÍ MINH:</strong> 255A18 Nguyễn Văn Lượng, Phường Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gray-500 shrink-0">📞</span>
              <a href="tel:0945389389" className="hover:text-red-600 transition-colors">0945.389.389</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gray-500 shrink-0">✉</span>
              <a href="mailto:hotro@aplusvin.vn" className="hover:text-red-600 transition-colors">hotro@aplus.vn</a>
            </p>
          </div>
        </div>

        {/* CỘT 2: LIÊN KẾT (Chiếm 2/12 cột) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-black text-white uppercase text-sm tracking-widest relative after:content-[''] after:block after:w-6 after:h-0.5 after:bg-gray-700 after:mt-2">
            LIÊN KẾT
          </h4>
          <ul className="space-y-2.5 text-[11px] font-bold text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors block border-b border-gray-900/40 pb-1.5">Trang chủ</a></li>
            <li><a href="#" className="hover:text-white transition-colors block border-b border-gray-900/40 pb-1.5">Tin tức</a></li>
            <li><a href="#" className="hover:text-white transition-colors block border-b border-gray-900/40 pb-1.5">Giới thiệu</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Liên hệ</a></li>
          </ul>
        </div>

        {/* CỘT 3: SẢN PHẨM (Chiếm 2/12 cột) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-black text-white uppercase text-sm tracking-widest relative after:content-[''] after:block after:w-6 after:h-0.5 after:bg-gray-700 after:mt-2">
            SẢN PHẨM
          </h4>
          <ul className="space-y-2.5 text-[11px] font-bold text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors block border-b border-gray-900/40 pb-1.5">Hệ cửa APlus</a></li>
            <li><a href="#" className="hover:text-white transition-colors block border-b border-gray-900/40 pb-1.5">Nội thất Aplus</a></li>
            <li><a href="#" className="hover:text-white transition-colors block border-b border-gray-900/40 pb-1.5">Khóa phụ kiện</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Sản phẩm khác</a></li>
          </ul>
        </div>

        {/* CỘT 4: ĐĂNG KÝ NHẬN TIN (Chiếm 4/12 cột) */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="font-black text-white uppercase text-sm tracking-widest relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-gray-700 after:mt-2">
            ĐĂNG KÝ NHẬN TIN
          </h4>
          <p className="text-[11px] leading-relaxed text-gray-400 font-medium">
            Quý khách đăng ký nhận bản tin & sự kiện mới từ <strong className="text-white">Aplus</strong> nhé.
          </p>
          
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email (*)" 
                className="w-full bg-[#141414] border border-gray-800 rounded-lg px-4 py-3 text-[11px] text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
            </div>
            <button 
              type="submit" 
              className="bg-red-600 hover:bg-red-700 text-white font-black px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-red-600/10"
            >
              Đăng ký
            </button>
          </form>
        </div>

      </div>

      {/* COPYRIGHT LOWER BAR */}
      <div className="container mx-auto px-4 mt-12 pt-4 border-t border-gray-900/60 flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold text-gray-600 gap-2">
        <p>Bản quyền 2026 © Mọi thông tin tin liên Aplusgroup.vn</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}