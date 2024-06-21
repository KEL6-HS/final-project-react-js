import { Link } from "react-router-dom";
import SignUpForm from './SignUpForm';

export default function SignUp() {
	return (
		<div className="w-full flex flex-wrap">
			<div className="w-3/4">
				<img
					className="object-fill w-full h-full hidden md:block"
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
					<SignUpForm />
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
