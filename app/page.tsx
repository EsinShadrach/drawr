import heartThing from "@/public/images/heart-thing.png";
import profile from "@/public/images/person.png";
import raffleImg from "@/public/images/raffle-ticket.png";
import smileyFace from "@/public/images/smiley-face.png";
import { LandingPageCard } from "@/utils/LandingPageCard";
import { FireEmoji } from "@/utils/icons/Icons";
import Image from "next/image";
import Link from "next/link";
import { GameCards } from "./../utils/cards/GameCards";
import { HeroSection } from "./HeroSection";
import { Sponsors } from "./Sponsors";

export default function Home() {
	return (
		<main className="mx-auto mb-20">
			<HeroSection />
			<Sponsors />
			<section className="container relative px-2 mx-auto mt-20 overflow-hidden font-normal">
				<div className="absolute inset-y-0 top-0 -right-16 -rotate-12">
					<Image
						draggable={"false"}
						src={smileyFace}
						alt="Smiley face Icon"
					/>
				</div>
				<div className="relative max-w-2xl mx-auto text-center bg-white font-aeonik">
					<h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
						Easy-as-abc steps to create a banger raffle event
					</h1>
					<div className="mt-5 text-base sm:text-xl">
						The world of raffle draws enters a new era of
						convenience, accessibility, and transparency.
					</div>
				</div>
			</section>
			<section className="container relative flex flex-col justify-around gap-3 px-2 mx-auto mt-20 font-normal lg:flex-row ">
				<LandingPageCard
					title="Create an account"
					description="Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s,"
					image={profile}
				/>
				<LandingPageCard
					title="Create a raffle event"
					description="Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s,"
					image={raffleImg}
				/>
				<LandingPageCard
					title="Set tiers for ticketing"
					description="Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s,"
					image={heartThing}
				/>
			</section>
			<section className="container relative px-2 mx-auto mt-20 font-normal">
				<div className="px-6 py-12 border-2 border-black rounded-lg bg-brand-purple sm:shadow-[8px_-8px_0px_0px_rgba(0,0,0,1)] space-y-20 text-white">
					<button className="bg-[#fd881b] rounded-md border-2 border-black p-3 text-white flex items-center gap-2 shadow-[2px_1px_0px_0px_rgba(0,0,0,1)] font-semibold active:scale-95 transition-all duration-300">
						<div>Most Popular</div>
						<div>
							<FireEmoji />
						</div>
					</button>
					<div className="">
						<div className="flex justify-end mr-auto">
							<Link
								href="/see-all"
								className="p-2 text-right underline transition-all duration-300 rounded-md hover:bg-brand-lemon/20"
							>
								See all
							</Link>
						</div>
						<GameCards />
					</div>
				</div>
			</section>
			{/* <Gaming />
			<JoinClub />
			<Awards />
			<Faqs />
			<Call2Action /> */}
		</main>
	);
}
