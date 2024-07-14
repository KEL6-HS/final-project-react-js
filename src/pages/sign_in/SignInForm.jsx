import { useState } from "react";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function SignInForm() {
    const [formData, setFormData] = useState({
        email: "",
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
        const response = await loginUser(formData);
        setLoading(false);
        if (response.token) {
            localStorage.setItem("token", response.token);
            navigate("/");
        } else {
            setError(response.error || "Login failed. Please check your email and password."); // Set error message if login fails
        }
    };

    return (
        <form id="signInForm" className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
            <div className="pt-4">
                <label htmlFor="email" className="text-base font-medium">
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
            <div className="pt-4">
                <label htmlFor="password" className="text-base font-medium">
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
            <div className="pt-4 text-end">
                <a className="pt-4 text-sm text-slate-500 hover:text-red-600" href="#">
                    Forgot password?
                </a>
            </div>
            <button
                type="submit"
                className="bg-[#0C1421] font-semibold text-white text-center p-2 mt-8 hover:scale-105 duration-300"
                disabled={loading}
            >
                {loading ? "Signing In..." : "Sign In"}
            </button>
        </form>
    );
}

export default SignInForm;