// frontend/src/App.jsx
import React, { useState, useEffect } from 'react'; // <-- SỬA LỖI 1: Đã import đầy đủ useState và useEffect
import Header from './components/Header';
import Footer from './components/Footer';
import GioiThieu from './pages/GioiThieu';
import HeCua from './pages/HeCua';
import { sectors, projects, testimonials, news } from './data/mockData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('trang-chu');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/gioi-thieu') {
        setCurrentPage('gioi-thieu');
      } else if (hash === '#/he-cua/composite') {
        setCurrentPage('cua-composite');
      } else if (hash === '#/he-cua/chong-chay') {
        setCurrentPage('cua-chong-chay');
      } else if (hash === '#/he-cua/nhom-kinh') {
        setCurrentPage('cua-nhom-kinh');
      } else {
        setCurrentPage('trang-chu');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // ĐIỀU HƯỚNG SANG TRANG HỆ CỬA TƯƠNG ỨNG
  if (currentPage === 'gioi-thieu') return <GioiThieu />;
  if (currentPage === 'cua-composite') return <HeCua type="composite" />;
  if (currentPage === 'cua-chong-chay') return <HeCua type="chong-chay" />;
  if (currentPage === 'cua-nhom-kinh') return <HeCua type="nhom-kinh" />;
  return (
    <div className="bg-white text-gray-800 min-h-screen selection:bg-red-600 selection:text-white flex flex-col justify-between">

      {/* HEADER FIXED */}
      <Header />

      <main className="flex-grow">
        {/* HERO BANNER */}
        <div className="h-[450px] bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200')` }}></div>

        {/* GIỚI THIỆU */}
        <section className="container mx-auto px-4 py-16 grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[380px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600" alt="Giới thiệu" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">GIỚI THIỆU</span>
            <h2 className="text-3xl lg:text-4xl font-black text-red-600 mb-6 tracking-wide">APLUS GROUP</h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 mb-8 text-justify">
              <p><strong>APLUS GROUP</strong> là thương hiệu đa lĩnh vực theo đuổi tiêu chuẩn cao cấp, định hình phong cách sống hiện đại và đẳng cấp...</p>
              <p>Với triết lý <strong>uy tín – chất lượng – khác biệt</strong>, mỗi sản phẩm của APLUS đều được chọn lọc kỹ lưỡng...</p>
              <p>Hướng đến vị thế dẫn đầu, APLUS GROUP cam kết đồng hành cùng khách hàng...</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              {/* Nút bấm chuyển vùng nhanh sang trang Giới thiệu */}
              <button
                onClick={() => window.location.hash = '#/gioi-thieu'}
                className="bg-red-600 text-white text-xs font-bold px-8 py-4 rounded-xl hover:bg-red-700 shadow-md shadow-red-600/10 cursor-pointer"
              >
                Xem chi tiết giới thiệu ›
              </button>
              <div className="flex items-center gap-3 border border-gray-200/60 rounded-xl px-5 py-2.5 bg-gray-50/50">
                <span className="text-red-600 text-base">📞</span>
                <div>
                  <span className="text-gray-400 block text-[9px] font-bold tracking-widest">HOTLINE TƯ VẤN</span>
                  <a href="tel:+84945389389" className="font-black text-gray-800 hover:text-red-600 text-sm tracking-wide">+84.945.389.389</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LĨNH VỰC ĐẦU TƯ */}
        <section className="w-full flex flex-col md:flex-row min-h-[500px] bg-black text-white overflow-hidden">
          <div className="md:w-[18%] bg-red-600 p-8 flex flex-col justify-between min-h-[250px] md:min-h-auto">
            <div>
              <h2 className="text-2xl font-black leading-tight uppercase tracking-wider">Lĩnh Vực<br />Đầu Tư</h2>
              <p className="text-[10px] text-red-200 mt-1 font-mono tracking-widest">APLUS GROUP/</p>
            </div>
            <a href="#" className="text-xs text-yellow-400 font-bold hover:text-white transition-colors self-start"><span className="border-b border-yellow-400 pb-0.5">Xem toàn bộ lĩnh vực</span></a>
          </div>
          <div className="md:w-[82%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full">
            {sectors.map((s, i) => (
              <div key={i} className="relative group overflow-hidden border-r border-gray-800/50 h-[380px] md:h-full min-h-[450px] flex flex-col justify-end p-6">
                <img src={s.img} alt={s.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-all duration-300"></div>
                <div className="relative z-10 flex flex-col w-full">
                  <span className="text-red-500 font-mono text-xs font-bold block mb-1">{s.id}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Lĩnh vực</span>
                  <h3 className="font-black text-sm tracking-wide text-white uppercase mb-4 min-h-[32px] leading-snug">{s.name}</h3>
                  <button className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-black py-2.5 px-4 rounded transition-all duration-300 self-start uppercase tracking-wider cursor-pointer">Xem thêm</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DỰ ÁN */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-black mb-8 border-b pb-2">DỰ ÁN APLUS/</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow">
                <img src={projects[0].img} className="w-full h-full object-cover min-h-[300px]" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-bold text-base">{projects[0].title}</h3>
                </div>
              </div>
              {projects.slice(1).map((p, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img src={p.img} className="w-full h-32 object-cover" />
                  <div className="p-4"><h4 className="font-bold text-xs uppercase line-clamp-2">{p.title}</h4></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KHÁCH HÀNG */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-black text-gray-900 mb-1">KHÁCH HÀNG</h2>
            <p className="text-xs text-gray-400 mb-8 tracking-widest uppercase">APLUS GROUP/</p>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
              {testimonials.map((t, i) => (
                <div key={i} className="snap-center shrink-0 w-[290px] sm:w-[360px] md:w-[410px] aspect-[16/11] relative rounded-[1.5rem] overflow-hidden shadow-lg border border-gray-100">
                  <img src={i === 0 ? "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600" : "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600"} className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4]" alt="Interior" />
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full border-2 border-white/40 overflow-hidden bg-gray-600 flex items-center justify-center font-bold text-sm">{t.name[0]}</div>
                      <div className="text-yellow-400 text-xs">★★★★★</div>
                    </div>
                    <p className="text-xs md:text-sm italic text-gray-100/90 line-clamp-4">"{t.comment}"</p>
                    <div className="border-t border-white/20 pt-3">
                      <h4 className="font-bold text-xs">{t.name} <span className="font-normal text-gray-300 text-[11px]">/ {t.address}</span></h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ĐỐI TÁC */}
        <section className="w-full bg-[#be1e2d] py-4 overflow-hidden">
          <div className="w-full overflow-x-auto flex items-center gap-4 px-4 scrollbar-hide">
            <div className="flex items-center gap-3 shrink-0 mx-auto">
              {["A+ INTERIOR", "A+ DOOR", "A+ LOCK", "VINGROUP", "VINHOMES", "AGRIBANK", "XINGFA", "SEALUK", "NEWTECONS", "SUNNY", "VTECH", "HUYHOANG", "KINLONG", "DELTA"].map((brand, idx) => (
                <div key={idx} className="bg-white text-[#be1e2d] font-black text-[10px] md:text-xs px-4 py-2.5 rounded shadow-sm min-w-[100px] text-center uppercase">{brand}</div>
              ))}
            </div>
          </div>
        </section>

        {/* TIN TỨC */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-black text-red-600 mb-1">TIN TỨC</h2>
              <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase mb-8">APLUS GROUP/</p>
              <ul className="space-y-4 text-xs font-black text-gray-800">
                <li className="text-red-600 cursor-pointer">▪◦ TIN ANPLUS GROUP</li>
                <li className="text-gray-600 cursor-pointer">▪◦ CÔNG TY THÀNH VIÊN</li>
                <li className="text-gray-600 cursor-pointer">▪◦ THÔNG TIN BÁO CHÍ</li>
                <li className="text-gray-600 cursor-pointer">▪◦ THÔNG TIN HỢP TÁC</li>
              </ul>
            </div>
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {news.map((n, i) => (
                <div key={i} className="group cursor-pointer flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-4 shadow-sm">
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-center rounded-lg px-2 py-0.5 z-10 text-xs font-black">{n.date}<br /><span className="text-[9px] uppercase">{n.month}</span></div>
                      <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <h3 className="text-xs font-black text-gray-900 group-hover:text-red-600 line-clamp-2 uppercase mb-2">{n.title}</h3>
                  </div>
                  <p className="text-[11px] text-gray-500 line-clamp-3">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NHẬN TƯ VẤN */}
        <section className="w-full bg-black text-white py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded">MIỄN PHÍ</div>
              <h2 className="text-3xl font-black">NHẬN TƯ VẤN HOÀN TOÀN<br />MIỄN PHÍ</h2>
              <p className="text-xs text-gray-400">Thông tin mới nhất về các sản phẩm mới nhất, các sự kiện.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["CHỌN NỘI THẤT PHÙ HỢP", "CHỌN VẬT LIỆU CAO CẤP", "KIỂN THỨC VẬN HÀNH SHOWROOM", "PHÁT TRIỂN DOANH THU"].map((item, idx) => (
                  <div key={idx} className="border border-gray-800 rounded-xl p-4 text-xs font-black hover:border-red-600 transition-colors cursor-pointer bg-gray-900/20">{item}</div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
              <div className="w-full max-w-[520px] bg-white text-gray-900 p-8 rounded-[2rem] shadow-2xl">
                <h3 className="text-sm font-black text-center uppercase mb-1">GIẢM GIÁ ĐẶC BIỆT CHO KHÁCH</h3>
                <p className="text-xs font-black text-red-600 text-center uppercase tracking-widest mb-8">ĐĂNG KÝ HÔM NAY</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="HỌ VÀ TÊN" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold" />
                  <input type="text" placeholder="SỐ ĐIỆN THOẠI" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold" />
                  <input type="email" placeholder="EMAIL" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold" />
                  <button type="submit" className="w-full bg-red-600 text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest cursor-pointer">TẢI XUỐNG MIỄN PHÍ</button>
                </form>
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