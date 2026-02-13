# Portofolio Marindra Puspitawati — HTML, CSS, Bootstrap, JS

Portofolio personal yang menampilkan profil, proyek, dan keahlian Marindra. Dibangun dengan HTML, CSS, Bootstrap 5, dan JavaScript murni.

## Fitur Utama
- Mode Gelap/Terang dengan penyimpanan preferensi.
- Bagian Hero dengan foto profesional.
- “Proyek Saya” ditampilkan sebagai kartu (grid) yang rapi.
- “Skills” juga dalam bentuk kartu untuk setiap kategori.
- “Things I Love”, “Tools”, “About”, dan “Contact” terstruktur jelas.
- Metadata SEO dasar di `<head>`.

## Teknologi
- HTML, CSS, Bootstrap 5, Bootstrap Icons
- JavaScript murni (tanpa jQuery)
- Tidak menggunakan AOS/Owl Carousel
- Font: Rubik (Google Fonts)

## Cara Menjalankan Secara Lokal
- Pastikan Python terpasang.
- Jalankan dari direktori proyek:
  - `python -m http.server 8000`
- Buka `http://localhost:8000/` di browser.

## Struktur Halaman
- `Hero` — perkenalan singkat dan tautan kontak/portofolio.
- `Proyek Saya` — lima proyek ditampilkan sebagai kartu.
- `Things I Love` — minat utama dalam bentuk kartu.
- `About` — ringkasan profil dengan foto portrait-2.jpeg.
- `Skills` — empat kategori keahlian dalam kartu.
- `Tools` — daftar tools yang digunakan.
- `Contact` — form kontak sederhana.

## Kustomisasi Cepat
- Ubah tautan sosial di bagian Hero pada `index.html`.
- Ganti teks proyek dan keahlian langsung dari `index.html`.
- Gaya kartu seragam melalui kelas `glass-card` di `assets/css/style.css`.
- Kategori kartu memiliki warna berbeda lewat kelas: `card-badge--akuntansi`, `--qc`, `--ti`, `--data`, `--soft`.

## Aset
- Digunakan: `assets/images/marindra.png`, `assets/images/portrait-2.jpeg`, `assets/images/dark-bg.webp`, `assets/images/light-bg.webp`, `assets/images/grid.png`, ikon di `assets/images/tools/` (VSCode, Github, Canva, Figma, ChatGPT, Gemini).
- Font: `assets/fonts/Agustina.woff`, `assets/fonts/DancingScript-Medium.ttf`, serta Bootstrap Icons (`assets/fonts/bootstrap-icons.woff2`).
- Semua path aset menggunakan path relatif (`assets/...`) agar konsisten dengan `index.html` dan `assets/css/style.css`.

## Lisensi
Kode ini digunakan untuk keperluan portofolio pribadi Marindra Puspitawati.
