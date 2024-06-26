import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Benefits from "./components/Benefits";
import { decorCarousel, furnitureCarousel } from "@/lib/data";
import SocialMediaFeed from "./components/SocialMediaFeed";
import Featured from "./components/Featured";
import Footer from "./components/Footer";


export default function Home() {

  return (
    <main className="flex justify-center items-center flex-col mx-auto overflow-hidden">
      <Navbar />
      <Hero />
      <Carousel id={"decor"} title={'Shop Decor'} subtitle={'Let your creativity soar with us.'} items={decorCarousel}/>
      <Featured />
      <Carousel id={"furniture"} title={'Shop Furniture'} subtitle={'Perfect pieces for playtime and rest.'} items={furnitureCarousel}/>
      <Benefits />
      <SocialMediaFeed />
      <Footer />
    </main>
  );
}
