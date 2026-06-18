import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ribbons from "./components/Ribbons";
import Aisles from "./components/Aisles";
import Daily from "./components/Daily";
import Corner from "./components/Corner";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import { RevealArmer } from "./components/Reveal";

export default function Page() {
  return (
    <>
      <RevealArmer />
      <Nav />
      <main className="relative-z">
        <Hero />
        <Ribbons />
        <Aisles />
        <Daily />
        <Corner />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
