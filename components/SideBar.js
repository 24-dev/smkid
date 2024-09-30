import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

export default function SideBar() {
  return (
    <div className="w-2/6 border-r border-[#6B778D]/[0.8]">
      <div className="w-2/6 fixed p-8 flex flex-col gap-8 min-h-screen">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">SMKID</h1>
          <p className="text-justify">
            Platform ini hadir untuk membantu kamu menemukan SMK di seluruh
            Indonesia! Di sini, kamu bisa melihat daftar SMK lengkap dengan
            alamatnya. Cukup klik nama sekolah untuk langsung menuju situs
            resminya dan mulai eksplorasi jurusan yang cocok buatmu!
          </p>
        </div>

        <div className="flex gap-6">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Github
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsDiscord />
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}
