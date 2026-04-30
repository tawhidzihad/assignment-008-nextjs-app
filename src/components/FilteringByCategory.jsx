"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilteringByCategory = ({ categories, activeBtn }) => {
	const { category: activeCategory } = activeBtn;
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const handleCategory = (category) => {
		const params = new URLSearchParams(searchParams);

		if (category) {
			params.set("category", category);
		} else {
			params.delete("category");
		}

		router.push(`${pathname}?${params.toString()}`);
	};

	return (
		<>
			<div className="dropdown">
				<div tabIndex={0} role="button" className="btn m-1">
					Filter by {activeCategory || "Category"}
				</div>
				<ul
					tabIndex="-1"
					className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
				>
					{categories.map((category) => (
						<li
							key={category.id}
							onClick={() => handleCategory(category.category_name)}
						>
							<a
								className={`${category.category_name === activeCategory && "bg-blue-500 text-white"}`}
							>
								{category.category_name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default FilteringByCategory;
