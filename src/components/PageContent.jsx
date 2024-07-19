import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PageContent({ children, label }) {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<>
			<section className="breadcrumb-option">
				<div className="container mx-auto">
					<div className="flex">
						<div className="lg:w-full">
							<div className="breadcrumb__text">
								<h4>{label}</h4>
								<div className="breadcrumb__links">
									<a onClick={() => navigate("/")}>Home</a>
									<span>{label}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{children}
		</>
	);
}
