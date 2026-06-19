import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LienHe() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main>
        <section
          className="relative h-[300px] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/ảnh web vina/ảnh nội thất/nội thất 1.png')" }}
        >
          <div className="absolute inset-0 bg-slate-900/65"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-black">Liên Hệ</h1>
            <div className="mx-auto mt-5 h-0.5 w-10 bg-white/50"></div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 rounded-2xl border border-gray-200 bg-slate-100 p-6 md:p-9">
              <div className="space-y-7">
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-red-600">♡</span>
                  <h2 className="text-2xl md:text-3xl font-black text-red-600 uppercase">Bạn cần tư vấn</h2>
                </div>
                <p className="text-base md:text-lg">Quý khách vui lòng điền thông tin tư vấn vào Form bên phải.</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-slate-200 px-5 py-6">
                    <div>
                      <h3 className="text-2xl font-black mb-3">Hotline</h3>
                      <a href="tel:0945389389" className="text-base hover:text-red-600">0945389389</a>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-orange-500 text-2xl text-white">☎</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-slate-200 px-5 py-6">
                    <div>
                      <h3 className="text-2xl font-black mb-3">Email</h3>
                      <a href="mailto:hotro@aplus.vn" className="text-base hover:text-red-600">hotro@aplus.vn</a>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-orange-500 text-2xl text-white">✉</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-slate-200 px-5 py-6">
                    <div>
                      <h3 className="text-2xl font-black mb-3">Địa chỉ</h3>
                      <p className="text-base">Lạc Đạo, Hưng Yên, Việt Nam</p>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-orange-500 text-2xl text-white">▥</span>
                  </div>
                </div>

                <div className="inline-block rounded-2xl bg-white px-8 py-7 shadow-sm">
                  <p className="mb-4 font-black uppercase text-red-600">Social Connect</p>
                  <div className="flex gap-2">
                    {[
                      { label: 'FB', href: '/lien-he' },
                      { label: 'Zalo', href: 'https://oa.zalo.me/15517525990566968' },
                      { label: 'TT', href: '/lien-he' },
                      { label: 'YT', href: '/lien-he' }
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex h-9 min-w-9 items-center justify-center rounded-full bg-slate-800 px-2 text-xs font-black text-white transition-colors hover:bg-red-600"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-lg shadow-black/15">
                <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
                  <label className="block">
                    <span className="mb-2 block font-black">Họ Tên</span>
                    <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-black">Email</span>
                    <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-black">Tiêu Đề</span>
                    <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-black">Nội Dung (*)</span>
                    <textarea rows="5" className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600" />
                  </label>
                  <button type="submit" className="rounded-lg bg-red-600 px-8 py-3 font-black uppercase text-white transition-colors hover:bg-red-700">
                    Gửi ngay
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[430px] w-full">
          <iframe
            title="Bản đồ APLUS"
            src="https://www.google.com/maps?q=C%C3%B4ng%20ty%20TNHH%20Th%E1%BB%8Bnh%20Ph%C3%BAc%20H%C6%B0ng%20L%E1%BA%A1c%20%C4%90%E1%BA%A1o%20H%C6%B0ng%20Y%C3%AAn%20Vi%E1%BB%87t%20Nam&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </section>
      </main>

      <Footer />
    </div>
  );
}
