# Product Requirements Document (PRD)

## 1. Informasi Dokumen

- Nama produk: Website PT Montana Nur Bestari
- Jenis produk: Website company profile + katalog produk + kanal kontak
- Versi PRD: 1.0
- Tanggal: 22 Maret 2026
- Status: Draft siap eksekusi

## 2. Ringkasan Produk

Website ini berfungsi sebagai kanal digital utama untuk menampilkan profil perusahaan, katalog produk daun/sayuran, dan mendorong prospek melakukan kontak pemesanan melalui WhatsApp.

Saat ini produk sudah memiliki halaman landing, halaman daftar produk, halaman kontak, navbar responsif, footer informasi perusahaan, dan popup detail produk yang menghasilkan pesan order siap kirim (Indonesia/English/custom) ke WhatsApp.

## 3. Latar Belakang & Masalah

- Informasi produk dan kontak supplier belum tersentralisasi pada satu kanal web yang mudah dibagikan.
- Prospek membutuhkan cara cepat untuk memahami jenis produk dan langsung menghubungi penjual.
- Proses inquiry harus sesingkat mungkin agar conversion dari pengunjung ke chat WhatsApp tinggi.

## 4. Tujuan Produk

### 4.1 Tujuan Bisnis

- Meningkatkan jumlah lead inbound dari website melalui WhatsApp.
- Memperkuat kredibilitas brand PT Montana Nur Bestari secara online.
- Menyediakan katalog produk yang mudah dikelola untuk kebutuhan pemasaran.

### 4.2 Tujuan Pengguna

- Pengguna dapat memahami profil perusahaan dalam < 1 menit.
- Pengguna dapat melihat daftar produk dan memulai inquiry hanya dalam beberapa klik.
- Pengguna mendapatkan opsi bahasa pesan yang sesuai (Indonesia/English/custom).

## 5. Persona Utama

- Pemilik usaha kuliner: membutuhkan supplier daun/produk segar untuk operasional rutin.
- Procurement restoran/catering: membutuhkan supplier stabil dengan komunikasi cepat.
- Distributor/pengepul: mencari partner suplai untuk volume tertentu.

## 6. Ruang Lingkup

### 6.1 In Scope (versi saat ini)

- Landing page dengan hero/banner, deskripsi perusahaan, dan featured product.
- Halaman products dengan grid daftar produk.
- Dialog detail produk dan CTA Order Now.
- Pembuatan pesan WhatsApp otomatis berdasarkan bahasa.
- Halaman contact dengan daftar kontak dan embedded Google Maps.
- Navigasi responsif (desktop + mobile drawer).
- Halaman 404.

### 6.2 Out of Scope (versi saat ini)

- Checkout/transaksi langsung di website.
- Login pengguna/admin.
- CMS dashboard untuk mengelola produk.
- Integrasi payment gateway.
- Multi-bahasa penuh di seluruh halaman (saat ini hanya template pesan order).

## 7. User Journey Inti

1. Pengguna membuka halaman Home.
2. Pengguna klik Explore Products.
3. Pengguna melihat daftar produk dan klik Order Now di kartu produk.
4. Dialog detail terbuka, pengguna pilih bahasa pesan (Indonesia/English/custom).
5. Pengguna klik Order Now.
6. Pengguna diarahkan ke WhatsApp dengan pesan pre-filled.
7. Tim sales menindaklanjuti inquiry.

## 8. Kebutuhan Fungsional

### FR-01: Navigasi Utama

- Sistem menyediakan menu Home, Products, Contact Us.
- Menu aktif ditandai secara visual di desktop.
- Mobile wajib memiliki menu drawer.

Acceptance criteria:

- Pengguna bisa berpindah antar 3 halaman utama tanpa error.
- Navigasi bekerja baik pada viewport mobile dan desktop.

### FR-02: Landing Page

- Menampilkan hero value proposition dan CTA ke Products/Contact.
- Menampilkan section About company.
- Menampilkan 1 featured product dari data produk.

Acceptance criteria:

- CTA hero menuju halaman sesuai target.
- Jika data produk kosong, tampil state kosong pada featured product.

### FR-03: Halaman Produk

- Menampilkan seluruh produk dalam bentuk grid card.
- Setiap card menampilkan gambar dan nama produk.
- Tombol Order Now pada card membuka dialog detail.

Acceptance criteria:

- Seluruh item pada sumber data produk tampil.
- Jika data kosong, tampil empty state yang jelas.

### FR-04: Dialog Detail Produk dan Template Pesan

- Dialog menampilkan nama produk terpilih.
- Pengguna dapat memilih bahasa Indonesia, English, atau custom.
- Sistem membentuk pesan otomatis untuk WhatsApp berdasarkan bahasa.
- Untuk custom, pengguna dapat menulis pesan sendiri.

Acceptance criteria:

- Tombol Order Now nonaktif sebelum bahasa dipilih.
- Klik Order Now membuka WhatsApp pada tab baru dengan isi pesan sesuai pilihan.
- Pesan Indonesia/English menyertakan nama produk.

### FR-05: Halaman Kontak

- Menampilkan alamat, nomor WhatsApp, email, dan peta lokasi.
- Nomor WhatsApp dan email dapat diklik.

Acceptance criteria:

- Link WhatsApp membuka chat.
- Link email membuka mail client.
- Embedded map tampil pada mobile dan desktop.

### FR-06: Footer Informasi

- Menampilkan ringkasan perusahaan, list produk, dan kontak.
- Menampilkan copyright dinamis sesuai tahun berjalan.

Acceptance criteria:

- Footer tampil pada semua halaman.
- Tahun otomatis mengikuti tahun saat ini.

### FR-07: Halaman Error 404

- Menampilkan ilustrasi, pesan not found, dan tombol kembali ke Home.

Acceptance criteria:

- Akses route tidak valid mengarahkan ke halaman 404 kustom.

## 9. Kebutuhan Non-Fungsional

### NFR-01: Responsiveness

- UI harus usable minimal pada lebar layar 360px hingga desktop besar.

### NFR-02: Performance

- LCP halaman utama target < 3 detik pada koneksi 4G normal.
- Gambar menggunakan mekanisme optimisasi bawaan framework.

### NFR-03: Reliability

- Link penting (Products, Contact, WhatsApp, Email) tidak broken.
- Fallback empty state tersedia jika data produk kosong.

### NFR-04: Accessibility

- Semua gambar memiliki alt text.
- Komponen interaktif dapat diakses dengan keyboard.
- Kontras teks utama terhadap latar memadai.

### NFR-05: SEO Dasar

- Tiap halaman memiliki title yang relevan.
- Favicon dan metadata viewport terpasang.

## 10. Data & Konten

- Sumber data produk saat ini: file JSON statis.
- Field minimal produk:
  - product_id
  - name_product
  - image_product
  - description (opsional, dipakai pada featured product)

Catatan kualitas data:

- Perlu konsistensi nama field description agar sesuai type definition.

## 11. KPI & Pengukuran Keberhasilan

### KPI utama

- Jumlah klik CTA Order Now per minggu.
- Jumlah sesi yang mencapai halaman Products.
- CTR dari Products page ke WhatsApp.

### KPI pendukung

- Bounce rate halaman Home.
- Rata-rata durasi sesi.
- Persentase pengunjung mobile vs desktop.

## 12. Instrumentasi Analitik (Rencana)

- Event yang disarankan:
  - view_home
  - click_explore_products
  - view_products
  - click_order_now_card
  - select_chat_language
  - click_order_now_whatsapp
  - click_contact_whatsapp
  - click_contact_email

## 13. Risiko & Mitigasi

- Risiko: Data produk cepat usang jika update manual.
  - Mitigasi: Siapkan integrasi CMS/headless backend di fase berikutnya.
- Risiko: Ketergantungan pada WhatsApp sebagai satu-satunya kanal conversion.
  - Mitigasi: Tambah form inquiry email pada fase berikutnya.
- Risiko: Kualitas gambar tidak seragam memengaruhi kredibilitas.
  - Mitigasi: Tetapkan standar resolusi dan rasio gambar produk.

## 14. Roadmap Rilis (Usulan)

### Fase 1 (Current)

- Company profile + katalog + CTA WhatsApp.

### Fase 2 (Next)

- Integrasi analytics (GA4/Plausible).
- SEO enhancement (meta description per halaman, OG tags, sitemap).
- Peningkatan copywriting bilingual penuh.

### Fase 3 (Growth)

- CMS untuk manajemen produk.
- Form inquiry B2B + auto-reply email.
- Integrasi CRM untuk tracking lead pipeline.

## 15. Definisi Selesai (Definition of Done)

- Semua FR pada dokumen ini lolos uji fungsional manual.
- Tidak ada link rusak pada halaman utama.
- Tidak ada error kritis pada console browser saat alur utama dijalankan.
- Tampilan dan alur utama tervalidasi pada mobile dan desktop.
- Dokumen deployment dan cara update konten tersedia.
