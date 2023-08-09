import { Sponsors } from "./Sponsors";
import { HeroSection } from "./HeroSection";

export default function Home() {
	return (
		<main className="mx-auto mb-20">
			<HeroSection />
			<Sponsors />
		</main>
	);
}
