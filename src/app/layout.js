import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import "animate.css";
import { Inter } from "next/font/google";
import { Slide, ToastContainer } from "react-toastify";
import "./globals.css";

const inter = Inter({
	variable: "--inter-font",
	subsets: ["latin"],
});

export const metadata = {
	title: "BookLend - Online Book Borrowing Platform",
	description:
		"Online book borrowing platform to explore thousands of books, filter by categories, and borrow instantly. Fast, secure, and user-friendly experience with BookLend.",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-theme="light"
			className={`${inter.className} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<ToastContainer
					position="top-center"
					autoClose={4000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					transition={Slide}
				/>
				<Navbar></Navbar>
				<main>{children}</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
