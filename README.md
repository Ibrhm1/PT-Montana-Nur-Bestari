# **🌐Website Rempah (PT Montana Nur Bestari)**

Situs marketing dan katalog produk rempah, dibuat untuk menampilkan produk, informasi kontak, dan halaman statis sederhana.

## **Ringkasan**

- **Proyek:** Website frontend untuk PT Montana Nur Bestari (situs katalog/landing)
- **Stack:** `Next.js` 16, `React` 19, `Tailwind CSS`, TypeScript
- **Tujuan:** Menyajikan katalog produk, halaman landing, dan informasi kontak dengan antarmuka ringan dan statis.

## **Instalasi & Menjalankan Secara Lokal**

1. Pastikan `Node.js` (versi 18 atau lebih baru) dan `npm` sudah terinstal.
2. Clone repositori ini:

```bash
git clone https://github.com/Ibrhm1/PT-Montana-Nur-Bestari.git
```

3. Masuk ke direktori proyek:

```bash
cd PT-Montana-Nur-Bestari
```

4. Install dependensi dan jalankan server development:

```bash
npm install
npm run dev
```

- Akses aplikasi di `http://localhost:3000` saat `npm run dev` berjalan.
- Untuk build produksi dan menjalankan build:

```bash
npm run build
npm run start
```

## **Skrip Penting (dari `package.json`)**

- `npm run dev` : jalankan Next.js dalam mode development
- `npm run build` : buat build produksi
- `npm run start` : jalankan server produksi setelah build
- `npm run lint` : jalankan ESLint

## **Menambahkan/Mengubah Konten**

- Halaman Next.js berada di `src/pages`.
- Komponen UI berada di `src/components` dan `src/ui` — ubah komponen tersebut untuk merefleksikan perubahan tampilan.

## **Contributing**

- Fork dan buat branch baru untuk perubahan fitur atau perbaikan bug.
- Buat pull request dengan deskripsi perubahan yang jelas.
