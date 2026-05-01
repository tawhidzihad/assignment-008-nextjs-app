import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
	return (
		<div className="container mx-auto min-h-screen flex justify-center items-center px-3 md:px-0 py-10">

			<div className="bg-base-100 border-base-300 rounded-box w-md border space-y-3 px-4">
				<h1 className="text-center pt-10 pb-4 text-2xl text-zinc-700 font-bold border-zinc-200 border-b">
					Register Your Account
				</h1>

				<fieldset className="fieldset pt-5">
					<label className="text-lg text-zinc-600">Your Name</label>
					<input
						type="text"
						className="input w-full mb-4"
						placeholder="Enter your name"
					/>

					<label className="text-lg text-zinc-600">Enter Photo URL</label>
					<input
						type="text"
						className="input w-full mb-4"
						placeholder="Enter your url"
					/>

					<label className="text-lg text-zinc-600">Your Email</label>
					<input
						type="email"
						className="input w-full mb-4"
						placeholder="Enter your email"
					/>

					<label className="text-lg text-zinc-600">Password</label>
					<input
						type="password"
						className="input w-full"
						placeholder="Set password"
					/>

					<button className="btn bg-slate-500 text-white mt-4 rounded-4xl">
						Login
					</button>

					<div className="divider">Or</div>

					<button className="btn bg-slate-600 text-white rounded-4xl">
						<FcGoogle className="text-xl"></FcGoogle>
						Login with Google
					</button>
				</fieldset>

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
