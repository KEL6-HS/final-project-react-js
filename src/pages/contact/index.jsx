import React from "react";
import RootLayouts from "../../layouts/RootLayouts";

export default function contact() {
	return (
		<RootLayouts>
			<section className="bg-white-50 min-h-screen flex items-center justify-center">
				<div className="bg-white-100 flex flex-col md:flex-row max-w-5xl items-center">
					<div className="md:w-1/2 p-5 w-25">
						<img className="rounded-2xl" src="img/contact/baju kontak.png" />
					</div>

					<div className="md:w-1/2 p-5 md:px-16">
						<h2 className="font-bold text-2xl text-[#0C1421]">Contact Us</h2>

						<p className="text-xs mt-4 text-[#313957]">
							As you might expect of a company that began as a high-end
							interiors contractor, we pay strict attention.
						</p>
						<br />
						<br />

						<form action="" className="flex flex-col gap-4">
							<input
								className="shadow appearance-none border rounded py-2 px-3 text-gray-700 resize-none"
								type="name"
								name="name"
								placeholder="Name"
							/>
							<input
								className="shadow appearance-none border rounded py-2 px-3 text-gray-700 resize-none"
								type="email"
								name="email"
								placeholder="Email"
							/>
							<textarea
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
								id="message"
								name="message"
								placeholder="Message"
							></textarea>

							<button className="bg-[#0C1421] rounded-xl text-white py-2 hover:scale-105 duration-300">
								SEND MESSAGE
							</button>
						</form>
					</div>
				</div>
			</section>
		</RootLayouts>
	);
}
