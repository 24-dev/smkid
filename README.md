# SMKID - Platform Pencarian SMK di Indonesia 🚀

Platform ini hadir untuk membantu kamu menemukan SMK di seluruh Indonesia! Di sini, kamu bisa melihat daftar SMK lengkap dengan alamatnya. Cukup klik nama sekolah untuk langsung menuju situs resminya dan mulai eksplorasi jurusan yang cocok buatmu!

## Bahasa Pemrograman 💻

Proyek ini dibangun menggunakan **JavaScript** dengan framework **Next.js**.

## Cara Menjalankan Proyek ⌨️

1. Pastikan Anda sudah menginstall [Node.js](https://nodejs.org/) di mesin Anda.
2. Clone repository ini ke komputer Anda:
   ```bash
   git clone https://github.com/24-dev/smkid.git
   ```
3. Pindah ke folder proyek:
   ```
   cd smkid
   ```
4. Install depedencies
   ```
   npm install 
   // atau
   yarn install
   ```
5. Jalankan proyek
   ```
   npm run dev
   // atau
   yarn dev
   ```
6. Buka browser dan akses halaman `http://localhost:3000`

## Cara Berkontribusi 🙌
1. **Fork** repository ini
2. Buat branch baru untuk perubahan kamu:
   ```
   git checkout -b nama-branch-perubahan
   ```
3. Buat file markdown di dalam folder `_contents` dengan format berikut:
   ```md
   ---
   name: 'Nama SMK'
   address: 'Alamat lengkap SMK'
   major: 'Jurusan yang tersedia'
   ---
   ```

   Contoh:
   ```md
   ---
   name: 'SMK Negeri 24 Jakarta'
   address: 'Jl. Bambu Hitam No.3, Jakarta Timur, DKI Jakarta'
   major: 'Rekayasa Perangkat Lunak, Usaha Perjalanan Wisata, Perhotelan, Tata Boga, Tata Busana'
   ---
   ```
4. Commit perubahan kamu:
   ```
   git commit -m "feat: Menambahkan data SMK [Nama SMK]"
   ```
5. Push perubahan ke repository kamu
   ```
   git push origin nama-branch-anda
   ```
6. Buat Pull Request (PR) ke repository utama kami. Tambahkan reviewer atau assignee pada PR Anda.

