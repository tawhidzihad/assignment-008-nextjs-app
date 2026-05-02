import BooksImage from "@/images/Books-Image.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
	return (
		<div className="container mx-auto h-[40vh] lg:h-[50vh] max-h-[60vh] my-10 flex justify-center items-center bg-[linear-gradient(180deg,#4facf5,#8e44ad)] rounded md:rounded-xl animate__fadeIn animate__delay-0.5s animate__animated">
			<div className="flex flex-col gap-5 text-center">
				<div className="flex justify-center items-center flex-col">
					<Image
						src={BooksImage}
						width={600}
						height={600}
						loading="eager"
						alt="Banner Book Image"
						className="w-auto"
					></Image>

					<h1 className="text-2xl md:text-4xl text-white [text-shadow:0_8px_9px_rgba(0,0,0,0.400)] animate__zoomIn animate__delay-0.5s animate__animated">
						Find Your Next Read.
					</h1>
				</div>
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
	);
};

export default Banner;
