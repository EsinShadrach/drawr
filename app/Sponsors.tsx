"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import nike from "@/public/icons/nike.svg";
import twitch1 from "@/public/icons/twitch-1.svg";
import twitch2 from "@/public/icons/twitch-2.svg";
import uber from "@/public/icons/uber.svg";
import wStuff from "@/public/icons/w-stuff.svg";

type ImagMap = {
	image: string | StaticImageData;
	alt: string;
};

const image: ImagMap[] = [
	{ image: nike, alt: "Nike Logo" },
	{ image: uber, alt: "Uber Logo" },
	{ image: twitch2, alt: "Twitch Logo" },
	{ image: wStuff, alt: "S-Stuff" },
	{ image: twitch1, alt: "Twitch Logo" },
];

export function Sponsors() {
	return (
		<section className="container flex items-center justify-center px-2 mx-auto lg:my-10 mt-36 sm:mt-72">
			<Swiper spaceBetween={10} slidesPerView={3}>
				{image.map((item, index) => (
					<SwiperSlide key={index}>
						<Image
							quality={100}
							draggable="false"
							width={100}
							height={100}
							src={item.image}
							alt={item.alt}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
