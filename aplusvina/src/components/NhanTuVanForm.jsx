import React from 'react';

export default function NhanTuVanForm() {
  return (
    <section className="bg-[#090909] text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6 lg:pr-8">
            <span className="inline-flex items-center rounded-full bg-red-600/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.3em] text-red-400 border border-red-600/20">
              MIỄN PHÍ
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-wide">
              NHẬN TƯ VẤN HOÀN TOÀN MIỄN PHÍ
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-gray-300 leading-relaxed">
              Cập nhật thông tin mới nhất về sản phẩm, sự kiện và giải pháp thiết kế riêng cho không gian của bạn. Đăng ký ngay để được chuyên gia Aplus tư vấn trực tiếp.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                'CHỌN NỘI THẤT PHÙ HỢP',
                'CHỌN VẬT LIỆU CAO CẤP',
                'KIẾN THỨC VẬN HÀNH SHOWROOM',
                'PHÁT TRIỂN DOANH THU'
              ].map((label) => (
                <span key={label} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-100 text-center">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-8 shadow-2xl shadow-black/20 text-black">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-600">Giảm giá đặc biệt cho khách</p>
              <h3 className="text-2xl font-black uppercase tracking-wide">
                ĐĂNG KÝ HÔM NAY
              </h3>
            </div>

            <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-3 text-sm font-medium text-gray-900 outline-none transition focus:border-red-600"
                required
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-3 text-sm font-medium text-gray-900 outline-none transition focus:border-red-600"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-3 text-sm font-medium text-gray-900 outline-none transition focus:border-red-600"
                required
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-red-600 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-red-700"
              >
                Tải xuống miễn phí
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
