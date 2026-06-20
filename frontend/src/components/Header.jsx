// frontend/src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

export default function Header() {
  const [dropdown, setDropdown] = useState(null);
  const { navigation } = useSiteData();

  const closeDropdown = () => {
    setDropdown(null);
    document.activeElement?.blur();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-[999] w-full">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        {/* LOGO VỀ TRANG CHỦ */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer select-none">
          <img src="/ảnh web vina/logo header.png" alt="Logo APlus" className="h-12 w-auto object-contain" />
        </Link>
        
        {/* MENU CHÍNH */}
        <nav className="hidden lg:flex space-x-6 text-xs font-bold h-full items-center">
          {(navigation?.menu || []).map((item, idx) => (
            <div
              key={idx}
              className="relative h-full flex items-center py-2"
              onMouseEnter={() => item.submenu && setDropdown(idx)}
              onMouseLeave={() => setDropdown(null)}
            >
              {item.link && item.link !== '#' ? (
                <Link 
                  to={item.link}
                  onClick={closeDropdown}
                  className="hover:text-red-600 uppercase flex items-center gap-1 cursor-pointer tracking-wider"
                >
                  {item.name} {item.submenu && "▾"}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setDropdown(dropdown === idx ? null : idx)}
                  className="hover:text-red-600 uppercase flex items-center gap-1 cursor-pointer tracking-wider bg-transparent border-0 p-0 font-bold text-inherit"
                >
                  {item.name} {item.submenu && "▾"}
                </button>
              )}
              
              {/* SUBMENU THẢ XUỐNG */}
              {item.submenu && dropdown === idx && (
                <div className="absolute left-1/2 top-full z-[1000] w-56 -translate-x-1/2 bg-white py-2 shadow-xl ring-1 ring-black/10">
                  {item.submenu.map((sub, sIdx) => {
                    const isObject = typeof sub === 'object';
                    const linkTarget = isObject ? sub.link : '#';
                    const displayName = isObject ? sub.name : sub;

                    return isObject && linkTarget !== '#' ? (
                      <Link 
                        key={sIdx} 
                        to={linkTarget} 
                        onClick={closeDropdown}
                        className="block px-5 py-3 hover:bg-red-50/40 hover:text-red-600 text-gray-700 font-bold text-[11px] border-b border-gray-50/50 last:border-0 transition-colors"
                      >
                        {displayName}
                      </Link>
                    ) : (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={closeDropdown}
                        className="block w-full px-5 py-3 text-left text-gray-700 font-bold text-[11px] border-b border-gray-50/50 last:border-0 hover:bg-red-50/40 hover:text-red-600 transition-colors"
                      >
                        {displayName}
                      </button>
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
