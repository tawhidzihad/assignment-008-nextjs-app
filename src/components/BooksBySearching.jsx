"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const BooksBySearching = () => {
	const [searchInput, setSearchInput] = useState("");
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const handleSearch = () => {
		const params = new URLSearchParams(searchParams);

		if (searchInput) {
			params.set("search", searchInput);
		} else {
			params.delete("search");
		}

		router.push(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="flex">
			<label className="input">
				<svg
					className="h-[1em] opacity-50"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<g
						strokeLinejoin="round"
						strokeLinecap="round"
						strokeWidth="2.5"
						fill="none"
						stroke="currentColor"
					>
						<circle cx="11" cy="11" r="8"></circle>
						<path d="m21 21-4.3-4.3"></path>
					</g>
				</svg>
				<input
					type="text"
					value={searchInput}
					required
					placeholder="Search"
					onChange={(event) => setSearchInput(event.target.value)}
				/>
			</label>
			<button className="btn" onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default BooksBySearching;
