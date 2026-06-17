// frontend/src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../data/mockData';

export default function Header() {
  const [dropdown, setDropdown] = useState(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-[999] w-full">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        {/* LOGO VỀ TRANG CHỦ */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer select-none">
          <img src="/ảnh web vina/logo header.png" alt="Logo APlus" className="h-12 w-auto object-contain" />
        </Link>
        
        {/* MENU CHÍNH */}
        <nav className="hidden lg:flex space-x-6 text-xs font-bold h-full items-center">
          {navigation.menu.map((item, idx) => (
            <div 
              key={idx} 
              className="relative py-2 h-full flex items-center" 
              onMouseEnter={() => item.submenu && setDropdown(idx)} 
              onMouseLeave={() => setDropdown(null)}
            >
              {item.link && item.link !== '#' ? (
                <Link 
                  to={item.link}
                  className="hover:text-red-600 uppercase flex items-center gap-1 cursor-pointer tracking-wider"
                >
                  {item.name} {item.submenu && "▾"}
                </Link>
              ) : (
                <span className="hover:text-red-600 uppercase flex items-center gap-1 cursor-pointer tracking-wider">
                  {item.name} {item.submenu && "▾"}
                </span>
              )}
              
              {/* SUBMENU THẢ XUỐNG */}
              {item.submenu && dropdown === idx && (
                <div className="absolute top-[80%] left-0 bg-white border border-gray-100 shadow-xl py-2 w-56 rounded-b-xl overflow-hidden animate-fadeIn">
                  {item.submenu.map((sub, sIdx) => {
                    const isObject = typeof sub === 'object';
                    const linkTarget = isObject ? sub.link : '#';
                    const displayName = isObject ? sub.name : sub;

                    return isObject && linkTarget !== '#' ? (
                      <Link 
                        key={sIdx} 
                        to={linkTarget} 
                        className="block px-5 py-3 hover:bg-red-50/40 hover:text-red-600 text-gray-700 font-bold text-[11px] border-b border-gray-50/50 last:border-0 transition-colors"
                      >
                        {displayName}
                      </Link>
                    ) : (
                      <div 
                        key={sIdx} 
                        className="block px-5 py-3 text-gray-700 font-bold text-[11px] border-b border-gray-50/50 last:border-0"
                      >
                        {displayName}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* NGÔN NGỮ */}
        <div className="text-xs font-bold border px-2.5 py-1 rounded-md cursor-pointer hover:bg-gray-50">
          VN ▾
        </div>
      </div>
    </header>
  );
}