// frontend/src/App.jsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Import trang chủ mới của bạn tại đây
import GioiThieu from './pages/GioiThieu';
import HeCua from './pages/HeCua';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Đổi view trang chủ cũ sang Component Homepage sạch sẽ */}
        <Route path="/" element={<Homepage />} />
        
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="/he-cua/composite" element={<HeCua type="composite" />} />
        <Route path="/he-cua/chong-chay" element={<HeCua type="chong-chay" />} />
        <Route path="/he-cua/nhom-kinh" element={<HeCua type="nhom-kinh" />} />
      </Routes>
    </HashRouter>
  );
}