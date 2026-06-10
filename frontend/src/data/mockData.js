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

// Dữ liệu fix cứng theo ảnh Cửa Composite
export const compositeData = {
  categories: ["Cửa Trơn", "Cửa Phào", "Cửa Vòm", "Cửa Line Art", "Cửa Ô Kính"],
  products: [
    { code: "PA 07", title: "Nâu than", img: "https://images.unsplash.com/photo-1534349762230-e0cac37a3e1d?w=500" },
    { code: "PA 03", title: "Trắng xám nhạt", img: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=500" },
    { code: "PA 05", title: "Nâu teak", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500" },
    { code: "PA 01", title: "Trắng sứ", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500" },
    { code: "PA 08", title: "Đen than xám", img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=500" },
    { code: "PA 06", title: "Nâu óc chó đậm", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500" }
  ]
};

// Dữ liệu fix cứng theo ảnh Cửa Gỗ Chống Cháy
export const fireproofData = {
  categories: ["60 Phút", "90 Phút", "120 Phút"],
  products: [
    { code: "VT 608", title: "Sồi vàng sáng", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=500" },
    { code: "VT 459", title: "Xám bê tông", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500" },
    { code: "VT 458", title: "Xám xi măng lạnh", img: "https://images.unsplash.com/photo-1534237172365-5777e3073729?w=500" },
    { code: "VT 455", title: "Nâu gỗ sồi", img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500" },
    { code: "VT 450", title: "Xanh than đậm", img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=500" },
    { code: "VT 449", title: "Xám nâu", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500" }
  ]
};

// Dữ liệu fix cứng theo ảnh Cửa Nhôm Kính
export const aluminumData = {
  categories: ["Cửa Đi", "Cửa Sổ", "Vách Kính"],
  products: [
    { title: "Vách kính mặt tiền", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500" },
    { title: "Cửa sổ xếp trượt", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500" },
    { title: "Cửa sổ vòm", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500" },
    { title: "Cửa đi vòm", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500" },
    { title: "Cửa đi pivot (xoay trục)", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500" },
    { title: "Cửa đi mở quay", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500" }
  ]
};

// Giữ nguyên sectors, projects, testimonials, news cũ bên dưới...
export const sectors = [
  { id: "01", name: "HỆ CỬA APLUS", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500" },
  { id: "02", name: "THIẾT KẾ NỘI THẤT", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500" },
  { id: "03", name: "KHÓA & PHỤ KIỆN", img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=500" },
  { id: "04", name: "LOA & ÂM THANH", img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500" },
  { id: "05", name: "BIDA", img: "https://images.unsplash.com/photo-1544216717-3bbf52512659?w=500" }
];

export const projects = [
  { title: "KHÁCH SẠN 5 SAO MIKAZUKI – ĐÀ NẴNG", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" },
  { title: "BRG COASTAL CITY ĐỒ SƠN", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400" },
  { title: "CHUNG CƯ BAN CƠ YẾU CHÍNH PHỦ", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400" },
  { title: "CHUNG CƯ GAMUDA GARDEN", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400" },
  { title: "CHUNG CƯ HANDICO – NGUYỄN CHÁNH", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" }
];

export const testimonials = [
  { name: "Nguyễn Hải Đăng", address: "Hưng Yên", comment: "Rất hài lòng về Aplus, tư vấn thiết kế lắp đặt hoàn thiện quá tuyệt vời" },
  { name: "Nguyễn Gia Thắng", address: "Hà Nam", comment: "Thực sự không còn từ gì để mô tả. Quá tuyệt vời với Aplus" },
  { name: "Anh Nguyễn", address: "Hưng Yên", comment: "Vợ tôi bảo: Chưa thấy bên nội thất thi công nào lại đẹp sang như Aplus. Căn nhà bếp theo của chúng tôi sẽ luôn ủng hộ Aplus" }
];

export const news = [
  { date: "12", month: "Th4", title: "Khu nghỉ dưỡng crimson bay", desc: "Best windows & doors installation service in the USA...", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500" },
  { date: "11", month: "Th4", title: "Aplus Group mở rộng hoạt động sang thị trường quốc tế", desc: "This guide offers smart, practical tips to help first-time travelers...", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500" }
];

export const introPageData = {
  bannerImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200", 
  coreValues: [
    { title: "CHIẾN LƯỢC", desc: "Theo đuổi thiết kế tinh giản, giàu chiều sâu, chú trọng đường nét, tỷ lệ, chất liệu..." },
    { title: "TẦM NHÌN", desc: "Trở thành thương hiệu nội thất cao cấp định hình phong cách sống..." },
    { title: "SỨ MỆNH", desc: "Kiến tạo những giải pháp nội thất tinh tế và khác biệt..." }
  ],
  featuredProjects: [
    { title: "CHUNG CƯ GAMUDA GARDEN", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500" }
  ]
};