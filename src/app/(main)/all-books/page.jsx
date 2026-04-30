import BooksBySearching from "@/components/BooksBySearching";
import FilteringByCategory from "@/components/FilteringByCategory";
import BookCard from "@/components/shared/BookCard/BookCard";
import { getAllBooks, getCategories } from "@/lib/DataFetchFunc/getData";

const AllBooksPage = async ({ searchParams }) => {
	const sp = await searchParams;
	const books = await getAllBooks(sp.category, sp.search);
	const categories = await getCategories();

	return (
		<div className="container mx-auto py-10 space-y-6">
			<h1 className="text-center text-3xl font-bold">All Books</h1>

			<div className="flex flex-col-reverse gap-5 md:flex-row items-center justify-between">
				<FilteringByCategory
					categories={categories}
					activeBtn={sp}
				></FilteringByCategory>
				<BooksBySearching></BooksBySearching>
			</div>

			{books.length === 0 ? (
				<div className="py-10 text-center">
					<p className="text-2xl">No Books Found</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-3 md:px-0">
					{books.map((book) => (
						<BookCard key={book.id} book={book}></BookCard>
					))}
				</div>
			)}
		</div>
	);
};

export default AllBooksPage;
