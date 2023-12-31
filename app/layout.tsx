import Navbar from "@/components/navbar/navbar";
import "@/public/css/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const description =
	"Elevate your gaming events with DRAWR - the ultimate platform for organizing online raffle draws and captivating gaming experiences. Say goodbye to logistical nightmares and welcome seamless event management. Engage your community and customers effortlessly with our feature-rich gaming event solution. Enjoy hassle-free raffle logistics and empower your online gaming community with DRAWR's powerful platform.";

const keywords = [
	"online raffle draw",
	"gaming event solution",
	"community gaming",
	"online gaming event",
	"hassle-free raffle",
	"gaming event management",
	"DRAWR platform",
	"raffle logistics",
	"online gaming community",
	"customer engagement",
	"seamless event management",
	"captivating gaming experiences",
	"gaming event organizers",
	"powerful gaming platform",
	"organize raffle draw online",
	"effortless gaming events",
	"interactive raffle experience",
	"enhance customer experience",
	"digital gaming events",
	"online event ticketing",
	"online prize draws",
	"exciting raffle campaigns",
	"raffle software solution",
];

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	// display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://drawr.vercel.app"),
	title: "DRAWR: Simplifying Your Online Raffle Draw - The Ultimate Gaming Event Solution",
	description: description,
	icons: { apple: "/apple-touch-icon.png", icon: "" },
	viewport: { width: "device-width", initialScale: 1 },
	keywords: keywords,
	openGraph: {
		type: "website",
		url: "/",
		title: "DRAWR: Simplifying Your Online Raffle Draw - The Ultimate Gaming Event Solution",
		description: description,
		siteName: "Drawr",
		locale: "en_UK",
	},
	twitter: {
		site: "/",
		title: "DRAWR: Simplifying Your Online Raffle Draw - The Ultimate Gaming Event Solution",
		creator: "@drawr",
		card: "summary_large_image",
		description: description,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				{/* <Navbar /> */}
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
