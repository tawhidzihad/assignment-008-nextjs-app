import { FaCheck } from "react-icons/fa";

const MemberShipSection = () => {
	return (
		<div className="bg-indigo-200">
			<div className="container mx-auto py-5">
				<div className="rounded-xl py-5 grid grid-cols-1 px-3 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-5">
					<div className="card bg-base-100 shadow-sm">
						<div className="card-body">
							<div className="flex justify-between">
								<h2 className="text-3xl font-bold">
									Starter Plan (Free)
								</h2>
								<span className="text-xl">Free</span>
							</div>

							<p>
								Perfect for casual readers who want to explore and
								borrow a limited number of books.
							</p>

							<p className="text-xl mt-4">Key Features</p>
							<ul className="flex-1 flex flex-col gap-2 text-xs">
								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Access to basic book collection
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Borrow up to 2 books per month
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Standard borrowing duration (7 days)
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Basic search & filter
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Access on all devices
								</li>
							</ul>

							<div className="mt-6">
								<button className="btn bg-zinc-100 btn-block rounded-full">
									Subscribe
								</button>
							</div>
						</div>
					</div>

					<div className="card bg-base-100 shadow-sm">
						<div className="card-body relative">
							<div className="flex justify-between">
								<h2 className="text-3xl font-bold">Standard Plan</h2>
								<span className="text-xl">$5 / month</span>
							</div>

							<span className="badge badge-xs bg-yellow-500 text-white absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
								Most Popular
							</span>

							<p>
								Ideal for regular readers who want more flexibility and
								a larger library access.
							</p>

							<p className="text-xl mt-4">Key Features</p>
							<ul className="flex-1 flex flex-col gap-2 text-xs">
								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Access to full book library
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Borrow up to 10 books per month
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Extended borrowing time (14 days)
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Priority access to new arrivals
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Email notifications & reminders
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									No ads experience
								</li>
							</ul>

							<div className="mt-6">
								<button className="btn bg-zinc-100 btn-block rounded-full">
									Subscribe
								</button>
							</div>
						</div>
					</div>

					<div className="card bg-base-100 shadow-sm col-span-1 md:col-span-2 lg:col-span-1">
						<div className="card-body">
							<div className="flex justify-between">
								<h2 className="text-3xl font-bold">Premium Plan</h2>
								<span className="text-xl">$10 / month</span>
							</div>
							<p>
								Best for book lovers who want unlimited access and
								premium features.
							</p>

							<p className="text-xl mt-4">Key Features</p>
							<ul className="flex-1 flex flex-col gap-2 text-xs">
								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Unlimited book borrowing
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Flexible borrowing duration (up to 30 days)
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Early access to new & exclusive books
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Personalized recommendations
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Save favorites & reading history
								</li>

								<li className="flex items-center gap-2">
									<FaCheck className="text-green-500" />
									Priority support
								</li>
							</ul>

							<div className="mt-6">
								<button className="btn bg-zinc-100 btn-block rounded-full">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MemberShipSection;
