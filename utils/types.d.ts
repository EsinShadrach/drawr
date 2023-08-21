interface NavLinkProps {
	href: string;
	children: ({ isActive }: { isActive: boolean }) => React.ReactNode;
}

interface ButtonProps {
	children: React.ReactNode;
	className: string;
	color?: "purple" | "lemon" | "black" | "transparent";
	onClick: Function;
}
