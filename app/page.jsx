import Hero from "./Hero/page";
import FeaturedMovie from "./components/FeaturedMovie";
import Footer from "./components/Footer";
import { MovieProvider } from "./context/MovieContext";

export default function Home() {
  return (
    <MovieProvider>
      <main>
        <Hero />
        <FeaturedMovie />
        <Footer />
      </main>
    </MovieProvider>
  );
}
