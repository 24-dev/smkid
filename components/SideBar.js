import { FaGithub } from 'react-icons/fa';

export default function SideBar() {
  return (
    <div className="w-2/6 border-r border-[#6B778D]/[0.8]">
      <div className="w-2/6 fixed p-8 flex flex-col gap-6 min-h-screen">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">SMKID</h1>
          <p className="text-justify">
            Jelajahi SMK di seluruh Indonesia dengan mudah! Temukan informasi
            lengkap mulai dari alamat, jurusan, hingga kontak sekolah yang kamu
            butuhkan.
          </p>
          <p className="text-justify">
            Kamu juga bisa ikut berperan dalam menambah informasi sekolah SMK.
            Yuk, bantu kami memperkaya data SMK di Indonesia dengan
            berkontribusi langsung{' '}
            <a
              href="https://github.com/24-dev/smkid"
              target="_blank"
              className="underline underline-offset-2"
            >
              di sini
            </a>
            !
          </p>
        </div>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/24-dev/smkid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          Github
        </a>
      </div>
    </div>
  );
}
