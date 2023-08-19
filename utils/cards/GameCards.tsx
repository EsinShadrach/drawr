"use client";
import dragon from "@/public/images/dragon.jpeg";
import { FireEmoji, GamePad } from "@/utils/icons/Icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const games = [
	{ name: "Call Of Duty", img: dragon, desc: "" },
	{ name: "Call Of Duty", img: dragon, desc: "" },
	{ name: "Call Of Duty", img: dragon, desc: "" },
];

export function GameCards() {
	return (
		<Swiper
			className="mt-6"
			spaceBetween={16}
			breakpoints={{
				640: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 4,
				},
			}}
		>
			{games.map((game, index) => (
				<SwiperSlide
					className="flex items-center justify-center"
					key={index}
				>
					<GameCard name={game.name} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

function GameCard({ name }: { name: string }) {
	return (
		<div className="relative w-full max-w-xs p-3 py-4 text-black transition-all duration-300 bg-white rounded-md cursor-pointer hover:shadow-2xl hover:stroke-brand-lemon">
			<div className="relative">
				<div className="max-w-xs overflow-hidden w-fit">
					<Image
						src={dragon}
						placeholder="blur"
						alt="raffle"
						className="w-full max-w-xs transition-all duration-300 hover:scale-105"
						draggable={"false"}
					/>
				</div>
				<div className="absolute overflow-hidden rounded-full -bottom-3 -right-2">
					<div className="transition-all duration-300 hover:scale-125">
						<GamePad />
					</div>
				</div>
			</div>
			<div className="">
				<div className="mt-2 text-2xl font-blogh text-brand-purple">
					{name}
				</div>
				<div className="pt-2 border-t border-black/20">
					<small className="text-xs line-clamp-4">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry&apos;s standard dummy text ever since the
						1500s,
					</small>
				</div>
				<div className="flex items-center gap-2 mt-2">
					<div className="text-brand-purple">
						<FireEmoji />
					</div>
					<div className="col-start-2 row-start-1 row-end-3">
						<dt className="sr-only">Users</dt>
						<dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
							<Image
								height={24}
								width={24}
								src={dragon}
								alt="User For"
								className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
							/>
							<Image
								height={24}
								width={24}
								src={dragon}
								alt="User For"
								className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
								loading="lazy"
							/>
							<Image
								height={24}
								width={24}
								src={dragon}
								alt="User For"
								className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
								loading="lazy"
							/>
						</dd>
					</div>
					<small className="ml-2 overflow-hidden text-xs whitespace-nowrap text-ellipsis text-slate-400">
						+40,321 people are playing this game
					</small>
				</div>
			</div>
		</div>
	);
}
