import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Testimoni from "../components/Testimoni";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main>
        <HeroSection />
        <Testimoni />
      </main>
    </div>
  );
}
