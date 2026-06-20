// frontend/src/pages/HeCua.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSiteData } from '../context/SiteDataContext';
import { slugify } from '../utils/slug';

export default function HeCua({ type }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { compositeData, fireproofData, aluminumData } = useSiteData();
  const isTopLevelSection = !type || type === 'noi-that' || type === 'khoa-phu-kien';
  const isSpecialOverview = false;
  const pageTitle = 'HỆ CỬA APLUS';

  const pageData = {
    heCua: {
      bannerImg: '/ảnh web vina/ảnh hệ cửa/hệ cửa 1.png',
      sectionImg: '/ảnh web vina/ảnh hệ cửa/hệ cửa 2.png',
      description: 'APLUS DOOR là thương hiệu mang đến hệ cửa chất lượng cao, thiết kế hiện đại và giải pháp thi công chuyên nghiệp. Chúng tôi cam kết bảo toàn tính thẩm mỹ và an toàn cho công trình, đồng thời tối ưu hóa khả năng vận hành và độ bền theo thời gian.',
      features: [
        'Thiết kế đồng bộ cho mọi loại cửa',
        'Chất lượng cao cấp, gia công chuẩn xác',
        'An toàn, bền bỉ và thẩm mỹ tinh tế',
        'Dịch vụ thi công trọn gói chuyên nghiệp'
      ],
      featureIcons: [
        '/ảnh web vina/ảnh hệ cửa/hệ cửa 3.png',
        '/ảnh web vina/ảnh hệ cửa/hệ cửa 4.png',
        '/ảnh web vina/ảnh hệ cửa/hệ cửa 5.png',
        '/ảnh web vina/ảnh hệ cửa/hệ cửa 6.png'
      ],
      products: [
        { title: 'CỬA COMPOSITE', desc: 'Giải pháp cửa cao cấp với tính năng chống nước tuyệt đối', img: '/ảnh web vina/ảnh hệ cửa/hệ cửa 7.png', link: '/he-cua/composite' },
        { title: 'CỬA GỖ CHỐNG CHÁY', desc: 'Sự kết hợp hoàn hảo, phù hợp cho công trình yêu cầu cao', img: '/ảnh web vina/ảnh hệ cửa/hệ cửa 8.png', link: '/he-cua/chong-chay' },
        { title: 'CỬA NHÔM KÍNH', desc: 'Thiết kế hiện đại, mở rộng không gian phù hợp', img: '/ảnh web vina/ảnh hệ cửa/hệ cửa 9.png', link: '/he-cua/nhom-kinh' }
      ],
      certificates: [
        { title: 'Chứng chỉ APLUS', img: '/ảnh web vina/ảnh hệ cửa/hệ cửa 10.png' },
        { title: 'Chứng chỉ chất lượng 01', img: '/ảnh web vina/cc 1.jpg' },
        { title: 'Chứng chỉ chất lượng 02', img: '/ảnh web vina/cc 2.jpg' },
        { title: 'Chứng chỉ chất lượng 03', img: '/ảnh web vina/cc 3.jpg' }
      ]
    },
    noiThat: {
      bannerImg: '/ảnh web vina/ảnh nội thất/nội thất 1.png',
      sectionImg: '/ảnh web vina/ảnh nội thất/nội thất 10.jpg',
      description: 'Nội thất APLUS kiến tạo không gian sống đồng bộ, sang trọng và tiện nghi. Mỗi chi tiết thiết kế đều được tối ưu hóa cho ánh sáng, bố cục và giá trị thẩm mỹ lâu dài.',
      features: [
        'Thiết kế nội thất đồng bộ cho phòng khách, phòng ngủ và bếp',
        'Chất liệu cao cấp, hoàn thiện tinh xảo',
        'Tối ưu hóa công năng và trải nghiệm sử dụng',
        'Phong cách hiện đại, sang trọng'
      ],
      products: [
        { title: 'PHÒNG KHÁCH SANG TRỌNG', desc: 'Nội thất phòng khách cao cấp đồng bộ APLUS', img: '/ảnh web vina/ảnh nội thất/nội thất 2.jpg', link: '/noi-that-aplus' },
        { title: 'PHÒNG NGỦ TINH TẾ', desc: 'Giải pháp nội thất phòng ngủ êm ái, sang trọng', img: '/ảnh web vina/ảnh nội thất/nội thất 3.png', link: '/noi-that-aplus' },
        { title: 'BẾP HIỆN ĐẠI', desc: 'Nội thất bếp thông minh, tiện nghi và đẹp mắt', img: '/ảnh web vina/ảnh nội thất/nội thất 4.png', link: '/noi-that-aplus' }
      ]
    },
    khoaPhuKien: {
      bannerImg: '/ảnh web vina/ảnh trang chủ/ảnh trang chủ 6.png',
      sectionImg: '/ảnh web vina/ảnh trang chủ/ảnh trang chủ 5.png',
      description: 'Khóa và phụ kiện APLUS mang đến sự đồng bộ hoàn hảo với hệ cửa, đảm bảo an toàn, vận hành mượt mà và tính thẩm mỹ cao cho mọi công trình.',
      features: [
        'Sản phẩm khóa & phụ kiện đồng bộ hệ cửa',
        'Công nghệ an toàn vượt trội cho cửa chính và phụ',
        'Hoàn thiện bền bỉ, vận hành êm ái',
        'Thiết kế sang trọng, phù hợp phong cách APLUS'
      ],
      products: [
        { title: 'KHÓA TAY NẮM CAO CẤP', desc: 'Thiết kế khóa sang trọng cho cửa hiện đại', img: '/ảnh web vina/ảnh trang chủ/ảnh trang chủ 6.png', link: '/khoa-phu-kien' },
        { title: 'BẢN LỀ & CHỐT AN TOÀN', desc: 'Phụ kiện đồng bộ, bảo toàn độ an toàn cửa', img: '/ảnh web vina/ảnh trang chủ/ảnh trang chủ 5.png', link: '/khoa-phu-kien' },
        { title: 'PHỤ KIỆN ĐỒNG BỘ', desc: 'Phụ kiện hoàn thiện cho hệ cửa APLUS', img: '/ảnh web vina/ảnh trang chủ/ảnh trang chủ 4.png', link: '/khoa-phu-kien' }
      ]
    }
  };

  const topLevelData = pageData.heCua;

  useEffect(() => {
    setCurrentPage(1);
  }, [type]);

  // Trang chính của các mục top-level /he-cua, /noi-that-aplus, /khoa-phu-kien
  if (isTopLevelSection) {
    return (
      <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          {/* BANNER */}
          <section className="w-full overflow-hidden bg-white">
            <img
              src={topLevelData.bannerImg}
              alt={pageTitle}
              className="block w-full h-auto"
            />
          </section>

          {/* VỀ CHÚNG TÔI */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[0.92fr_1fr] gap-16 items-center max-w-7xl">
              <div className="rounded-3xl overflow-hidden">
                <img src={topLevelData.sectionImg} alt="Về APLUS DOOR" className="w-full h-full min-h-[520px] object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="block w-8 h-0.5 bg-red-600"></span>
                  <span className="text-sm font-black text-red-600 uppercase tracking-wide">VỀ CHÚNG TÔI</span>
                </div>
                <div className="border-l-4 border-red-600 pl-5 mb-6">
                  <p className="text-xl font-black text-black mb-3">APLUS DOOR</p>
                  <h2 className="text-4xl lg:text-5xl font-black text-red-600 uppercase leading-tight">
                    ĐẲNG CẤP CHẤT LƯỢNG, TIÊU CHUẨN VƯỢT TRỘI
                  </h2>
                </div>
                <p className="text-base lg:text-lg text-black leading-relaxed mb-5">
                  APLUS DOOR không chỉ cung cấp giải pháp cửa, chúng tôi kiến tạo những giá trị bền vững cho không gian sống hiện đại. Với định hướng phát triển theo tiêu chuẩn cao cấp, APLUS DOOR mang đến các dòng cửa chất lượng, kết hợp hoàn hảo giữa độ bền, tính an toàn và thẩm mỹ tinh tế. Sự chỉn chu trong từng chi tiết cùng quy trình kiểm soát nghiêm ngặt giúp sản phẩm đáp ứng yêu cầu khắt khe của cả công trình dân dụng và dự án cao cấp.
                </p>
                <div className="space-y-4 mb-10 text-base text-black">
                  {[
                    'Vật liệu cao cấp, độ bền vượt trội theo thời gian',
                    'Thiết kế hiện đại, phù hợp đa dạng phong cách không gian',
                    'Kết cấu chắc chắn, đảm bảo an toàn và cách âm hiệu quả',
                    'Quy trình thi công, lắp đặt chuyên nghiệp, chính xác',
                    'Dịch vụ bảo hành, bảo trì tận tâm và lâu dài'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-black text-red-600">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-5">
                  <a href="/lien-he" className="inline-flex items-center justify-center rounded-lg bg-red-600 px-11 py-4 text-base font-black text-white hover:bg-red-700 transition-colors">
                    TƯ VẤN NGAY&nbsp;›
                  </a>
                  <a href="tel:+84945389389" className="inline-flex items-center gap-4 rounded-lg border border-gray-200 bg-white px-6 py-3 text-black shadow-sm hover:border-red-600 transition-colors">
                    <span className="text-2xl text-red-600">☎</span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wide">HOTLINE TƯ VẤN</span>
                      <span className="block text-xl font-black">+84.945.389.389</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* THỐNG KÊ */}
          <section className="w-full bg-red-600 text-white py-16">
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">1200+</div>
                <div className="text-xs md:text-sm font-bold text-white/90">DỰ ÁN & CÔNG TRÌNH</div>
                <div className="text-xs mt-1 text-white/70">Đã thi công bàn giao quốc tế</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">5000+</div>
                <div className="text-xs md:text-sm font-bold text-white/90">KHÁCH HÀNG & ĐỐI TÁC</div>
                <div className="text-xs mt-1 text-white/70">Độc hộ cùng APLUS DOOR</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">15000+</div>
                <div className="text-xs md:text-sm font-bold text-white/90">BỘ SẢN PHẨM ĐÃ LẮP ĐẶT</div>
                <div className="text-xs mt-1 text-white/70">Đảm bảo chất lượng tuyệt vời</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">99%</div>
                <div className="text-xs md:text-sm font-bold text-white/90">SỰ HÀI LÒNG</div>
                <div className="text-xs mt-1 text-white/70">Cam kết bảo hành dài hạn</div>
              </div>
            </div>
          </section>

          {/* SẢN PHẨM CỦA CHÚNG TÔI */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-red-600 mb-4">SẢN PHẨM TIÊU BIỂU</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {topLevelData.products.map((product, idx) => (
                  <div key={idx} className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                      <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 text-center space-y-3">
                      <h3 className="text-lg md:text-xl font-black text-red-600 tracking-wide">{product.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{product.desc}</p>
                      <a href={product.link} className="inline-block bg-red-600 text-white text-sm font-bold px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">XEM CHI TIẾT →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-red-600 mb-4">DỰ ÁN TIÊU BIỂU</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img src="/ảnh web vina/ảnh trang chủ/dự án 1.jpg" alt="Dự án 1" className="w-full h-64 object-cover" />
                  <div className="p-5 bg-black text-white text-center font-bold uppercase">KHÁCH SẠN 5 SAO MIKAZUKI</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img src="/ảnh web vina/ảnh trang chủ/dự án 2.jpg" alt="Dự án 2" className="w-full h-64 object-cover" />
                  <div className="p-5 bg-black text-white text-center font-bold uppercase">BRG COASTAL CITY ĐỒ SƠN</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img src="/ảnh web vina/ảnh trang chủ/dự án 3.jpg" alt="Dự án 3" className="w-full h-64 object-cover" />
                  <div className="p-5 bg-black text-white text-center font-bold uppercase">CHUNG CƯ BAN CƠ YẾU</div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="relative bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/ảnh web vina/ảnh hệ cửa/hệ cửa 11.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/10 lg:bg-transparent"></div>
            <div className="container relative z-10 mx-auto px-4">
              <div className="w-full max-w-2xl py-16 lg:py-20">
                <h2 className="text-2xl lg:text-3xl font-black text-red-600 mb-5 uppercase">CAM KẾT PHÁT TRIỂN BỀN VỮNG</h2>
                <div className="w-12 h-0.5 bg-red-600 mb-8"></div>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-black text-lg lg:text-xl text-red-600 uppercase mb-3">01. Sử dụng nguyên liệu thân thiện môi trường</h3>
                    <p className="text-base leading-relaxed text-white">Một trong những điểm chúng tôi chú trọng nhất trong hoạt động nghiên cứu và phát triển sản phẩm là tìm kiếm nguồn nguyên liệu thân thiện với môi trường.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-lg lg:text-xl text-red-600 uppercase mb-3">02. Kiểm soát chất thải</h3>
                    <p className="text-base leading-relaxed text-white">Chúng tôi cam kết giảm thiểu tối mức tối đa chất thải trong các hoạt động của mình và không ngừng nâng cao tỷ lệ tái sử dụng nguyên liệu và đề ra các giải pháp tiêu hủy sản phẩm không phù hợp một cách có trách nhiệm.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-lg lg:text-xl text-red-600 uppercase mb-3">03. Giảm nhu cầu năng lượng</h3>
                    <p className="text-base leading-relaxed text-white">Chúng tôi nỗ lực cải tiến các khâu hoạt động sản xuất kinh doanh với mục tiêu tối ưu hóa nhằm giảm thiểu nhu cầu sử dụng năng lượng.</p>
                  </div>
                  <div>
                    <h3 className="font-black text-lg lg:text-xl text-red-600 uppercase mb-3">04. Phát triển sản phẩm</h3>
                    <p className="text-base leading-relaxed text-white">Chúng tôi đầu tư vào nghiên cứu và phát triển sản phẩm nhằm tạo ra những bộ cửa gỗ chất lượng, được thiết kế đồng bộ, tối ưu, phù hợp với văn hóa tiêu dùng và khí hậu Việt Nam.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-red-600 mb-4">CHỨNG CHỈ CHẤT LƯỢNG</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topLevelData.certificates.map((certificate, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                    <div className="aspect-[4/3] bg-white">
                      <img src={certificate.img} alt={certificate.title} className="w-full h-full object-contain p-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (isSpecialOverview) {
    const pageTitle = type === 'noi-that' ? 'NỘI THẤT APLUS' : 'KHÓA & PHỤ KIỆN APLUS';
    const bannerImg = type === 'noi-that'
      ? '/ảnh web vina/ảnh nội thất/nội thất 1.png'
      : '/ảnh web vina/ảnh trang chủ/ảnh trang chủ 6.png';
    const sectionImg = type === 'noi-that'
      ? '/ảnh web vina/ảnh nội thất/nội thất 10.jpg'
      : '/ảnh web vina/ảnh trang chủ/ảnh trang chủ 5.png';
    const overviewDescription = type === 'noi-that'
      ? 'Nội thất APLUS kiến tạo không gian sống đồng bộ, sang trọng và tiện nghi. Mỗi chi tiết thiết kế đều được tối ưu hóa cho ánh sáng, bố cục và giá trị thẩm mỹ lâu dài.'
      : 'Khóa và phụ kiện APLUS mang đến sự đồng bộ hoàn hảo với hệ cửa, đảm bảo an toàn, vận hành mượt mà và tính thẩm mỹ cao cho mọi công trình.';
    const overviewFeatures = type === 'noi-that'
      ? [
        'Thiết kế nội thất đồng bộ cho phòng khách, phòng ngủ và bếp',
        'Chất liệu cao cấp, hoàn thiện tinh xảo',
        'Tối ưu hóa công năng và trải nghiệm sử dụng',
        'Phong cách hiện đại, sang trọng, phù hợp nhiều mãu công trình'
      ]
      : [
        'Sản phẩm khóa & phụ kiện đồng bộ hệ cửa',
        'Công nghệ an toàn vượt trội cho cửa chính và cửa phụ',
        'Hoàn thiện bền bỉ, vận hành êm ái',
        'Thiết kế sang trọng, phù hợp phong cách APLUS'
      ];
    const overviewCards = type === 'noi-that'
      ? [
        { title: 'Phòng khách sang trọng', img: '/ảnh web vina/ảnh nội thất/nội thất 2.jpg' },
        { title: 'Phòng ngủ tinh tế', img: '/ảnh web vina/ảnh nội thất/nội thất 3.png' },
        { title: 'Bếp hiện đại', img: '/ảnh web vina/ảnh nội thất/nội thất 4.png' }
      ]
      : [
        { title: 'Khóa tay nắm cao cấp', img: '/ảnh web vina/ảnh trang chủ/ảnh trang chủ 6.png' },
        { title: 'Bản lề & chốt an toàn', img: '/ảnh web vina/ảnh trang chủ/ảnh trang chủ 5.png' },
        { title: 'Phụ kiện đồng bộ', img: '/ảnh web vina/ảnh trang chủ/ảnh trang chủ 4.png' }
      ];

    return (
      <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-between">
        <Header />

        <main className="flex-grow">
          <section
            className="relative h-[280px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url('${bannerImg}')` }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            <h1 className="relative z-10 text-4xl md:text-5xl font-black tracking-widest uppercase text-white border-b-4 border-white/20 pb-2">{pageTitle}</h1>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img src={sectionImg} alt={pageTitle} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6">
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">VỀ APLUS</span>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-wide">{pageTitle} cho giải pháp toàn diện</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">{overviewDescription}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {overviewFeatures.map((feature, idx) => (
                    <div key={idx} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                      <h3 className="font-black text-lg text-red-600">{feature.split(' ')[0]}</h3>
                      <p className="text-sm text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-red-600 text-white py-16">
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">1200+</div>
                <div className="text-xs md:text-sm font-bold text-white/90">DỰ ÁN & CÔNG TRÌNH</div>
                <div className="text-xs mt-1 text-white/70">Đã thi công bàn giao quốc tế</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">5000+</div>
                <div className="text-xs md:text-sm font-bold text-white/90">KHÁCH HÀNG & ĐỐI TÁC</div>
                <div className="text-xs mt-1 text-white/70">Độc hộ cùng APLUS DOOR</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">15000+</div>
                <div className="text-xs md:text-sm font-bold text-white/90">BỘ SẢN PHẨM ĐÃ LẮP ĐẶT</div>
                <div className="text-xs mt-1 text-white/70">Đảm bảo chất lượng tuyệt vời</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black mb-2">99%</div>
                <div className="text-xs md:text-sm font-bold text-white/90">SỰ HÀI LÒNG</div>
                <div className="text-xs mt-1 text-white/70">Cam kết bảo hành dài hạn</div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-red-600 mb-4">SẢN PHẨM TIÊU BIỂU</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {overviewCards.map((card, idx) => (
                  <div key={idx} className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 text-center space-y-3">
                      <h3 className="text-lg md:text-xl font-black text-red-600 tracking-wide">{card.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">Giải pháp đồng bộ APLUS cho từng chi tiết.</p>
                      <a href="/he-cua" className="inline-block bg-red-600 text-white text-sm font-bold px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">XEM THÊM →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-red-600 mb-4">DỰ ÁN TIÊU BIỂU</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img src="/ảnh web vina/ảnh trang chủ/dự án 1.jpg" alt="Dự án 1" className="w-full h-64 object-cover" />
                  <div className="p-5 bg-black text-white text-center font-bold uppercase">KHÁCH SẠN 5 SAO MIKAZUKI</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img src="/ảnh web vina/ảnh trang chủ/dự án 2.jpg" alt="Dự án 2" className="w-full h-64 object-cover" />
                  <div className="p-5 bg-black text-white text-center font-bold uppercase">BRG COASTAL CITY ĐỒ SƠN</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img src="/ảnh web vina/ảnh trang chủ/dự án 3.jpg" alt="Dự án 3" className="w-full h-64 object-cover" />
                  <div className="p-5 bg-black text-white text-center font-bold uppercase">CHUNG CƯ BAN CƠ YẾU</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#111113] text-white">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-center justify-items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-black text-red-600 mb-4">CAM KẾT PHÁT TRIỂN BỀN VỮNG</h2>
                <p className="text-base md:text-lg leading-relaxed text-white/80 mb-8">APLUS luôn lựa chọn nguyên liệu thân thiện môi trường, kiểm soát chất thải và tối ưu năng lượng trong từng giai đoạn sản xuất. Chúng tôi phát triển sản phẩm bền vững với giá trị lâu dài cho khách hàng và cộng đồng.</p>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h3 className="font-black text-lg text-white">01. Sử dụng nguyên liệu thân thiện môi trường</h3>
                    <p className="text-sm text-white/70">Hướng đến giảm thiểu tác động và nâng cao hiệu quả sử dụng tài nguyên.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h3 className="font-black text-lg text-white">02. Kiểm soát chất thải</h3>
                    <p className="text-sm text-white/70">Quy trình sản xuất đảm bảo kiểm soát chặt chẽ chất thải và xử lý đúng tiêu chuẩn.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h3 className="font-black text-lg text-white">03. Giảm nhu cầu năng lượng</h3>
                    <p className="text-sm text-white/70">Tối ưu hóa mọi bước vận hành để tiết kiệm điện và giảm phát thải.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h3 className="font-black text-lg text-white">03. Giảm nhu cầu năng lượng</h3>
                    <p className="text-sm text-white/70">Tối ưu hóa mọi bước vận hành để tiết kiệm điện và giảm phát thải.</p>
                  </div>
                </div>
              </div>

              {/* Thêm mx-auto và w-full max-w-lg để ảnh không bị tràn hoặc dạt góc trên màn hình lớn */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 mx-auto w-full max-w-xl">
                <img src="/ảnh web vina/ảnh hệ cửa/hệ cửa 11.jpg" alt="Bền vững" className="w-full h-auto object-cover" />
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-black text-red-600 mb-4">CHỨNG CHỈ CHẤT LƯỢNG</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[...Array(5)].map((_, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 h-48 flex items-center justify-center text-center p-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Chứng chỉ</div>
                      <div className="text-sm font-black text-gray-900">Tiêu chuẩn APLUS</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

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
  } else if (type === 'noi-that') {
    currentData = compositeData;
    titlePage = "NỘI THẤT APLUS";
    bannerImg = "/ảnh web vina/ảnh nội thất/nội thất 1.png";
  } else if (type === 'khoa-phu-kien') {
    currentData = compositeData;
    titlePage = "KHÓA PHỤ KIỆN";
    bannerImg = "/ảnh web vina/ảnh hệ cửa/composite/composite.jpg";
  }

  const productsPerPage = 3;
  const totalPages = Math.ceil(currentData.products.length / productsPerPage);
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);
  const productStartIndex = (safeCurrentPage - 1) * productsPerPage;
  const visibleProducts = currentData.products.slice(productStartIndex, productStartIndex + productsPerPage);
  const hasPagination = totalPages > 1;

  const goToProductPage = (pageNumber) => {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages));
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow">
        {/* Banner đầu trang */}
        <section
          className="relative h-[280px] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url('${bannerImg}')` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          <h1 className="relative z-10 text-4xl md:text-5xl font-black tracking-widest uppercase text-white border-b-4 border-white/20 pb-2">{titlePage}</h1>
        </section>

        {/* Khối thanh bộ lọc Tag con */}
        <section className="py-10 bg-gray-50 text-center">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
            {currentData.categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-6 py-3 text-xs font-black rounded-xl border transition-all ${idx === 0 ? 'border-red-600 text-red-600 bg-white shadow-md' : 'border-gray-200 text-gray-600 hover:border-red-600 hover:text-red-600 bg-white hover:shadow-md'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Khối Grid danh sách sản phẩm */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProducts.map((product, productIndex) => (
                <Link key={`${product.title}-${product.code || productIndex}`} to={`/san-pham/${slugify(product.slug || product.code || product.title)}`} className="group cursor-pointer space-y-3 block">
                  {/* Khung ảnh bo góc sâu chuẩn thiết kế */}
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  {/* Tên mã và mô tả màu sắc */}
                  <div className="px-1">
                    {product.code && <span className="block font-black text-gray-900 text-sm tracking-wide">{product.code}</span>}
                    <span className="block text-xs font-bold text-gray-500 mt-0.5">{product.title}</span>
                  </div>
                </Link>
              ))}
            </div>

            {hasPagination && (
              <div className="flex justify-center items-center gap-2 mt-12 text-xs font-black">
                {safeCurrentPage > 1 && (
                  <button
                    type="button"
                    onClick={() => goToProductPage(safeCurrentPage - 1)}
                    className="w-7 h-7 border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors"
                  >
                    ‹
                  </button>
                )}
                {Array.from({ length: totalPages }, (_, pageIndex) => {
                  const pageNumber = pageIndex + 1;
                  const isActivePage = pageNumber === safeCurrentPage;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => goToProductPage(pageNumber)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isActivePage
                          ? 'bg-red-600 text-white'
                          : 'border border-gray-200 text-gray-600 hover:border-red-600 hover:text-red-600'
                        }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
                {safeCurrentPage < totalPages && (
                  <button
                    type="button"
                    onClick={() => goToProductPage(safeCurrentPage + 1)}
                    className="w-7 h-7 border border-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors"
                  >
                    ›
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
