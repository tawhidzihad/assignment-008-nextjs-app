import Image from "next/image";
import Link from "next/link";

const BookCard = ({ topBook }) => {
	const { image_url, title, available_quantity } = topBook;

	return (
		<div className="card bg-base-100 shadow-md ">
			<figure className="py-10 bg-zinc-200 hover:bg-base-100 relative">
				<Image
					src={image_url}
					alt={title}
					width={100}
					height={100}
					className="h-60 w-auto rounded"
				/>
				<span className="badge badge-success text-white badge-sm absolute right-2 top-2">
					{available_quantity} Copies left
				</span>
			</figure>

			<div className="py-5 px-3 text-center space-y-6">
				<h2 className="text-xl font-bold text-slate-700">{title}</h2>
				<Link
					href={"/all-books"}
					className="btn btn-outline w-full border-none bg-zinc-100 hover:bg-zinc-300 rounded-full"
				>
					View Details
				</Link>
			</div>
		</div>
	);
};

export default BookCard;
