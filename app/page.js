import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col mx-auto">
      <Navbar />
      <section id="home" className="h-screen w-full bg-gray-400">hero</section>
      <section id="decor" className="h-screen w-full bg-gray-400">decor</section>
    </main>
  );
}
