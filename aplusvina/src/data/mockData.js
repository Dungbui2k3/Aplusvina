// frontend/src/data/mockData.js

export const navigation = {
  menu: [
    { name: "TRANG CHỦ", link: "/" },
    { name: "GIỚI THIỆU", link: "/gioi-thieu" },
    { 
      name: "HỆ CỬA APLUS", 
      link: "/he-cua",
      submenu: [
        { name: "Cửa Composite", link: "/he-cua/composite" },
        { name: "Cửa gỗ chống cháy", link: "/he-cua/chong-chay" },
        { name: "Cửa Nhôm Kính", link: "/he-cua/nhom-kinh" }
      ] 
    },
    {
      name: "NỘI THẤT APLUS",
      link: "/noi-that-aplus",
      submenu: [
        { name: "Bộ sưu tập", link: "/noi-that-aplus" },
        { name: "Phòng khách", link: "/noi-that-aplus" },
        { name: "Tủ bếp cao cấp", link: "/noi-that-aplus" },
        { name: "Phòng ngủ", link: "/noi-that-aplus" },
        { name: "Văn phòng", link: "/noi-that-aplus" },
        { name: "Trường học", link: "/noi-that-aplus" }
      ]
    },
    {
      name: "KHÓA PHỤ KIỆN",
      link: "/khoa-phu-kien",
      submenu: [
        { name: "Khóa cửa", link: "/khoa-phu-kien" },
        { name: "Phụ kiện", link: "/khoa-phu-kien" }
      ]
    },
    {
      name: "SẢN PHẨM KHÁC",
      link: "#",
      submenu: [
        { name: "Bàn Bida", link: "#" },
        { name: "Thiết bị âm thanh", link: "#" }
      ]
    },
    { 
      name: "TIN TỨC", 
      link: "/tin-tuc",
      submenu: ["Tin Aplus Group", "Công Ty Thành Viên", "Thông Tin Báo Chí", "Thông Tin Hợp Tác", "Aplus Door"] 
    },
    { name: "LIÊN HỆ", link: "/lien-he" }
  ]
};

// 1. Slider Banner chính
export const homeSliders = [
  { img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 1.png", title: "KHÔNG GIAN SỐNG ĐẲNG CẤP", sub: "KIẾN TẠO KIỆT TÁC KHÔNG GIAN CÙNG APLUS" },
  { img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 2.png", title: "HỆ CỬA CAO CẤP APLUS", sub: "AN TOÀN - BỀN BỈ - SANG TRỌNG THEO THỜI GIAN" },
  { img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 3.png", title: "NỘI THẤT TINH TẾ & KHÁC BIỆT", sub: "ĐỊNH HÌNH PHONG CÁCH SỐNG THƯỢNG LƯU" }
];

// 2. Khối giới thiệu Aplus Group
export const homeIntroData = {
  subtitle: "GIỚI THIỆU",
  title: "VỀ APLUS GROUP",
  description: "Aplus Group tự hào là đơn vị tiên phong kiến tạo những giải pháp toàn diện về hệ cửa cao cấp và thiết kế thi công nội thất di sản. Với tôn chỉ chú trọng vào đường nét tinh giản, tỷ lệ cân đối và chất liệu vượt trội, chúng tôi đồng hành cùng khách hàng để hiện thực hóa những không gian sống thượng lưu, mang đậm bản sắc cá nhân và giá trị nghệ thuật bền vững theo thời gian.",
  img: "/ảnh web vina/ảnh giới thiệu/giới thiệu 2.jpg"
};

// 3. Đầy đủ 5 lĩnh vực đầu tư trên trang chủ
export const sectors = [
  { id: "01", name: "HỆ CỬA APLUS", img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 4.png", link: "/he-cua" },
  { id: "02", name: "THIẾT KẾ NỘI THẤT", img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 5.png", link: "/noi-that-aplus" },
  { id: "03", name: "KHÓA & PHỤ KIỆN", img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 6.png", link: "/khoa-phu-kien" },
  { id: "04", name: "LOA & ÂM THANH", img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 7.png", link: "#" },
  { id: "05", name: "BIDA", img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 3.png", link: "#" }
];

// 4. Dự án tiêu biểu
export const projects = [
  { title: "KHÁCH SẠN 5 SAO MIKAZUKI – ĐÀ NẴNG", img: "/ảnh web vina/ảnh trang chủ/dự án 1.jpg" },
  { title: "BRG COASTAL CITY ĐỒ SƠN", img: "/ảnh web vina/ảnh trang chủ/dự án 2.jpg" },
  { title: "CHUNG CƯ BAN CƠ YẾU CHÍNH PHỦ", img: "/ảnh web vina/ảnh trang chủ/dự án 3.jpg" },
  { title: "CHUNG CƯ GAMUDA GARDEN", img: "/ảnh web vina/ảnh trang chủ/dự án 4.jpg" },
  { title: "CHUNG CƯ HANDICO - NGUYỄN CHÁNH", img: "/ảnh web vina/ảnh trang chủ/dự án 5.jpg" }
];

// 5. Tin tức sự kiện
export const news = [
  { date: "12", month: "Th4", title: "Khu nghỉ dưỡng crimson bay", desc: "Best windows & doors installation service in the USA. Suspendisse aliquam mi et mi sagittis, [...]", img: "/ảnh web vina/ảnh trang chủ/tin tức 4.png" },
  { date: "11", month: "Th4", title: "Aplus Group mở rộng hoạt động sang thị trường quốc tế", desc: "This guide offers smart, practical tips to help first-time travelers explore with confidence, stay safe, [...]", img: "/ảnh web vina/ảnh trang chủ/tin tức 2.png" },
  { date: "19", month: "Th11", title: "Aplus Group hợp tác với đối tác chiến lược Nhật Bản", desc: "This guide offers smart, practical tips to help first-time travelers explore with confidence, stay safe, [...]", img: "/ảnh web vina/ảnh trang chủ/tin tức 1.png" },
  { date: "13", month: "Th10", title: "Hội nghị xúc tiến đầu tư Aplus Group năm 2024 thành công tốt đẹp", desc: "This guide offers smart, practical tips to help first-time travelers explore with confidence, stay safe, [...]", img: "/ảnh web vina/ảnh trang chủ/tin tức 3.png" }
];

export const newsCategories = [
  "Công Ty Thành Viên",
  "Thông Tin Hợp Tác",
  "Tin Aplus Group",
  "Thông Tin Báo Chí",
  "Aplus Door"
];

export const newsKeywords = ["brooklyn", "fashion", "style", "women"];

// 6. Đánh giá từ khách hàng
export const testimonials = [
  { 
    name: "Nguyễn Hải Đăng", 
    address: "Hưng Yên", 
    comment: "Rất hài lòng về Aplus, tư vấn thiết kế thi công hoàn thiện tuyệt vời ngoài mong đợi. Đội ngũ chuyên nghiệp và tận tâm.", 
    img: "/ảnh web vina/ảnh trang chủ/khách hàng 1.jpg",
    projectImg: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 3.png"
  },
  { 
    name: "Nguyễn Gia Thắng", 
    address: "Hà Nam", 
    comment: "Thực sự không còn từ gì để mô tả. Quá tuyệt vời về APLUS", 
    img: "/ảnh web vina/ảnh trang chủ/khách hàng 2.jpg",
    projectImg: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 4.png"
  },
  { 
    name: "Anh Nguyễn", 
    address: "Hưng Yên", 
    comment: "Vợ tôi bảo: Chưa thấy bên nội thất thi công nào lại đẹp sang như Aplus. Căn nhà tiếp theo của chúng tôi sẽ luôn ủng hộ Aplus", 
    img: "/ảnh web vina/ảnh trang chủ/khách hàng 3.jpg",
    projectImg: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 5.png"
  },
  { 
    name: "Nguyễn Văn Thắng", 
    address: "Hồ Chí Minh", 
    comment: "Bếp quá ưng, vừa hiện đại vừa tiện, nấu ăn mỗi ngày cũng thấy có cảm hứng hơn hẳn", 
    img: "/ảnh web vina/ảnh trang chủ/khách hàng 4.jpg",
    projectImg: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 6.png"
  },
  { 
    name: "Phạm Thu Hà", 
    address: "TP.HCM", 
    comment: "Lựa chọn đúng đắn. Sản phẩm và dịch vụ của Aplus thực sự xứng đáng với giá trị mà họ mang lại.", 
    img: "/ảnh web vina/ảnh trang chủ/khách hàng 5.jpg",
    projectImg: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 7.png"
  }
];

export const compositeData = {
  title: "CỬA COMPOSITE",
  subtitle: "ĐẲNG CẤP CHẤT LƯỢNG, TIÊU CHUẨN VƯỢT TRỘI",
  description: "APLUS COMPOSITE không chỉ cung cấp giải pháp cửa, chúng tôi kiến tạo những giá trị bền vững cho không gian sống. Với định hình hướng phát triển theo tiêu chuẩn cao cấp, APLUS COMPOSITE mang đến các bộ cửa chất lượng, kết hợp hoàn hảo giữa đẹp bền vì với độ tin an toàn và thẩm mỹ liệt cung quy trình thi công, lắp đặt chuyên nghiệp, chính xác.",
  features: [
    "Vật liệu cao cấp, độ bền vượt trội theo thời gian",
    "Thiết kế hiện đại, phù hợp với đa dạng không gian",
    "Kết cấu chắc chắn, đảm bảo an toàn và chất lượng",
    "Quy trình thi công, lắp đặt chuyên nghiệp, chính xác",
    "Dịch vụ bảo hành, bảo trì tầm và lâu dài"
  ],
  featuredImg: "/ảnh web vina/ảnh hệ cửa/composite/sồi trắng sứ 1.jpg",
  categories: ["Cửa Trơn", "Cửa Phào", "Cửa Vòm", "Cửa Line Art", "Cửa Ô Kính"],
  products: [
    { code: "PA 07", title: "Nâu than", img: "/ảnh web vina/ảnh hệ cửa/composite/sồi trắng sứ 1.jpg" },
    { code: "PA 03", title: "Trắng xám nhạt", img: "/ảnh web vina/ảnh hệ cửa/composite/sồi trắng sứ 2.jpg" },
    { code: "PA 05", title: "Nâu teak", img: "/ảnh web vina/ảnh hệ cửa/composite/sồi trắng sứ 3.jpg" },
    { code: "PA 01", title: "Trắng sứ", img: "/ảnh web vina/ảnh hệ cửa/composite/sồi trắng sứ 4.jpg" },
    { code: "PA 08", title: "Đen than xám", img: "/ảnh web vina/ảnh hệ cửa/composite/sồi trắng sứ 5.jpg" },
    { code: "PA 06", title: "Nâu óc chọn đậm", img: "/ảnh web vina/ảnh hệ cửa/composite/sồi trắng sứ 6.jpg" }
  ]
};

export const fireproofData = {
  title: "CỬA GỖ CHỐNG CHÁY",
  subtitle: "SỰ KẾT HỢP HOÀN HẢO, PHÙ HỢP CHO CÔNG TRÌNH YÊU CẦU CAO",
  description: "APLUS DOOR không chỉ cung cấp giải pháp cửa, chúng tôi kiến tạo những giá trị bền vững cho không gian sống. Với định hình hướng phát triển theo tiêu chuẩn cao cấp, APLUS DOOR mang đến các bộ cửa chất lượng, kết hợp hoàn hảo giữa đẹp bền và độ tin an toàn. Sự chỉn chu trong từng chi tiết cung quy trình thi công, lắp đặt chuyên nghiệp, chính xác.",
  features: [
    "Vật liệu cao cấp, độ bền vượt trội theo thời gian",
    "Thiết kế hiện đại, phù hợp với đa dạng không gian",
    "Kết cấu chắc chắn, đảm bảo an toàn và chất lượng",
    "Quy trình thi công, lắp đặt chuyên nghiệp, chính xác",
    "Dịch vụ bảo hành, bảo trì tầm và lâu dài"
  ],
  featuredImg: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/chống cháy.jpg",
  categories: ["60 Phút", "90 Phút", "120 Phút"],
  products: [
    { code: "VT 031-1", title: "Sồi vàng sáng", img: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/vt-031 1.jpg" },
    { code: "VT 031-3", title: "Xám bê tông", img: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/vt-031 3.jpg" },
    { code: "VT 031-4", title: "Xám xi măng lạnh", img: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/031-4.png" },
    { code: "VT CHÁY", title: "Cửa gỗ chống cháy tiêu chuẩn", img: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/chống cháy.jpg" },
    { code: "VT CÔNG NGHIỆP", title: "Cửa gỗ công nghiệp cao cấp", img: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/Công nghiệp.jpg" }
  ]
};

export const aluminumData = {
  title: "CỬA NHÔM KÍNH",
  subtitle: "THIẾT KẾ HIỆN ĐẠI, MỞ RỘNG KHÔNG GIAN PHÙ HỢP",
  description: "APLUS NHÔM KÍNH không chỉ cung cấp giải pháp cửa, chúng tôi kiến tạo những giá trị bền vững cho không gian sống. Với định hình hướng phát triển theo tiêu chuẩn cao cấp, APLUS NHÔM KÍNH mang đến các bộ cửa chất lượng, kết hợp hoàn hảo giữa tính ứng dụng thực tế với thẩm mỹ hiện đại. Sự chỉn chu trong từng chi tiết cung quy trình thi công, lắp đặt chuyên nghiệp, chính xác.",
  features: [
    "Vật liệu cao cấp, độ bền vượt trội theo thời gian",
    "Thiết kế hiện đại, phù hợp với đa dạng không gian",
    "Kết cấu chắc chắn, đảm bảo an toàn và chất lượng",
    "Quy trình thi công, lắp đặt chuyên nghiệp, chính xác",
    "Dịch vụ bảo hành, bảo trì tầm và lâu dài"
  ],
  featuredImg: "/ảnh web vina/ảnh hệ cửa/nhôm kính/nhôm kính.jpg",
  categories: ["Cửa Đi", "Cửa Sổ", "Vách Kính"],
  products: [
    { title: "Vách kính mặt tiền", img: "/ảnh web vina/ảnh hệ cửa/nhôm kính/Vach-kinh-mat-tien-1.jpg" },
    { title: "Cửa nhôm kính cao cấp", img: "/ảnh web vina/ảnh hệ cửa/nhôm kính/nhôm kính.jpg" }
  ]
};

export const introPageData = {
  bannerImg: "/ảnh web vina/ảnh giới thiệu/giới thiệu 1.jpg", 
  coreValues: [
    { title: "CHIẾN LƯỢC", desc: "Theo duh thiết kế tinh giản, giàu chiều sâu..." },
    { title: "TẦM NHÌN", desc: "Trở thành thương hiệu nội thất cao cấp..." },
    { title: "SỨ MỆNH", desc: "Kiến tạo những giải pháp nội thất tinh tế..." }
  ],
  featuredProjects: [
    { title: "DỰ ÁN NỘI THẤT CAO CẤP APLUS", img: "/ảnh web vina/ảnh giới thiệu/dự án 1.jpg" },
    { title: "KIẾN TRÚC HIỆN ĐẠI", img: "/ảnh web vina/ảnh giới thiệu/dự án 2.jpg" },
    { title: "KHÁCH SẠN 5 SAO MIKAZUKI", img: "/ảnh web vina/ảnh trang chủ/dự án 1.jpg" },
    { title: "BRG COASTAL CITY ĐỒ SƠN", img: "/ảnh web vina/ảnh trang chủ/dự án 2.jpg" },
    { title: "CHUNG CƯ BAN CƠ YẾU CHÍNH PHỦ", img: "/ảnh web vina/ảnh trang chủ/dự án 3.jpg" }
  ]
};
