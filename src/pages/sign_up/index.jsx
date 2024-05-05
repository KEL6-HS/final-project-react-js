import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
	return (
		<div className="w-full flex flex-wrap">
			<div className="w-3/4">
				<img
					className="object-cover w-full h-screen hidden md:block"
					src="img/coba.jpg"
				/>
			</div>

			<div className="w-full md:w-1/4 flex flex-col">
				<div className="flex justify-center pt-12">
					<a href="#" className="p-4">
						<img src="img/logo.png" />
					</a>
				</div>

				<div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-10 lg:px-14">
					<p className="text-center text-3xl font-semibold">Join Us</p>
					<form id="signOutForm" className="flex flex-col">
						<div className="pt-4">
							<label htmlFor="name" className="text-base font-medium">
								Name
							</label>
							<input
								type="text"
								id="name"
								placeholder="John Cena"
								className="shadow border rounded w-full py-2 px-3 border-gray-300 text-gray-700 mt-1 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
							/>
						</div>

						<div className="pt-4">
							<label htmlFor="email" className="text-base font-medium">
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="example@email.com"
								className="shadow border rounded w-full py-2 px-3 border-gray-300 text-gray-700 mt-1 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
							/>
						</div>

						<div className="pt-4">
							<label htmlFor="password" className="text-base font-medium">
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="At least 8 character"
								className="shadow border rounded w-full py-2 px-3 border-gray-300 text-gray-700 mt-1 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
							/>
						</div>

						<div className="pt-4">
							<label
								htmlFor="confirm-password"
								className="text-base font-medium"
							>
								Confirm Password
							</label>
							<input
								type="password"
								id="confirm-password"
								placeholder="Confirm your password"
								className="shadow border rounded w-full py-2 px-3 border-gray-300 text-gray-700 mt-1 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
							/>
						</div>

						<Link
							className="bg-[#0C1421] font-semibold text-white text-center p-2 mt-8 hover:scale-105 duration-300 "
							to="/"
						>
							Sign Up
						</Link>
					</form>
					<div className="text-center pt-8">
						<p>
							Already have an account?{" "}
							<Link className="underline font-semibold" to="/sign_in">
								Sign In
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
