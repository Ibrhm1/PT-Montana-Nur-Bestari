# **Website Rempah (PT Montana Nur Bestari)**

Deskripsi singkat: situs marketing dan katalog produk rempah, dibuat untuk menampilkan produk, informasi kontak, dan halaman statis sederhana.

## **Ringkasan**

- **Proyek:** Website frontend untuk PT Montana Nur Bestari (situs katalog/landing)
- **Stack:** `Next.js` 16, `React` 19, `Tailwind CSS`, TypeScript
- **Tujuan:** Menyajikan katalog produk, halaman landing, dan informasi kontak dengan antarmuka ringan dan statis.

## **Fitur Utama**

- Halaman kontak dengan informasi perusahaan

## **Persyaratan**

- Node.js (rekomendasi v18+)
- npm (atau `pnpm`/`yarn` sesuai preferensi)

## **Instalasi & Menjalankan Secara Lokal**

Jalankan perintah di terminal (bash) dari root proyek:

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
