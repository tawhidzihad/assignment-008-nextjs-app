import Banner from "@/components/HomePageSection/Banner";
import FeaturedBooksSection from "@/components/HomePageSection/FeaturedBooksSection";
import MarqueeSection from "@/components/HomePageSection/MarqueeSection";
import MemberShipSection from "@/components/HomePageSection/MemberShipSection";

const HomePage = () => {
	return (
		<>
			<Banner></Banner>
			<MarqueeSection></MarqueeSection>
			<FeaturedBooksSection></FeaturedBooksSection>
			<MemberShipSection></MemberShipSection>
		</>
	);
};

export default HomePage;
