export const getAnnouncements = async () => {
	const res = await fetch(
		"https://booklend-json-server.onrender.com/announcements",
	);
	return res.json();
};
