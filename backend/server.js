// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dữ liệu fix cứng từ website Aplus Group
const aplusWebsiteData = {
  navigation: {
    logo: "A+ Plus GROUP",
    menu: [
      { name: "TRANG CHỦ", link: "/" },
      { name: "GIỚI THIỆU", link: "/gioi-thieu" },
      { name: "HỆ CỬA APLUS", submenu: ["Cửa Composite", "Cửa gỗ chống cháy", "Cửa Nhôm Kính"] },
      { name: "NỘI THẤT APLUS", link: "/noi-that" },
      { name: "KHÓA PHỤ KIỆN", link: "/khoa-phu-kien" },
      { name: "TIN TỨC", submenu: ["Tin Aplus Group", "Công Ty Thành Viên", "Thông Tin Báo Chí", "Thông Tin Hợp Tác", "Aplus Door"] },
      { name: "LIÊN HỆ", link: "/lien-he" }
    ]
  },
  companyProfile: {
    title: "APLUS GROUP",
    description: "APLUS GROUP là thương hiệu đa lĩnh vực theo đuổi tiêu chuẩn cao cấp, định hình phong cách sống hiện đại và đẳng cấp. Không chỉ cung cấp sản phẩm, APLUS xây dựng hệ sinh thái toàn diện từ cửa, nội thất, khóa đến bàn bida và thiết bị âm thanh, đảm bảo sự đồng bộ về chất lượng và trải nghiệm.",
    hotline: "+84.945.389.389"
  },
  sectors: [
    { id: "01", name: "HỆ CỬA APLUS" },
    { id: "02", name: "THIẾT KẾ NỘI THẤT" },
    { id: "03", name: "KHÓA & PHỤ KIỆN" },
    { id: "04", name: "LOA & ÂM THANH" },
    { id: "05", name: "BIDA" }
  ]
};

app.get('/api/content', (req, res) => {
  res.json(aplusWebsiteData);
});

app.post('/api/consultation', (req, res) => {
  const { name, phone, email } = req.body;
  console.log(`[Lead]: Tên: ${name} | SĐT: ${phone} | Email: ${email}`);
  res.status(200).json({ success: true, message: "Đăng ký thành công!" });
});

app.listen(PORT, () => {
  console.log(`Server BE đang chạy tại: http://localhost:${PORT}`);
});