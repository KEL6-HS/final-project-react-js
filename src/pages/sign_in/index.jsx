import { Link } from "react-router-dom";
import SignInForm from './SignInForm';

export default function SignIn() {
    return (
        <>
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/4 flex flex-col">
                    <div className="flex justify-center pt-12">
                        <a href="#" className="p-4">
                            <img src="img/logo.png" />
                        </a>
                    </div>
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-10 lg:px-14">
                        <p className="text-center text-3xl font-semibold pt-8">Welcome</p>
                        <SignInForm />
                        <div className="text-center pt-12 pb-12">
                            <p>
                                Don&apos;t have an account?{" "}
                                <Link className="underline font-semibold" to="/sign_up">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-3/4">
                    <img
                        className="object-cover w-full h-screen hidden md:block"
                        src="img/coba.jpg"
                    />
                </div>
            </div>
        </>
    );
}
