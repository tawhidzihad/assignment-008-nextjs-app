import Link from "next/link";

const Banner = () => {
	return (
		<div className="px-3 md:px-0 animate__fadeIn animate__delay-0.5s animate__animated">
			<div className="container mx-auto h-[40vh] my-10 flex justify-center items-center bg-[linear-gradient(200deg,#4facfe,#8e44ad)] rounded-xl">
				<div className="flex flex-col gap-5 text-center">
					<h1 className="text-2xl md:text-4xl text-white animate__zoomIn animate__delay-0.5s animate__animated">
						Find Your Next Read
					</h1>
					<div>
						<Link
							href={"/all-books"}
							className="btn btn-outline rounded-full bg-white animate__zoomIn animate__delay-0.5s animate__animated"
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
