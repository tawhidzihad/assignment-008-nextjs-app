"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import { toast } from "react-toastify";

const NavLoginLogout = () => {
	const { data, isPending } = authClient.useSession();

	const userData = data?.user;

	const handleLogoutBtn = async () => {
		toast.error("Logout successfully.", {
			icon: <IoIosLogOut className="text-xl text-red-500" />,
		});
		await authClient.signOut();
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

					<div className="block md:hidden">
						<Link href={"/my-profile"}>
							<Image
								src={userData.image}
								alt={userData.name}
								width={10}
								height={10}
								className="h-10 w-10 rounded-full object-cover"
							></Image>
						</Link>
					</div>

					<div className="hidden md:block">
						<Image
							src={userData.image}
							alt={userData.name}
							width={10}
							height={10}
							className="h-10 w-10 rounded-full object-cover"
						></Image>
					</div>

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
