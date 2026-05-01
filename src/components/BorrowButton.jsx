"use client";

import { toast } from "react-toastify";

const BorrowButton = ({ title }) => {
	const notify = () => {
		toast.success(`${title} Borrowing Success`);
	};

	return (
		<>
			<button
				className="btn btn-wide rounded-full"
				onClick={notify}
			>
				Borrow This Book
			</button>
		</>
	);
};

export default BorrowButton;
