"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const NavLoginLogout = () => {
	const { data, isPending } = authClient.useSession();

	const userData = data?.user;

	const handleLogoutBtn = async () => {
		await authClient.signOut();
		toast.success("Signed out successfully.");
	};

	return (
		<>
			{isPending ? (
				<div className="flex-1 flex justify-end items-center gap-2">
					<span className="loading loading-spinner loading-xl"></span>
				</div>
			) : userData ? (
				<div className="flex items-center gap-2">
					<p className="hidden md:block font-medium">
						Hey, {userData.name}
					</p>

					{/* This is for mobile device only */}
					<div className=" md:hidden dropdown dropdown-center">
						<div tabIndex={0} role="button">
							<Image
								src={userData.image}
								alt={userData.name}
								width={10}
								height={10}
								className="h-10 w-10 rounded-full object-cover"
							></Image>
						</div>
						<p className="dropdown-content menu bg-base-100 rounded w-40 z-1 font-medium">
							Hey, {userData.name}
						</p>
					</div>

					{/* This is for medium to large device */}
					<Image
						src={userData.image}
						alt={userData.name}
						width={10}
						height={10}
						className="h-10 w-10 rounded-full object-cover hidden md:block"
					></Image>

					<button className="btn" onClick={handleLogoutBtn}>
						Logout
					</button>
				</div>
			) : (
				<Link href={"/login"} className="btn">
					Login
				</Link>
			)}
		</>
	);
};

export default NavLoginLogout;
