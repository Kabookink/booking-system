"use client";

import React, { useState } from "react";
import ScrollReveal from "../components/ui/ScrollReveal";
import GlareCard from "../components/ui/GlareCard";
import CountUp from "../components/ui/CountUp";

// Import vector daun dari assets
const vectorDaunSrc = new URL("../assets/vectorDaun.png", import.meta.url).href;

// Placeholder images dari internet
const placeholderImages = {
  orangeJuice: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=200&h=200&fit=crop&crop=center",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop&crop=center", 
  ayamBakar: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200&h=200&fit=crop&crop=center",
  nasiGoreng: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200&h=200&fit=crop&crop=center",
  coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop&crop=center",
  pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc353d30e?w=200&h=200&fit=crop&crop=center",
  sandwich: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=200&h=200&fit=crop&crop=center",
  soup: "https://images.unsplash.com/photo-1547592180-85f173990554?w=200&h=200&fit=crop&crop=center"
};

// Konfigurasi Hidangan Populer - ubah nilai di sini untuk mengubah konten
const hidanganPopulerConfig = {
  title: "Hidangan Populer Kita",
  dishes: [
    {
      id: 1,
      name: "Orange Juice",
      image: placeholderImages.orangeJuice,
      rating: 4.5,
      subtitle: "Minuman Segar Alami",
      soldCount: 100,
      buttonText: "Pesan Sekarang"
    },
    {
      id: 2,
      name: "Salad",
      image: placeholderImages.salad,
      rating: 4.8,
      subtitle: "Sayuran Segar Pilihan",
      soldCount: 150, 
      buttonText: "Pesan Sekarang"
    },
    {
      id: 3,
      name: "Ayam Bakar",
      image: placeholderImages.ayamBakar,
      rating: 4.7,
      subtitle: "Bumbu Rempah Khas",
      soldCount: 200,
      buttonText: "Pesan Sekarang"
    },
    {
      id: 4,
      name: "Nasi Goreng",
      image: placeholderImages.nasiGoreng,
      rating: 4.6,
      subtitle: "Nasi Goreng Spesial",
      soldCount: 180,
      buttonText: "Pesan Sekarang"
    },
    {
      id: 5,
      name: "Coffee Latte",
      image: placeholderImages.coffee,
      rating: 4.9,
      subtitle: "Kopi Premium Terbaik",
      soldCount: 250,
      buttonText: "Pesan Sekarang"
    },
    {
      id: 6,
      name: "Pasta Carbonara",
      image: placeholderImages.pasta,
      rating: 4.4,
      subtitle: "Pasta Italia Autentik",
      soldCount: 120,
      buttonText: "Pesan Sekarang"
    },
    {
      id: 7,
      name: "Club Sandwich",
      image: placeholderImages.sandwich,
      rating: 4.3,
      subtitle: "Sandwich Triple Layer",
      soldCount: 90,
      buttonText: "Pesan Sekarang"
    },
    {
      id: 8,
      name: "Mushroom Soup",
      image: placeholderImages.soup,
      rating: 4.5,
      subtitle: "Sup Jamur Creamy",
      soldCount: 110,
      buttonText: "Pesan Sekarang"
    }
  ]
};

// Komponen untuk menampilkan bintang rating
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {/* Bintang penuh */}
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className="text-[#2E7373] text-[16px] leading-none">★</span>
      ))}
      {/* Bintang setengah */}
      {hasHalfStar && <span className="text-[#2E7373] text-[16px] leading-none">☆</span>}
      {/* Bintang kosong */}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="text-gray-300 text-[16px] leading-none">☆</span>
      ))}
    </>
  );
};

// Komponen card untuk setiap hidangan - simplified without excessive animations
const DishCard = ({ dish, index = 0 }) => {
  return (
    <ScrollReveal
      delay={index * 100}
      origin="bottom"
      distance={50}
      duration={600}
      className="relative w-[310px] h-[387px] flex-shrink-0"
    >
      <div className="relative w-full h-full bg-[#DDF4E7] rounded-[35px] overflow-hidden">
        {/* Gambar makanan dengan simple glare effect */}
        <div className="absolute top-[21px] left-[68px] w-[173px] h-[173px] rounded-lg overflow-hidden">
          <GlareCard 
            className="w-full h-full"
            glareColor="rgba(255, 255, 255, 0.4)"
            intensity={0.6}
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          </GlareCard>
        </div>

        {/* Nama makanan - no floating animation */}
        <h3 
          className="absolute top-[210px] left-1/2 transform -translate-x-1/2 font-bold text-[20px] leading-[100%] text-[#2E7373] text-center"
          style={{ fontFamily: "Poppins, Arial, sans-serif", letterSpacing: "0%" }}
        >
          {dish.name}
        </h3>

        {/* Sub makanan */}
        <p 
          className="absolute top-[240px] left-1/2 transform -translate-x-1/2 font-normal text-[14px] leading-[100%] text-[#2E7373] text-center"
          style={{ fontFamily: "Poppins, Arial, sans-serif", letterSpacing: "0%" }}
        >
          {dish.subtitle}
        </p>

        {/* Rating dan Terjual dalam satu baris */}
        <div className="absolute top-[270px] left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-3">
          {/* Rating bintang */}
          <div className="flex items-center gap-[2px]">
            <StarRating rating={dish.rating} />
          </div>
          
          {/* Divider */}
          <span className="text-[#2E7373]">|</span>
          
          {/* Terjual count dengan CountUp animation */}
          <span 
            className="font-normal text-[12px] leading-[100%] text-[#2E7373]"
            style={{ fontFamily: "Poppins, Arial, sans-serif", letterSpacing: "0%" }}
          >
            Terjual <CountUp end={dish.soldCount} suffix="+" duration={2000} />
          </span>
        </div>

        {/* Button dengan simple glare effect */}
        <div className="absolute top-[320px] left-1/2 transform -translate-x-1/2">
          <GlareCard 
            className="w-[200px] h-[38px]"
            glareColor="rgba(255, 255, 255, 0.3)"
            intensity={0.5}
          >
            <button 
              className="w-full h-full bg-[#DDF4E7] border border-[#2E7373] rounded-[25px] text-[#2E7373] text-sm font-medium hover:bg-[#2E7373] hover:text-[#DDF4E7] transition-colors duration-300"
              style={{ 
                fontFamily: "Poppins, Arial, sans-serif",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              }}
            >
              {dish.buttonText}
            </button>
          </GlareCard>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default function HidanganPopuler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, hidanganPopulerConfig.dishes.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const visibleDishes = hidanganPopulerConfig.dishes.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <ScrollReveal
      threshold={0.1}
      origin="bottom"
      distance={100}
      duration={800}
    >
      <section 
        className="w-full bg-[#DDF4E7] py-12 px-4 md:px-8 lg:px-16"
        style={{
          minHeight: "699px"
        }}
      >
        <div className="max-w-[1365px] mx-auto flex items-center justify-center">
          {/* Kotak card utama dengan scroll reveal */}
          <div 
            className="relative bg-[#2E7373] w-full max-w-[1193px] overflow-hidden"
            style={{
              height: "599px", 
              borderRadius: "35px"
            }}
          >
            {/* Vector Daun (kiri atas) */}
            <div 
              className="absolute"
              style={{
                width: "61px",
                height: "61px",
                top: "40px",
                left: "67px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2E7373"
              }}
            >
              <img
                src={vectorDaunSrc}
                alt="Vector Daun"
                style={{
                  width: "44.5px",
                  height: "44.5px"
                }}
              />
            </div>

            {/* Judul tanpa background box */}
            <h2 
              className="absolute z-20"
              style={{
                top: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "Poppins, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "38px",
                lineHeight: "1.2",
                letterSpacing: "0%",
                color: "#DDF4E7",
                margin: 0,
                whiteSpace: "nowrap"
              }}
            >
              Hidangan Populer <span style={{ color: "#DDF4E7" }}>Kita</span>
            </h2>

            {/* Container carousel untuk cards */}
            <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2 w-[1000px] overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-8"
                style={{
                  transform: `translateX(-${currentIndex * (310 + 32)}px)` // 310px width + 32px gap (8 * 4)
                }}
              >
                {hidanganPopulerConfig.dishes.map((dish, index) => (
                  <DishCard key={dish.id} dish={dish} index={index} />
                ))}
              </div>
            </div>

            {/* Navigation dan Dots di bawah cards - dalam satu baris */}
            <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex items-center gap-6">
              {/* Panah Kiri */}
              <GlareCard 
                className="w-[40px] h-[40px]"
                glareColor="rgba(46, 115, 115, 0.3)"
                intensity={0.8}
              >
                <button 
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="w-full h-full bg-[#DDF4E7] flex items-center justify-center rounded-[20px] hover:bg-white transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg 
                    width="20" 
                    height="16" 
                    viewBox="0 0 20 16" 
                    fill="none"
                  >
                    <path 
                      d="M18 8L2 8M2 8L8 2M2 8L8 14" 
                      stroke="#2E7373" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </GlareCard>

              {/* Carousel indicator dots */}
              <div className="flex gap-3">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-[#DDF4E7] scale-125' 
                        : 'bg-[#DDF4E7]/50 hover:bg-[#DDF4E7]/80'
                    }`}
                  />
                ))}
              </div>

              {/* Panah Kanan */}
              <GlareCard 
                className="w-[40px] h-[40px]"
                glareColor="rgba(46, 115, 115, 0.3)"
                intensity={0.8}
              >
                <button 
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                  className="w-full h-full bg-[#DDF4E7] flex items-center justify-center rounded-[20px] hover:bg-white transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg 
                    width="20" 
                    height="16" 
                    viewBox="0 0 20 16" 
                    fill="none"
                  >
                    <path 
                      d="M2 8L18 8M18 8L12 2M18 8L12 14" 
                      stroke="#2E7373" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </GlareCard>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}