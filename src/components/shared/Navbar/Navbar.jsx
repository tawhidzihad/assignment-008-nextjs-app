import NavLink from "@/components/NavLink";
import Logo from "@/images/booklend-logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="border-b border-slate-300">
			<div className="container mx-auto">
				<div className="navbar md:px-0">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{" "}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>{" "}
								</svg>
							</div>
							<ul
								tabIndex="-1"
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
							>
								<li>
									<NavLink href={"/"}>Home</NavLink>
								</li>
								<li>
									<NavLink href={"/all-books"}>All Books</NavLink>
								</li>
								<li>
									<NavLink href={"/my-profile"}>My Profile</NavLink>
								</li>
							</ul>
						</div>
						<Link href={"/"}>
							<Image
								src={Logo}
								alt="Booklend Navbar"
								width={40}
								height={40}
							></Image>
						</Link>
					</div>

					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal gap-1">
							<li>
								<NavLink href={"/"}>Home</NavLink>
							</li>
							<li>
								<NavLink href={"/all-books"}>All Books</NavLink>
							</li>
							<li>
								<NavLink href={"/my-profile"}>My Profile</NavLink>
							</li>
						</ul>
					</div>

					<div className="navbar-end">
						<Link href={"/login"} className="btn">Login</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
