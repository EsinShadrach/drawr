import Image from "next/image";
import twitch1 from "@/public/icons/twitch-1.svg";
import twitch2 from "@/public/icons/twitch-2.svg";
import wStuff from "@/public/icons/w-stuff.svg";
import nike from "@/public/icons/nike.svg";
import uber from "@/public/icons/uber.svg";

export function Sponsors() {
	return (
		<section className="container mx-auto px-2 lg:my-10 mt-36 sm:mt-72 flex items-center justify-center overflow-hidden flex-wrap">
			<Image
				quality={100}
				draggable="false"
				width={100}
				height={100}
				src={nike}
				alt="Nike Logo"
			/>
			<Image
				quality={100}
				draggable="false"
				width={100}
				height={100}
				src={uber}
				alt="Uber Logo"
			/>
			<Image
				quality={100}
				draggable="false"
				width={100}
				height={100}
				src={twitch2}
				alt="Twitch Logo"
			/>
			<Image
				quality={100}
				draggable="false"
				width={100}
				height={100}
				src={wStuff}
				alt="Twitch Logo"
			/>
			<Image
				quality={100}
				draggable="false"
				width={100}
				height={100}
				src={twitch1}
				alt="Twitch Logo"
			/>
		</section>
	);
}
