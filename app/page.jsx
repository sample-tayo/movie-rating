import Hero from "./Hero/page";
import FeaturedMovie from "./components/FeaturedMovie";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedMovie />
      <Footer />
    </main>
  );
}
