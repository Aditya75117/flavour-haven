import "@/styles/page.scss";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Specials from "@/components/sections/Specials";
import Menu from "@/components/sections/Menu";
import Chefs from "@/components/sections/Chefs";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Reservation from "@/components/sections/Reservation";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specials />
        <Menu />
        <Chefs />
        <Testimonials />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
