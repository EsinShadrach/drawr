interface NavLinkProps {
	href: string;
	children: ({ isActive }: { isActive: boolean }) => React.ReactNode;
}
