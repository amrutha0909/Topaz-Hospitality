import Hero from "../components/Hero";
import ImageReveal from "../components/ImageReveal";
import HorizontalGallery from "../components/HorizontalGallery";
import ProjectGrid from "../components/ProjectGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="py-32 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif text-center mb-16 font-light">
          End to End Solutions
        </h2>
        <ImageReveal src="/topaz/reveal.jpg" alt="Topaz Reveal" />
      </div>
      <HorizontalGallery />
      <ProjectGrid />
    </main>
  );
}
