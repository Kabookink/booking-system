import React from "react";
const aboutUsImg = new URL("../assets/AboutUs.png", import.meta.url).href;

export default function AboutUs() {
  return (
    <section className="relative mx-auto mt-6 w-[1365px] h-[691px] bg-[#2E7373] overflow-hidden">
      {/* Teks: Tentang Kami */}
      <h2
        className="absolute top-[40px] left-[545px] font-bold leading-[1] text-[38px] text-[#DDF4E7]"
        style={{ fontFamily: "Poppins, Arial, sans-serif", letterSpacing: 0 }}
      >
        Tentang Kami
      </h2>

      {/* Gambar kiri */}
      <img
        src={aboutUsImg}
        alt="Tentang Warm Dish Café"
        className="absolute top-[115px] left-[96px] w-[506px] h-[484px] object-cover opacity-90 rounded-[56px]"
        draggable="false"
      />

      {/* Teks kanan */}
      <p
        className="absolute top-[189px] left-[672px] w-[624px] h-[336px] font-bold text-[28px] leading-[1] text-[#DDF4E7]"
        style={{ fontFamily: "Poppins, Arial, sans-serif", letterSpacing: 0 }}
      >
        Warm Dish Café hadir untuk menghadirkan kehangatan dalam setiap
        hidangan dan kenyamanan di setiap suasana. Kami menyajikan makanan
        hangat, minuman segar, dan kopi pilihan dengan penuh cinta — tempat
        terbaik untuk keluarga, teman, atau menikmati waktu sendiri.
      </p>
    </section>
  );
}