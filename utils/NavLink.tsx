"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: NavLinkProps) {
	const [isActive, setIsActive] = useState<boolean>(false);
	const path = usePathname();
	useEffect(() => {
		path === href ? setIsActive(true) : setIsActive(false);
	}, [href, path]);

	return <Link href={href}>{children({ isActive })}</Link>;
}

export default NavLink;
