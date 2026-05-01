const RequestBookSection = () => {
	return (
		<div className="bg-slate-200 py-10 animate__fadeIn animate__delay-0.5s animate__animated">
			<div className="container mx-auto flex justify-center items-center">
				<div className="hero-content flex-col">
					<div className="text-center space-y-3">
						<h1 className="text-2xl md:text-4xl font-bold">
							Request Your Next Read
						</h1>
						<p className="text-zinc-600 text-xs md:text-sm">
							We’ll do our best to make it available for you.
						</p>
					</div>

					<div className="card bg-base-100 w-full shrink-0">
						<div className="card-body">
							<fieldset className="fieldset">
								<label className="text-sm">Book Name</label>
								<input
									type="text"
									className="input w-full"
									placeholder="Book Name"
								/>

								<button className="btn rounded-full bg-slate-600 shadow-none text-white mt-4">
									Request Book
								</button>
							</fieldset>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestBookSection;
