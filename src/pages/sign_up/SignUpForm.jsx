import { useState } from "react";
import { registerUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    password: "",
  });
  const [error, setError] = useState(""); // Added state for error message
  const [loading, setLoading] = useState(false); // Added state for loading

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const response = await registerUser(formData);
    setLoading(false);
    if (response.message === "User registered successfully!") {
      localStorage.setItem("token", response.token); // Simpan token ke localStorage
      navigate("/");
    } else {
      setError(response.error || "Registration failed. Please try again."); // Set error message if registration fails
    }
  };

  return (
    <form id="signUpForm" className="flex flex-col flex-wrap" onSubmit={handleSubmit}>
      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
      <div className="pt-2">
        <label htmlFor="firstName" className="text-sm xl: font-medium">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="John"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
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
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
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
          value={formData.streetAddress}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
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
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
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
            value={formData.state}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
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
            value={formData.postalCode}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <input
            type="text"
            id="country"
            name="country"
            placeholder="USA"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
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
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-[#0C1421] font-semibold text-white text-center p-2 mt-8 hover:scale-105 duration-300"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}

export default SignUpForm;