import { getAnnouncements } from "@/lib/DataFetchFunc/getData";
import Marquee from "react-fast-marquee";

const MarqueeSection = async () => {
	const data = await getAnnouncements();

	return (
		<div className="container mx-auto pb-5">
			<div className="flex px-3 md:px-0">
				<p className="bg-slate-700 px-3 py-1 text-white rounded-l-md">
					Updates
				</p>
				<Marquee pauseOnHover={true}>
					<ul className="flex justify-center items-center py-1">
						{data.map((item) => (
							<li
								key={item.id}
								className="px-5 border-r text-indigo-500 border-black"
							>
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
