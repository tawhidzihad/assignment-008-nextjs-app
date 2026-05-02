import BorrowButton from "@/components/BorrowButton";
import { getThisBook } from "@/lib/DataFetchFunc/getData";
import Image from "next/image";

const BookDetailsPage = async ({ params }) => {
	const { id } = await params;
	const {
		author,
		title,
		image_url,
		description,
		category,
		available_quantity,
	} = await getThisBook(id);

	return (
		<div className="container mx-auto py-10 flex justify-center items-center animate__fadeIn animate__delay-0.5s animate__animated">
			<div className="flex flex-col md:flex-row gap-1 px-3 md:px-0">
				<div className="bg-base-200 hover:bg-slate-300 p-10 rounded-md flex justify-center items-center">
					<Image
						src={image_url}
						width={300}
						height={300}
						alt={title}
						className="w-auto rounded"
					/>
				</div>
				<div className="bg-base-300 hover:bg-slate-300 p-10 flex justify-center flex-col gap-5 rounded-md ">
					<div>
						<p className="text-xl font-bold text-zinc-600">{author}</p>

						<h2 className="text-4xl text-black font-bold">{title}</h2>
					</div>

					<div className="md:w-110">
						<p className="text-xl text-zinc-500">{description}</p>
					</div>

					<div className="flex gap-2">
						<p className="badge badge-soft badge-info rounded-full badge-xl">
							{category}
						</p>

						<p className="badge badge-soft badge-success rounded-full badge-xl">
							{available_quantity} Copies Left
						</p>
					</div>
					<BorrowButton title={title}></BorrowButton>
				</div>
			</div>
		</div>
	);
};

export default BookDetailsPage;
