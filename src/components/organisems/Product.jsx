import React, { useEffect, useState } from "react";
import { getProduct, getProductCategory } from "../../api/product";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../api/cart";

export default function Product({ showFilter = true }) {
	const navigate = useNavigate();

	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProductCategory().then((data) => {
			setCategories(data.data);
			getProduct().then((data) => {
				setProducts(data.data);

				setTimeout(() => {
					// Active the filter
					mixitup(document.querySelector(".product__filter"));
				}, 50);
			});
		});
	}, []);

	const onFilterClick = function (el) {
		$(".filter__controls li").removeClass("active");
		$(el.target).addClass("active");
	};

	const onAddCartClick = (productId) => {
		const token = localStorage.getItem("token");
		if (!token) {
			alert("Harap login terlebih dahulu");
			navigate("/sign_in");
		}

		addCart(productId).then((res) => {
			alert("Berhasil menambahkan ke cart");
		});
	};

	return (
		<>
			<section className="product spad">
				<div className="container mx-auto">
					{showFilter && (
						<div className="flex">
							<div className="lg:w-full">
								<ul className="filter__controls">
									<li
										className="active"
										onClick={onFilterClick}
										data-filter="*"
									>
										Best Sellers
									</li>
									{categories.map((cat, index) => (
										<li
											onClick={onFilterClick}
											key={index}
											data-filter={".cat-" + cat.id}
										>
											{cat.name}
										</li>
									))}
								</ul>
							</div>
						</div>
					)}
					<div className="flex flex-wrap product__filter">
						{products.map((product) => (
							<div
								key={product.id}
								className={
									"lg:w-3/12 md:w-6/12 lg:basis-3/12 md:basis-6/12 basis-full px-3 mix cat-" +
									product.categoryId
								}
							>
								<div className="product__item">
									<div
										className="product__item__pic set-bg"
										style={{
											backgroundImage: "url(" + product.img + ")",
										}}
									>
										<span className="label">New</span>
										<ul className="product__hover">
											<li>
												<a href="#">
													<img src="img/icon/heart.png" />
												</a>
											</li>
											<li>
												<a href="#">
													<img src="img/icon/compare.png" />{" "}
													<span>Compare</span>
												</a>
											</li>
											<li>
												<a href="#">
													<img src="img/icon/search.png" />
												</a>
											</li>
										</ul>
									</div>
									<div className="product__item__text">
										<h6>{product.name}</h6>
										<a
											href="#"
											onClick={(event) => onAddCartClick(product.id)}
											className="add-cart"
										>
											+ Add To Cart
										</a>
										<div className="rating">
											<i className="fa fa-star-o"></i>
											<i className="fa fa-star-o"></i>
											<i className="fa fa-star-o"></i>
											<i className="fa fa-star-o"></i>
											<i className="fa fa-star-o"></i>
										</div>
										<h5>${product.price}</h5>
										<div className="product__color__select">
											<label htmlFor="pc-1">
												<input type="radio" id="pc-1" />
											</label>
											<label className="active black" htmlFor="pc-2">
												<input type="radio" id="pc-2" />
											</label>
											<label className="grey" htmlFor="pc-3">
												<input type="radio" id="pc-3" />
											</label>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
