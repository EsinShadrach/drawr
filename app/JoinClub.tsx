import { H3 } from "@/utils/typography";
import React from "react";
// import Marquee from "react-fast-marquee";

export function JoinClub() {
	return (
		<section className={`mt-[100px]`}>
			<div>
				{/* <Marquee loop={0} pauseOnHover={true}> */}
				<H3 className="animate-marquee  font-blogh text-[100px] leading-[143px] tracking-[1.95px] uppercase text-[#C0C0C0] ">
					join the fun club * join the fun club &nbsp;
				</H3>
				{/* </Marquee> */}
			</div>
		</section>
	);
}
