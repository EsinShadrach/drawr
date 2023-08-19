import Image, { StaticImageData } from "next/image";

export type LandingPageCard = {
	image: string | StaticImageData;
	title: string;
	description: string;
};
export function LandingPageCard({
	image,
	description,
	title,
}: LandingPageCard) {
	return (
		<div className="w-full p-4 py-12 text-center text-white transition-all duration-300 bg-black rounded-lg cursor-pointer lg:max-w-sm hover:shadow-2xl hover:shadow-brand-purple">
			<div>
				<div className="mx-auto mb-4 w-fit">
					<Image
						src={image}
						alt="Profile Icon"
						width={200}
						placeholder="blur"
					/>
				</div>
				<div>
					<b>{title}</b>
				</div>
			</div>
			<div className="mt-2">
				<small>{description}</small>
			</div>
		</div>
	);
}
