import Image from "next/image";
import NavbrLogo from "@/images/booklend-logo.png"

export default function Home() {
	return (
		<div>
			Mian Page
			<Image src={NavbrLogo} width={100} height={100} alt="NavbrLogo">

			</Image>
		</div>
	);
}
