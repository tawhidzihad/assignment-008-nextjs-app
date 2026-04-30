import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
	const announcements = [
		{
			id: 1,
			text: "New Arrival: The Silent Patient by Alex Michaelides",
		},
		{
			id: 2,
			text: "New Arrival: Atomic Habits by James Clear",
		},
		{
			id: 3,
			text: "Special Discount on Memberships — Get 30% Off!",
		},
		{
			id: 4,
			text: "Trending Now: Rich Dad Poor Dad by Robert Kiyosaki",
		},
		{
			id: 5,
			text: "Editor's Pick: The Alchemist by Paulo Coelho",
		},
		{
			id: 6,
			text: "Limited Time Offer: Borrow 2 Books, Get 1 Free",
		},
		{
			id: 7,
			text: "New Arrival: Deep Work by Cal Newport",
		},
		{
			id: 8,
			text: "Popular Choice: Ikigai by Hector Garcia & Francesc Miralles",
		},
	];

	return (
		<div className="container mx-auto pb-5">
			<div className="flex px-3 md:px-0">
				<p className="bg-slate-700 px-3 py-1 text-white rounded-l-md">
					Updates
				</p>
				<Marquee pauseOnHover={true}>
					<ul className="flex justify-center items-center py-1">
						{announcements.map((item) => (
							<li key={item.id} className="px-5 border-r text-red-500 border-black">
								{item.text}
							</li>
						))}
					</ul>
				</Marquee>
			</div>
		</div>
	);
};

export default MarqueeSection;
