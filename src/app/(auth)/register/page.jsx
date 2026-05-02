"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegAddressCard } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { toast } from "react-toastify";

const RegisterPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	const onSubmit = async (submitData) => {
		const { name, photoUrl, email, password } = submitData;

		const { data, error } = await authClient.signUp.email({
			name: name,
			email: email,
			password: password,
			image: photoUrl,
		});

		if (data) {
			toast.success("Registration successful.", {
				icon: <FaRegAddressCard className="text-xl text-green-500" />,
			});
			router.push("/login");
		}

		if (error) {
			toast.error(error.message);
		}
	};

	const handleGoogleSignIn = async () => {
		await authClient.signIn.social({
			provider: "google",
		});
	};

	return (
		<div className="container mx-auto min-h-screen flex justify-center items-center px-3 md:px-0 py-5">
			<div className="bg-base-100 border-base-300 rounded-box w-md border space-y-4 px-4">
				<h1 className="text-center pt-10 pb-4 text-2xl text-zinc-700 font-bold border-zinc-200 border-b">
					Register Your Account
				</h1>

				<form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
					<fieldset className="fieldset">
						<label className="text-lg text-zinc-600">Your Name</label>
						<input
							type="text"
							// name="name"
							{...register("name", {
								required: "Name field is required",
							})}
							className="input w-full"
							placeholder="Enter your name"
						/>
						{errors.name && (
							<span className="text-red-500 text-[10px]">
								{errors.name.message}
							</span>
						)}
					</fieldset>

					<fieldset className="fieldset">
						<label className="text-lg text-zinc-600">
							Your Photo URL
						</label>
						<input
							type="url"
							// name="photoUrl"
							{...register("photoUrl", {
								required: "Please provide a photo URL",
							})}
							className="input w-full"
							placeholder="Enter your photo URL"
						/>
						{errors.photoUrl && (
							<span className="text-red-500 text-[10px]">
								{errors.photoUrl.message}
							</span>
						)}
					</fieldset>

					<fieldset className="fieldset">
						<label className="text-lg text-zinc-600">Your Email</label>
						<input
							type="email"
							// name="email"
							{...register("email", {
								required: "Email field is required",
							})}
							className="input w-full"
							placeholder="Enter your email"
						/>
						{errors.email && (
							<span className="text-red-500 text-[10px]">
								{errors.email.message}
							</span>
						)}
					</fieldset>

					<fieldset className="fieldset">
						<div className="relative">
							<label className="text-lg text-zinc-600">
								Your Password
							</label>
							<input
								type={showPassword ? "text" : "password"}
								// name="password"
								{...register("password", {
									required: "Password field is required",
									minLength: {
										value: 8,
										message: "Password min 8 chrecter",
									},
								})}
								className="input w-full"
								placeholder="Enter your password"
							/>
							<span
								className="text-xl absolute bottom-2.5 right-3"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? <GoEye /> : <GoEyeClosed />}
							</span>
						</div>

						{errors.password && (
							<span className="text-red-500 text-[10px]">
								{errors.password.message}
							</span>
						)}
					</fieldset>

					<button
						className="btn bg-slate-500 text-white mt-4 rounded-4xl w-full"
						type="submit"
					>
						Register
					</button>
				</form>

				<div className="divider">Or</div>

				<button
					className="btn bg-slate-600 text-white rounded-4xl w-full"
					onClick={handleGoogleSignIn}
				>
					<FcGoogle className="text-xl"></FcGoogle>
					Login with Google
				</button>

				<p className="text-center pb-5 text-sm">
					Already Have An Account ?{" "}
					<Link href={"/login"} className="text-slate-500 border-b pb-1">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default RegisterPage;
