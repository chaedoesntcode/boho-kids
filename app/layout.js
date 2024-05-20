import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-lato',
})

export const metadata = {
  title: "Boho Kids",
  description: "Discover unbeatable deals at Boho Kids. Shop now for beds, desks, storage, and more! ",
  icons: {
    icon: '/images/logo/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}
