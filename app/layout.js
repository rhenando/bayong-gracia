// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Tailwind + keen-slider CSS
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bayong Gracia",
  description: "Handmade Bayong",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />

        <main className='flex-1'>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
