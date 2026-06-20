import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchSiteContent } from '../api/siteApi';

const SiteDataContext = createContext(null);

export function SiteDataProvider({ children }) {
  const [content, setContent] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetchSiteContent()
      .then((data) => {
        if (!isMounted) return;
        setContent(data);
        setStatus('success');
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err);
        setStatus('error');
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo(() => ({ content, status, error }), [content, status, error]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
        <div className="text-center">
          <div className="text-2xl font-black text-red-600 mb-2">APLUS</div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 px-4">
        <div className="max-w-lg text-center">
          <div className="text-2xl font-black text-red-600 mb-3">Không kết nối được backend</div>
          <p className="text-gray-600 mb-4">Hãy chạy backend ở cổng 5000 rồi tải lại trang.</p>
          <pre className="text-xs bg-gray-100 p-4 rounded-xl overflow-auto text-left">{error?.message}</pre>
        </div>
      </div>
    );
  }

  return <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>;
}

export function useSiteData() {
  const context = useContext(SiteDataContext);

  if (!context) {
    throw new Error('useSiteData must be used inside SiteDataProvider');
  }

  return context.content;
}
