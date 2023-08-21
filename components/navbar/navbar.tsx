"use client";
import NavLink from "@/utils/NavLink";
import Link from "next/link";

type Routes = {
	name: string;
	href: string;
};

export default function Navbar() {
	const routes: Routes[] = [
		{ name: "home", href: "/" },
		{ name: "gameroom", href: "/gameroom" },
		{ name: "about", href: "/about" },
	];
	return (
		<header
			className={`p-4 bg-brand-purple font-aeonik backdrop-blur-md fixed w-full lg:relative`}
		>
			<nav className="container flex items-center justify-between px-2 mx-auto">
				<div>
					<ul className="flex bg-brand-lemon w-fit shadow-[0px_0px_68px_35px_rgba(122,_113,_254,_0.15)] rounded-md text-sm font-semibold overflow-hidden">
						{routes.map((route, index) => (
							<li key={index}>
								<NavLink href={route.href}>
									{({ isActive }) => (
										<div className="p-3 px-10 uppercase transition-all duration-300 hover:bg-black/5">
											{route.name}
										</div>
									)}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<Link
					href="/auth/register"
					className="rounded-md bg-brand-lemon shadow-[0px_0px_47px_2px_rgba(0,_0,_0,_0.25)] w-fit text-sm flex items-center gap-2 p-3 transition-all duration-300 active:scale-95"
				>
					<b className="uppercase">register</b>
					<svg
						className="w-4 h-4"
						viewBox="0 0 30 29"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							id="Vector"
							d="M29.6145 4.14313L28.8021 23.09C28.7767 23.6832 28.5166 24.242 28.0791 24.6435C27.6417 25.045 27.0626 25.2563 26.4694 25.2308C25.8762 25.2054 25.3173 24.9454 24.9159 24.5079C24.5144 24.0704 24.3031 23.4914 24.3285 22.8982L24.9123 9.34602L4.74137 27.8583C4.30466 28.2591 3.72663 28.47 3.13442 28.4446C2.54222 28.4192 1.98436 28.1596 1.58356 27.7229C1.18277 27.2862 0.971866 26.7081 0.997259 26.1159C1.02265 25.5237 1.28226 24.9659 1.71896 24.5651L21.8899 6.05281L8.33645 5.46772C7.74322 5.44228 7.18439 5.18223 6.7829 4.74477C6.38141 4.3073 6.17014 3.72826 6.19558 3.13503C6.22102 2.5418 6.48107 1.98297 6.91853 1.58148C7.356 1.17999 7.93504 0.968725 8.52827 0.994161L27.4751 1.80656C27.7692 1.81883 28.058 1.88908 28.3249 2.01329C28.5918 2.13749 28.8315 2.31319 29.0303 2.53031C29.2291 2.74742 29.383 3.00167 29.4833 3.27845C29.5835 3.55522 29.6281 3.84908 29.6145 4.14313Z"
							fill="black"
						/>
					</svg>
				</Link>
			</nav>
		</header>
	);
}
