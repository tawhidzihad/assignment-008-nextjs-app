"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";

const MyProfilePage = () => {
	const { data, isPending } = authClient.useSession();
	const router = useRouter();
	const userData = data?.user;

	const handleUpdateBtn = () => {
		if (data) {
			router.push("/my-profile/update-profile");
		} else {
			router.push("/login");
		}
	};

	return (
		<div className="container mx-auto my-5 py-10 flex justify-center items-center px-3 md:px-0">
			<div className="card bg-base-100 w-96 shadow-sm p-5">
				{isPending ? (
					<div className="p-10 flex justify-center items-center">
						<span className="loading loading-spinner loading-xl"></span>
					</div>
				) : (
					<>
						<div className="flex justify-end">
							<button
								onClick={handleUpdateBtn}
								className="rounded-full p-3 hover:bg-zinc-400 hover:text-white transition-all ease-in-out duration-500 bg-base-200 border border-base-300"
							>
								<BiEdit className="text-xl" />
							</button>
						</div>
						<figure>
							<Image
								src={userData?.image}
								alt={userData?.name}
								width={150}
								height={150}
								className="h-40 w-40 rounded-full object-cover border border-zinc-200 p-0.5 transition-all hover:bg-slate-600 ease-in-out duration-500"
							/>
						</figure>
						<div className="flex flex-col justify-center items-center gap-2 py-5">
							<p className="text-xl font-medium">{userData?.name}</p>
							<p className="text-sm text-zinc-500">
								Email: {userData?.email}
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default MyProfilePage;
