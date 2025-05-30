import type { Metadata } from "next";
import { K2D } from "next/font/google";
import "../globals.css";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7f91e2c (Created new)
// import Navbar from "./components/navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const k2d = K2D({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap'
  
})

export const metadata: Metadata = {
  title: "Login plz",
<<<<<<< HEAD
=======
=======

const k2D = K2D({
   subsets: ['thai'],
   weight: ['100','200', '300', '400', '500', '600', '700', '800'],
   display: 'swap',
});

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
  description: "ขายสินค้าของนักศึกษา ประจำปี 2568",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
<<<<<<< HEAD
        className={`${k2d.className} antialiased`}
      >
=======
<<<<<<< HEAD
        className={`${k2d.className} antialiased`}
      >
=======
        className={`${k2D.className}`}
      >

>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
        {children}
      </body>
    </html>
  );
}
