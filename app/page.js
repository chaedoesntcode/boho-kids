import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col mx-auto overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
