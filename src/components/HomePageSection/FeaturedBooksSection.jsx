import BookCard from "../shared/BookCard/BookCard";

const FeaturedBooksSection = async () => {
	const res = await fetch("https://booklend-json-server.onrender.com/books");
	const books = await res.json();

	const topBooks = books
		.filter((book) => book.available_quantity < 8)
		.slice(0, 4);

	return (
		<div className="container mx-auto pt-5 pb-10 space-y-5">
			<h2 className="text-center text-2xl font-bold">Top 4 Books</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-3 md:px-0">
				{topBooks.map((topBook) => (
					<BookCard key={topBook.id} topBook={topBook}></BookCard>
				))}
			</div>
		</div>
	);
};

export default FeaturedBooksSection;
