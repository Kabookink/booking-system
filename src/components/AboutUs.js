"use client";

import React from "react";
import ScrollReveal from "../components/ui/ScrollReveal";
import GlareCard from "../components/ui/GlareCard";

const aboutUsImg = new URL("../assets/AboutUs.png", import.meta.url).href;

// Konfigurasi About Us - ubah nilai di sini untuk mengubah konten
const aboutUsConfig = {
  title: "Tentang Kami",
  imageAlt: "Tentang Warm Dish Café",
  description: "Warm Dish Café hadir untuk menghadirkan kehangatan dalam setiap hidangan dan kenyamanan di setiap suasana. Kami menyajikan makanan hangat, minuman segar, dan kopi pilihan dengan penuh cinta — tempat terbaik untuk keluarga, teman, atau menikmati waktu sendiri."
};

export default function AboutUs() {
  return (
    <ScrollReveal
      threshold={0.1}
      origin="bottom"
      distance={80}
      duration={800}
    >
      <section className="w-full bg-[#2E7373] py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-[1365px] mx-auto relative" style={{ minHeight: "691px" }}>
          {/* Teks: Tentang Kami */}
          <h2
            className="absolute top-[40px] left-1/2 transform -translate-x-1/2 font-bold leading-[1] text-[38px] text-[#DDF4E7] text-center"
            style={{ fontFamily: "Poppins, Arial, sans-serif", letterSpacing: 0 }}
          >
            {aboutUsConfig.title}
          </h2>

          {/* Gambar kiri dengan glare effect dan scroll reveal */}
          <ScrollReveal
            delay={300}
            origin="left"
            distance={100}
            duration={800}
            className="absolute top-[115px] left-[96px]"
          >
            <GlareCard 
              className="w-[506px] h-[484px] rounded-[56px] overflow-hidden"
              glareColor="rgba(221, 244, 231, 0.3)"
              intensity={0.6}
            >
              <img
                src={aboutUsImg}
                alt={aboutUsConfig.imageAlt}
                className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                draggable="false"
              />
            </GlareCard>
          </ScrollReveal>

          {/* Teks kanan dengan scroll reveal */}
          <ScrollReveal
            delay={600}
            origin="right"
            distance={100}
            duration={800}
            className="absolute top-[189px] right-[96px]"
          >
            <div className="w-[624px] h-[336px]">
              <p
                className="font-bold text-[28px] leading-[1.2] text-[#DDF4E7] opacity-0 animate-typewriter"
                style={{ 
                  fontFamily: "Poppins, Arial, sans-serif", 
                  letterSpacing: 0,
                  animation: "fadeInUp 1s ease-out 0.8s forwards"
                }}
              >
                {aboutUsConfig.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ScrollReveal>
  );
}