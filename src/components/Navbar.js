import React from "react";

const logoSrc = new URL("../assets/logoNavbar.png", import.meta.url).href;

// Konfigurasi Navbar - ubah nilai di sini untuk mengubah konten
const navbarConfig = {
  brandName: "Warm Dish Café",
  logoAlt: "Warm Dish Café Logo",
  menuItems: [
    { href: "#beranda", text: "Beranda", isActive: true },
    { href: "#tentang-kami", text: "Tentang Kami", isActive: false },
    { href: "#hidangan-populer", text: "Hidangan Populer", isActive: false },
    { href: "#testimoni", text: "Testimoni", isActive: false }
  ],
  contactButton: {
    href: "#kontak-kami",
    text: "Kontak Kami"
  }
};

export default function Navbar() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 bg-[#DDF4E7]">
        <nav className="mx-auto max-w-[1365px] px-[76px] h-[69px] flex items-center justify-between">
          {/* Brand: logo + text */}
          <div className="flex items-center gap-[12px] w-[236px] h-[69px]">
            <img
              src={logoSrc}
              alt={navbarConfig.logoAlt}
              className="w-[69px] h-[69px] object-contain select-none"
              draggable="false"
            />
            <span
              className="text-[20px] font-bold leading-[1] text-[#2E7373]"
              style={{ fontFamily: "Poppins, Arial, sans-serif", letterSpacing: 0 }}
            >
              {navbarConfig.brandName}
            </span>
          </div>

          {/* Middle menu */}
          <ul className="hidden md:flex items-center gap-[27px] w-[618px] h-[69px]">
            {navbarConfig.menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`px-[10px] py-[10px] text-[20px] leading-[1] text-[#2E7373] ${
                    item.isActive ? 'font-bold' : 'font-medium'
                  }`}
                  style={{ fontFamily: "Poppins, Arial, sans-serif", letterSpacing: 0 }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Right button */}
          <a
            href={navbarConfig.contactButton.href}
            className="inline-flex items-center justify-center w-[184px] h-[50px] px-[28px] py-[10px] rounded-[15px] bg-[#2E7373] text-white text-[20px] leading-[1] font-medium whitespace-nowrap"
            style={{ fontFamily: "Poppins, Arial, sans-serif", letterSpacing: 0 }}
          >
            {navbarConfig.contactButton.text}
          </a>
        </nav>
      </header>
      {/* Spacer to offset the fixed navbar height (69px) */}
      <div aria-hidden className="h-[69px]" />
    </>
  );
}
