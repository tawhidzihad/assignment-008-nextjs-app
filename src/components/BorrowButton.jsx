"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { IoIosBookmarks } from "react-icons/io";
import { toast } from "react-toastify";

const BorrowButton = ({ title }) => {
	const { data } = authClient.useSession();
	const router = useRouter();

	const notify = () => {
		if (data) {
			toast.success(`${title} Borrowing Success`, {
				icon: <IoIosBookmarks className="text-xl text-green-500" />,
			});
		} else {
			router.push("/login");
		}
	};

	return (
		<>
			<button className="btn btn-wide rounded-full" onClick={notify}>
				Borrow This Book
			</button>
		</>
	);
};

export default BorrowButton;
