export default function HeroSection() {
  return (
    <section className="relative bg-[#eafaf3] min-h-[80vh] flex items-center justify-center px-10 py-16 overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex-1 flex flex-col gap-6 max-w-xl md:items-start items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#225c4b] leading-tight text-left">
            Selamat Datang di Warm Dish Café —<br />
            Makanan Lezat, Suasana Nyaman
          </h1>
          <p className="text-lg text-[#225c4b]/80 text-left">Nikmati hidangan hangat, kopi spesial, dan suasana nyaman untuk setiap momen.</p>
          <div className="flex gap-4 mt-4">
            <a href="#reservasi" className="bg-[#225c4b] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#1a4638] transition">
              Reservasi Sekarang
            </a>
            <a href="#menu" className="border-2 border-[#225c4b] text-[#225c4b] font-semibold px-6 py-3 rounded-lg hover:bg-[#d6f5e3] transition">
              Jelajahi Menu
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0">
          <div className="relative">
            <div className="relative flex items-center justify-center border-8 border-transparent">
              {/* base image */}
              <img src="/hero_image_chef.png" alt="Chef Illustration" className="block w-[360px] md:w-[520px] lg:w-[700px] h-auto max-w-none" />
              {/* inside image - positioned above the base image */}
              <img src="/hero_image_chef_inside.png" alt="Chef Illustration" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-full z-20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
