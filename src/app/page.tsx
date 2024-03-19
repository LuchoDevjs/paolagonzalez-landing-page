import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-8xl mx-auto p-5">
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </>
  );
}
