export async function getProduct() {
	const response = await fetch("http://localhost:3000/product/get", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	return response.json();
}

export async function getProductCategory() {
	const response = await fetch("http://localhost:3000/product-category/get", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	return response.json();
}
