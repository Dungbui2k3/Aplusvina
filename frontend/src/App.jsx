// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Import trang chủ mới của bạn tại đây
import GioiThieu from './pages/GioiThieu';
import HeCua from './pages/HeCua';
import TinTuc from './pages/TinTuc';
import ProductDetail from './pages/ProductDetail';
import ProjectDetail from './pages/ProjectDetail';
import NewsDetail from './pages/NewsDetail';
import LienHe from './pages/LienHe';
import AdminDashboard from './pages/AdminDashboard';
import ScrollToTop from './components/ScrollToTop';
import { SiteDataProvider } from './context/SiteDataContext';

export default function App() {
  return (
    <SiteDataProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Đổi view trang chủ cũ sang Component Homepage sạch sẽ */}
        <Route path="/" element={<Homepage />} />
        
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="/he-cua" element={<HeCua />} />
        <Route path="/he-cua/composite" element={<HeCua type="composite" />} />
        <Route path="/he-cua/chong-chay" element={<HeCua type="chong-chay" />} />
        <Route path="/he-cua/nhom-kinh" element={<HeCua type="nhom-kinh" />} />
        <Route path="/noi-that-aplus" element={<HeCua type="noi-that" />} />
        <Route path="/khoa-phu-kien" element={<HeCua type="khoa-phu-kien" />} />
        <Route path="/san-pham/:slug" element={<ProductDetail />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/tin-tuc" element={<TinTuc />} />
        <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
        <Route path="/thong-tin-hop-tac/:slug" element={<NewsDetail />} />
        <Route path="/lien-he" element={<LienHe />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
    </SiteDataProvider>
  );
}
