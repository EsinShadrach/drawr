import { Sponsors } from "./Sponsors";
import { HeroSection } from "./HeroSection";
import { Features } from "./Features";
import { Gaming } from "./Gaming";
import { JoinClub } from "./JoinClub";
import { Awards } from "./Awards";
import { Faqs } from "./Faqs";

export default function Home() {
  return (
    <main className="mx-auto mb-20">
      <HeroSection />
      <Sponsors />
      <Features />
      <Gaming />
      <JoinClub />
      <Awards />
      <Faqs />
    </main>
  );
}
