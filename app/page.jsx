import Hero from "../components/Hero";
import IntroValues from "../components/IntroValues";
import HorizontalGallery from "../components/HorizontalGallery";
import VerticalMarquee from "../components/VerticalMarquee";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2e2e2e]">
      <Hero />
      <IntroValues />
      <VerticalMarquee />
      <HorizontalGallery />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
