// frontend/src/data/mockData.js

export const navigation = {
  menu: [
    { name: "TRANG CHỦ", link: "#" },
    { name: "GIỚI THIỆU", link: "#/gioi-thieu" },
    { 
      name: "HỆ CỬA APLUS", 
      submenu: [
        { name: "Cửa Composite", link: "#/he-cua/composite" },
        { name: "Cửa gỗ chống cháy", link: "#/he-cua/chong-chay" },
        { name: "Cửa Nhôm Kính", link: "#/he-cua/nhom-kinh" }
      ] 
    },
    { name: "NỘI THẤT APLUS", link: "#" },
    { name: "KHÓA PHỤ KIỆN", link: "#" },
    { 
      name: "TIN TỨC", 
      submenu: ["Tin Aplus Group", "Công Ty Thành Viên", "Thông Tin Báo Chí", "Thông Tin Hợp Tác", "Aplus Door"] 
    },
    { name: "LIÊN HỆ", link: "#" }
  ]
};

// 1. Slider Banner chính ở Trang Chủ
export const homeSliders = [
  { img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 1.png", title: "KHÔNG GIAN SỐNG ĐẲNG CẤP" },
  { img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 2.png", title: "HỆ CỬA CAO CẤP APLUS" },
  { img: "/ảnh web vina/ảnh trang chủ/ảnh trang chủ 3.png", title: "NỘI THẤT TINH TẾ & KHÁC BIỆT" }
];

// 2. Dự án tiêu biểu hiển thị ở Trang Chủ
export const homeProjects = [
  { title: "KHÁCH SẠN 5 SAO MIKAZUKI – ĐÀ NẴNG", img: "/ảnh web vina/ảnh trang chủ/dự án 1.jpg" },
  { title: "BRG COASTAL CITY ĐỒ SƠN", img: "/ảnh web vina/ảnh trang chủ/dự án 2.jpg" },
  { title: "CHUNG CƯ BAN CƠ YẾU CHÍNH PHỦ", img: "/ảnh web vina/ảnh trang chủ/dự án 3.jpg" },
  { title: "CHUNG CƯ GAMUDA GARDEN", img: "/ảnh web vina/ảnh trang chủ/dự án 4.jpg" },
  { title: "CHUNG CƯ HANDICO – NGUYỄN CHÁNH", img: "/ảnh web vina/ảnh trang chủ/dự án 5.jpg" }
];

// 3. Ảnh ý kiến khách hàng (Testimonials) nếu có phần avatar công trình của họ
export const homeTestimonials = [
  { name: "Nguyễn Hải Đăng", address: "Hưng Yên", comment: "Rất hài lòng về Aplus, tư vấn thiết kế lắp đặt hoàn thiện quá tuyệt vời", img: "/ảnh web vina/ảnh trang chủ/khách hàng 1.jpg" },
  { name: "Nguyễn Gia Thắng", address: "Hà Nam", comment: "Thực sự không còn từ gì để mô tả. Quá tuyệt vời với Aplus", img: "/ảnh web vina/ảnh trang chủ/khách hàng 2.jpg" },
  { name: "Anh Nguyễn", address: "Hưng Yên", comment: "Vợ tôi bảo: Chưa thấy bên nội thất thi công nào lại đẹp sang như Aplus.", img: "/ảnh web vina/ảnh trang chủ/khách hàng 3.jpg" }
];

// 4. Đối tác chiến lược công ty
export const homePartners = [
  { name: "Đối tác 1", img: "/ảnh web vina/ảnh trang chủ/đối tác 1.png" },
  { name: "Đối tác 2", img: "/ảnh web vina/ảnh trang chủ/đối tác 2.png" },
  { name: "Đối tác 3", img: "/ảnh web vina/ảnh trang chủ/đối tác 3.png" },
  { name: "Đối tác 4", img: "/ảnh web vina/ảnh trang chủ/đối tác 4.png" }
];

// Dữ liệu ảnh Hệ Cửa Composite local
export const compositeData = {
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

// Dữ liệu ảnh Cửa Gỗ Chống Cháy & Công nghiệp local
export const fireproofData = {
  categories: ["60 Phút", "90 Phút", "120 Phút"],
  products: [
    { code: "VT 031-1", title: "Sồi vàng sáng", img: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/vt-031 1.jpg" },
    { code: "VT 031-3", title: "Xám bê tông", img: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/vt-031 3.jpg" },
    { code: "VT 031-4", title: "Xám xi măng lạnh", img: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/031-4.png" },
    { code: "VT CHÁY", title: "Cửa gỗ chống cháy tiêu chuẩn", img: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/chống cháy.jpg" },
    { code: "VT CÔNG NGHIỆP", title: "Cửa gỗ công nghiệp cao cấp", img: "/ảnh web vina/ảnh hệ cửa/chống cháy + công nghiệp/Công nghiệp.jpg" }
  ]
};

// Dữ liệu ảnh Cửa Nhôm Kính local
export const aluminumData = {
  categories: ["Cửa Đi", "Cửa Sổ", "Vách Kính"],
  products: [
    { title: "Vách kính mặt tiền", img: "/ảnh web vina/ảnh hệ cửa/nhôm kính/Vach-kinh-mat-tien-1.jpg" },
    { title: "Cửa nhôm kính cao cấp", img: "/ảnh web vina/ảnh hệ cửa/nhôm kính/nhôm kính.jpg" }
  ]
};

export const sectors = [
  { id: "01", name: "HỆ CỬA APLUS", img: "/ảnh web vina/ảnh hệ cửa/hệ cửa 1.png" },
  { id: "02", name: "THIẾT KẾ NỘI THẤT", img: "/ảnh web vina/ảnh nội thất/nội thất 1.png" },
  { id: "03", name: "KHÓA & PHỤ KIỆN", img: "/ảnh web vina/ảnh hệ cửa/hệ cửa 5.png" }
];

export const projects = [
  { title: "DỰ ÁN TIÊU BIỂU 1", img: "/ảnh web vina/ảnh trang chủ/dự án 1.jpg" },
  { title: "DỰ ÁN TIÊU BIỂU 2", img: "/ảnh web vina/ảnh trang chủ/dự án 2.jpg" },
  { title: "DỰ ÁN TIÊU BIỂU 3", img: "/ảnh web vina/ảnh trang chủ/dự án 3.jpg" }
];

export const testimonials = [
  { name: "Nguyễn Hải Đăng", address: "Hưng Yên", comment: "Rất hài lòng về Aplus, tư vấn thiết kế lắp đặt hoàn thiện quá tuyệt vời" },
  { name: "Nguyễn Gia Thắng", address: "Hà Nam", comment: "Thực sự không còn từ gì để mô tả. Quá tuyệt vời với Aplus" }
];

export const news = [
  { date: "12", month: "Th4", title: "Khu nghỉ dưỡng crimson bay", desc: "Best windows & doors installation service...", img: "/ảnh web vina/ảnh trang chủ/tin tức 1.png" }
];

export const introPageData = {
  bannerImg: "/ảnh web vina/ảnh giới thiệu/giới thiệu 1.jpg", 
  coreValues: [
    { title: "CHIẾN LƯỢC", desc: "Theo đuổi thiết kế tinh giản, giàu chiều sâu, chú trọng đường nét, tỷ lệ, chất liệu..." },
    { title: "TẦM NHÌN", desc: "Trở thành thương hiệu nội thất cao cấp định hình phong cách sống..." },
    { title: "SỨ MỆNH", desc: "Kiến tạo những giải pháp nội thất tinh tế và khác biệt..." }
  ],
  featuredProjects: [
    { title: "DỰ ÁN NỘI THẤT CAO CẤP APLUS", img: "/ảnh web vina/ảnh giới thiệu/dự án 1.jpg" },
    { title: "KIẾN TRÚC HIỆN ĐẠI", img: "/ảnh web vina/ảnh giới thiệu/dự án 2.jpg" }
  ]
};