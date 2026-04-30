import Banner from "@/components/HomePageSection/Banner";
import FeaturedBooksSection from "@/components/HomePageSection/FeaturedBooksSection";
import MarqueeSection from "@/components/HomePageSection/MarqueeSection";

const HomePage = () => {
	return (
		<>
			<Banner></Banner>
			<MarqueeSection></MarqueeSection>
			<FeaturedBooksSection></FeaturedBooksSection>
		</>
	);
};

export default HomePage;
