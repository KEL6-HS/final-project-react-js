import React, { useEffect, useState } from "react";
import RootLayouts from "../../layouts/RootLayouts";
import PageContent from "../../components/PageContent";
import { getOrderHistory } from "../../api/cart";

export default function orderhistory() {
	const [order, setOrder] = useState([]);

	useEffect(() => {
		getOrderHistory().then((res) => {
			setOrder(res.data);
		});
	}, []);

	return (
		<RootLayouts>
			<PageContent label="Order-History">
				<div className="container mx-auto px-4 py-8">
					<h1 className="text-3xl font-bold mb-8 pt-4">Order History</h1>
					<div className="bg-white shadow overflow-hidden sm:rounded-lg">
						{order.map((o) => (
							<div className="border-t border-gray-200">
								<div className="px-4 py-5 sm:px-6">
									<div className="flex items-center justify-between">
										<h2 className="text-lg leading-6 pt-4 font-medium text-gray-900">
											Order #{o.cart_id}
										</h2>
										<div
											className="p-3"
											style={{
												display: "inline-block",
												borderRadius: "8px",
												backgroundColor: o.is_payment == 1 ? "green" : "red",
												color: "white",
												fontWeight: "bold",
											}}
										>
											{o.is_payment == 1 ? "PAYED" : "NOT PAYED"}
										</div>
									</div>
									<p className="mt-4 max-w-2xl text-sm text-gray-500">
										Date: {o.created_at}
									</p>
									<p className="mt-1 max-w-2xl text-sm text-gray-500">
										Total: <b>${o.quantity * o.product_detail.price}</b>
									</p>
								</div>
								<div className="border-t border-gray-200">
									<div>
										<div className="px-4 py-5 bg-gray-50 text-sm font-medium text-gray-500">
											Items
										</div>
										<div className="px-4 py-5 bg-white text-sm text-gray-900">
											<ul className="list-disc pl-5">
												<li className="mb-4 flex items-center">
													<img
														src={o.product_detail.img}
														alt="Item 1"
														className="w-16 h-16 mr-4"
													/>
													<span>{o.product_detail.name}</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</PageContent>
		</RootLayouts>
	);
}
