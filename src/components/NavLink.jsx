"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
	const pathname = usePathname();

	const isActive = href === pathname;

	return (
		<Link href={href} className={`${isActive && "bg-slate-700 text-white"}`}>
			{children}
		</Link>
	);
};

export default NavLink;
