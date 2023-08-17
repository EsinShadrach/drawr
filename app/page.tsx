import { Sponsors } from "./Sponsors";
import { HeroSection } from "./HeroSection";
import { Features } from "./Features";
import { Gaming } from "./Gaming";

export default function Home() {
  return (
    <main className="mx-auto mb-20">
      <HeroSection />
      <Sponsors />
      <Features />
      <Gaming />
    </main>
  );
}
