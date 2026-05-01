import { getAllBooks } from "@/lib/DataFetchFunc/getData";
import BookCard from "../shared/BookCard/BookCard";

const FeaturedBooksSection = async () => {
	const books = await getAllBooks();

	const topBooks = books
		.filter((book) => book.available_quantity < 8)
		.slice(0, 4);

	return (
		<div className="container mx-auto pt-10 pb-15 space-y-5 animate__fadeIn animate__delay-0.5s animate__animated">
			<h2 className="text-center text-2xl font-bold">Top 4 Books</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-3 md:px-0">
				{topBooks.map((book) => (
					<BookCard key={book.id} book={book}></BookCard>
				))}
			</div>
		</div>
	);
};

export default FeaturedBooksSection;
