import React, { useEffect } from "react";
import Navbar from "../components/organisems/Navbar";
import Footer from "../components/organisems/Footer";
import mainFunc from "../assets/main";

export default function RootLayouts({ children }) {
	useEffect(() => {
		mainFunc(jQuery);
	});

	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
