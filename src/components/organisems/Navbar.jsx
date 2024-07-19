import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();
	const navigate = useNavigate();
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		// Cek apakah token ada di localStorage
		const token = localStorage.getItem("token");
		if (token) {
			setIsAuthenticated(true);
		}
	}, []);

	const handleLogout = () => {
		// Hapus token dari localStorage
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		setIsAuthenticated(false);
		navigate("/sign_in");
	};

	const isActive = (path) => {
		if (Array.isArray(path)) {
			return path.find((p) => p === location.pathname) ? "active" : "";
		} else return location.pathname === path ? "active" : "";
	};

	return (
		<>
			<div className="offcanvas-menu-overlay"></div>
			<div className="offcanvas-menu-wrapper">
				<div className="offcanvas__option">
					<div className="offcanvas__links">
						{isAuthenticated ? (
							<a href="#" onClick={handleLogout}>
								Log Out
							</a>
						) : (
							<Link to="/sign_in">Sign In</Link>
						)}
						<a href="#">FAQs</a>
					</div>
					<div className="offcanvas__top__hover">
						<span>
							Usd <i className="arrow_carrot-down"></i>
						</span>
						<ul>
							<li>USD</li>
							<li>EUR</li>
							<li>USD</li>
						</ul>
					</div>
				</div>
				<div className="offcanvas__nav__option">
					<a href="#" className="search-switch">
						<img src="img/icon/search.png" />
					</a>
					<a href="#">
						<img src="img/icon/heart.png" />
					</a>
					<a href="#">
						<img src="img/icon/cart.png" /> <span>0</span>
					</a>
					<div className="price">$0.00</div>
				</div>
				<div id="mobile-menu-wrap"></div>
				<div className="offcanvas__text">
					<p>Free shipping, 30-day return or refund guarantee.</p>
				</div>
			</div>

			<header className="header">
				<div className="header__top">
					<div className="container md:mx-auto max-w-screen-lg">
						<div className="flex">
							<div className="lg:w-6/12 md:w-7/12">
								<div className="header__top__left">
									<p>Free shipping, 30-day return or refund guarantee.</p>
								</div>
							</div>
							<div className="lg:w-6/12 md:w-5/12">
								<div className="header__top__right">
									<div className="header__top__links">
										{isAuthenticated ? (
											<a href="#" onClick={handleLogout}>
												Log Out
											</a>
										) : (
											<Link to="/sign_in">Sign In</Link>
										)}
										<a href="#">FAQs</a>
									</div>
									<div className="header__top__hover">
										<span>
											Usd <i className="arrow_carrot-down"></i>
										</span>
										<ul>
											<li>USD</li>
											<li>EUR</li>
											<li>USD</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container px-3 md:mx-auto max-w-screen-lg">
					<div className="flex flex-wrap">
						<div className="sm:w-full lg:w-3/12 md:w-3/12">
							<div className="header__logo">
								<Link to="/">
									<img src="img/logo.png" />
								</Link>
							</div>
						</div>
						<div className="sm:w-full md:w-6/12 lg:w-6/12">
							<nav className="header__menu mobile-menu">
								<ul>
									<li className={isActive("/")}>
										<Link to="/">Home</Link>
									</li>
									<li className={isActive("/shop")}>
										<Link to="/shop">Shop</Link>
									</li>
									<li
										className={isActive([
											"/about",
											"/shop-details",
											"/shopping-cart",
											"/checkout",
										])}
									>
										<a href="#">Pages</a>
										<ul className="dropdown">
											<li>
												<Link to="/about">About Us</Link>
											</li>
											<li>
												<Link to="/shop-details">Shop Details</Link>
											</li>
											<li>
												<Link to="/shopping-cart">Shopping Cart</Link>
											</li>
											<li>
												<Link to="/order-history">Order History</Link>
											</li>
											<li>
												<Link to="/checkout">Check Out</Link>
											</li>
										</ul>
									</li>
									<li className={isActive("/blog")}>
										<Link to="/blog">Blog</Link>
									</li>
									<li className={isActive("/contact")}>
										<Link to="/contact">Contacts</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className="sm:w-full lg:w-3/12 md:w-3/12">
							<div className="header__nav__option">
								<a href="#" className="search-switch">
									<img src="img/icon/search.png" />
								</a>
								<a href="#">
									<img src="img/icon/heart.png" />
								</a>
								<a href="#">
									<img src="img/icon/cart.png" /> <span>0</span>
								</a>
								<div className="price">$0.00</div>
							</div>
						</div>
					</div>
					<div className="canvas__open">
						<i className="fa fa-bars"></i>
					</div>
				</div>
			</header>
		</>
	);
}
