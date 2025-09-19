// src/app/page.js
import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Di sini Anda bisa menambahkan Hero Section jika ada */}
      <AboutUs />
      {/* Di sini Anda bisa menambahkan komponen lain seperti Menu, Kontak, dll. */}
    </main>
  );
}