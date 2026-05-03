export const getAnnouncements = async () => {
	const res = await fetch(
		"https://booklend-json-server.onrender.com/announcements",
	);
	return res.json();
};

export const getCategories = async () => {
	const res = await fetch(
		"https://booklend-json-server.onrender.com/categories",
	);
	return res.json();
};

export const getAllBooks = async (category, search) => {
	const res = await fetch(`https://booklend-json-server.onrender.com/books`);
	let booksData = await res.json();

	if (category) {
		booksData = booksData.filter((book) => book.category === category);
	}

	if (search) {
		booksData = booksData.filter((book) =>
			book.title.toLowerCase().includes(search.toLowerCase()),
		);
	}

	return booksData;
};

export const getThisBook = async (id) => {
	const res = await fetch(
		`https://booklend-json-server.onrender.com/books/${id}`,
	);
	return res.json();
};
