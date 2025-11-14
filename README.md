# **Website Rempah (PT Montana Nur Bestari)**

Deskripsi singkat: situs marketing dan katalog produk rempah berbasis Next.js, dibuat untuk menampilkan produk, informasi kontak, dan halaman statis sederhana.

**Ringkasan**

- **Proyek:** Website frontend untuk PT Montana Nur Bestari (situs katalog/landing)
- **Stack:** `Next.js` 16, `React` 19, `Tailwind CSS`, TypeScript
- **Tujuan:** Menyajikan katalog produk, halaman landing, dan informasi kontak dengan antarmuka ringan dan statis.

**Fitur Utama**

- Halaman landing dengan banner dan bagian About
- Daftar produk (dari `data/products.json`) dan dialog detail produk
- Halaman kontak dengan informasi perusahaan
- Layout dan komponen UI berbasis Tailwind + komponen dari `src/components` dan `src/ui`

**Struktur Project (ringkasan)**

- `src/pages` : halaman Next.js (`index`, `products`, `contact`, `404`)
- `src/components` : komponen UI dan layout yang dipakai di halaman
- `src/ui` : komponen UI generik (button, card, dialog, dll.)
- `src/data/products.json` : data produk contoh yang ditampilkan pada katalog
- `public/` : aset statis (gambar produk, ilustrasi, dsb.)

**Persyaratan**

- Node.js (rekomendasi v18+)
- npm (atau `pnpm`/`yarn` sesuai preferensi)

**Instalasi & Menjalankan Secara Lokal**
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

**Skrip Penting (dari `package.json`)**

- `npm run dev` : jalankan Next.js dalam mode development
- `npm run build` : buat build produksi
- `npm run start` : jalankan server produksi setelah build
- `npm run lint` : jalankan ESLint

**Konfigurasi & Catatan**

- Tidak ada variabel lingkungan (env) sensitif yang ditemukan di repo ini. Jika Anda menambahkan API atau layanan eksternal, buat file `.env` dan jangan commit.
- Data produk demo ada di `src/data/products.json` dan gambar terkait ada di `public/products`.
- Proyek menggunakan Tailwind CSS (konfigurasi ada di `postcss.config.mjs` dan file terkait).

**Menambahkan/Mengubah Konten**

- Halaman Next.js berada di `src/pages`.
- Komponen UI berada di `src/components` dan `src/ui` — ubah komponen tersebut untuk merefleksikan perubahan tampilan.

**Contributing**

- Fork dan buat branch baru untuk perubahan fitur atau perbaikan bug.
- Buat pull request dengan deskripsi perubahan yang jelas.

**Lisensi**

- Tidak ada lisensi yang ditetapkan pada repo ini. Tambahkan file `LICENSE` jika ingin menetapkan lisensi (mis. MIT).

**Kontak / Informasi Tambahan**

- Untuk pertanyaan atau permintaan fitur, gunakan issue tracker pada repository atau hubungi pemilik proyek.

---

File ini dibuat/diupdate otomatis oleh asisten pengembangan. Perlu bantuan menambahkan badge CI, menyiapkan deploy, atau menulis dokumentasi komponen? Beri tahu saya dan saya bantu.
