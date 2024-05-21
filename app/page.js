import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Benefits from "./components/Benefits";
import { decorCarousel, furnitureCarousel } from "@/lib/data";
import Footer from "./components/Footer";


export default function Home() {

  return (
    <main className="flex justify-center items-center flex-col mx-auto overflow-hidden">
      <Navbar />
      <Hero />
      <Carousel id={"decor"} title={'Shop Decor'} subtitle={'Let your creativity soar with us.'} items={decorCarousel}/>
      <Benefits />
      <Carousel id={"furniture"} title={'Shop Furniture'} subtitle={'Perfect pieces for playtime and rest.'} items={furnitureCarousel}/>
      <Footer />
    </main>
  );
}
