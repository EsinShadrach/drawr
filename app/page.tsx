import { Sponsors } from "./Sponsors";
import { HeroSection } from "./HeroSection";
import Feature from "./feature";

export default function Home() {
  return (
    <main className="mx-auto mb-20">
      <HeroSection />
      <Sponsors />
      <Feature />
    </main>
  );
}
