import { Jost } from 'next/font/google';
import './globals.css';

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: 'normal',
});

export const metadata = {
  title: 'SMKID | Daftar SMK di Indonesia',
  description:
    'SMKID adalah platform informasi daftar SMK di Indonesia, memudahkan pencarian sekolah dan jurusan sesuai minat di seluruh daerah.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable}`}>{children}</body>
    </html>
  );
}
