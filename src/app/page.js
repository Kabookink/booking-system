// src/app/page.js
import AboutUs from "@/components/AboutUs";
import HidanganPopuler from "@/components/HidanganPopuler";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#DDF4E7]">
      <Navbar />
      {/* Di sini Anda bisa menambahkan Hero Section jika ada */}
      <AboutUs />
      <HidanganPopuler />
      <Footer />
    </main>
  );
}