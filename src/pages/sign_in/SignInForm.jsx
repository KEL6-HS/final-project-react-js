import { Link } from 'react-router-dom';

function SignInForm() {
    return (
        <form id="signInForm" className="flex flex-col pt-3 md:pt-8">
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
                    placeholder="At least 8 characters"
                    className="shadow border rounded w-full py-2 px-3 border-gray-300 text-gray-700 mt-1 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
                />
            </div>
            <div className="pt-4 text-end">
                <a
                    className="pt-4 text-sm text-slate-500 hover:text-red-600"
                    href="#"
                >
                    Forgot password?
                </a>
            </div>
            <Link
                className="bg-[#0C1421] font-semibold text-white text-center p-2 mt-8 hover:scale-105 duration-300 "
                to="/"
            >
                Sign In
            </Link>
        </form>
    );
}

export default SignInForm;