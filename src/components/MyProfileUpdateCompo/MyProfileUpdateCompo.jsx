"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const MyProfileUpdateCompo = () => {
	const router = useRouter();

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const name = event.target.name.value;
		const photoUrl = event.target.photoUrl.value;

		if (name && photoUrl) {
			await authClient.updateUser({
				name: name,
				image: photoUrl,
			});

			toast.success("Profile update successful.", {
				icon: <BiEdit className="text-xl text-green-500" />,
			});

			router.push("/my-profile");
		} else {
			toast.warning("Enter Name Or Photo URL");
		}
	};

	return (
		<div className="container mx-auto my-5 py-10 flex justify-center items-center px-3 md:px-0">
			<div className="card bg-base-100 w-96 shadow-sm py-10 px-5 space-y-5">
				<h1 className="text-center pb-4 text-2xl text-zinc-700 font-bold border-zinc-200 border-b">
					Update Your Profile
				</h1>

				<form className="space-y-2" onSubmit={handleFormSubmit}>
					<fieldset className="fieldset">
						<label className="text-lg text-zinc-600">Update name</label>
						<input
							type="text"
							name="name"
							className="input w-full"
							placeholder="Enter your name"
						/>
					</fieldset>

					<fieldset className="fieldset">
						<label className="text-lg text-zinc-600">Update photo</label>
						<input
							type="url"
							name="photoUrl"
							className="input w-full"
							placeholder="Enter photo url"
						/>
					</fieldset>

					<button
						className="btn bg-slate-500 text-white mt-4 rounded-4xl w-full"
						type="submit"
					>
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default MyProfileUpdateCompo;
