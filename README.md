# Aplus Project

## Yêu cầu

Nên dùng Node.js `22.13+` hoặc `20.19+`.

## Cài đặt lần đầu

Chạy tại thư mục gốc của dự án:

```bash
npm install
npm --prefix frontend install
npm --prefix backend install
```

## Chạy dự án

Mở 2 terminal.

Terminal 1 chạy backend:

```bash
node server.js
```

Backend chạy tại:

```text
http://localhost:5000
```

Terminal 2 chạy frontend:

```bash
npm run dev
```

Frontend chạy tại:

```text
http://localhost:5173
```

## Trang admin

```text
http://localhost:5173/admin
```

Tài khoản:

```text
admin
```

Mật khẩu:

```text
12345678
```

## Build frontend

```bash
npm run build
```
