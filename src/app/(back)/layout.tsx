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
<<<<<<< HEAD
=======
=======

const k2D = K2D({
   subsets: ['thai'],
   weight: ['100','200', '300', '400', '500', '600', '700', '800'],
   display: 'swap',
});
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)

export const metadata: Metadata = {
  title: "Dashboard",
  description: "ขายสินค้าของนักศึกษา ประจำปี 2568",
};

<<<<<<< HEAD
export default function DashboardLayout({
=======
<<<<<<< HEAD
export default function DashboardLayout({
=======
export default function DasboardLayout({
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
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
