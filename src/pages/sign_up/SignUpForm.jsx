import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <form id="signUpForm" className="flex flex-col flex-wrap">
      <div className="pt-2">
        <label htmlFor="firstName" className="text-sm xl: font-medium">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="John"
          className="shadow border rounded w-full py-1 px-3 border-gray-300 text-gray-700 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
        />
      </div>

      <div className="pt-2">
        <label htmlFor="lastName" className="text-sm xl: font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Cena"
          className="shadow border rounded w-full py-1 px-3 border-gray-300 text-gray-700 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
        />
      </div>

      <div className="pt-2">
        <label htmlFor="email" className="text-sm xl: font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          className="shadow border rounded w-full py-1 px-3 border-gray-300 text-gray-700 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
        />
      </div>

      <div className="pt-2">
        <label htmlFor="streetAddress" className="text-sm xl: font-medium">
          Street Address
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          placeholder="123 Main St"
          className="shadow border rounded w-full py-1 px-3 border-gray-300 text-gray-700 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
        />
      </div>

      <div className="pt-2 flex flex-row gap-2">
        <div className="flex flex-col w-1/2">
          <label htmlFor="city" className="text-sm xl: font-medium">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="New York"
            className="shadow border rounded w-full py-1 px-3 border-gray-300 text-gray-700 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="state" className="text-sm xl: font-medium">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="NY"
            className="shadow border rounded w-full py-1 px-3 border-gray-300 text-gray-700 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
          />
        </div>
      </div>

      <div className="pt-2">
        <div className="flex flex-row gap-2">
          <label htmlFor="postalCode" className="text-sm xl:text-base font-medium w-1/2">
            Postal Code
          </label>
          <label htmlFor="country" className="text-sm xl:text-base font-medium w-1/2">
            Country
          </label>
        </div>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="10001"
            className="shadow border rounded w-full py-1 px-3 border-gray-300 text-gray-700 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
          />

          <input
            type="text"
            id="country"
            name="country"
            placeholder="USA"
            className="shadow border rounded w-full py-1 px-3 border-gray-300 text-gray-700 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
          />
        </div>
      </div>

      <div className="pt-2">
        <label htmlFor="password" className="text-sm xl: font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="At least 8 characters"
          className="shadow border rounded w-full py-1 px-3 border-gray-300 text-gray-700 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black-500 dark:focus:border-black-500"
        />
      </div>

      <Link
        className="bg-[#0C1421] font-semibold text-white text-center p-2 mt-8 hover:scale-105 duration-300 "
        to="/"
      >
        Sign Up
      </Link>
    </form>
  );
}

export default SignUpForm;
