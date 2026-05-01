import Link from "next/link";

const Banner = () => {
	return (
		<div className="px-3 md:px-0 animate__fadeIn animate__delay-0.5s animate__animated">
			<div className="container mx-auto h-[40vh] my-10 flex justify-center items-center bg-linear-to-bl from-indigo-200 to-slate-400 rounded-xl">
				<div className="flex flex-col gap-5 text-center">
					<h1 className="text-2xl md:text-4xl text-black animate__lightSpeedInRight animate__delay-0.5s animate__animated">
						Find Your Next Read
					</h1>
					<div>
						<Link
							href={"/all-books"}
							className="btn btn-outline rounded-full animate__zoomIn animate__delay-0.5s animate__animated"
						>
							Browse Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
