import { useAuthStore } from "../stores/auth.store";

export async function addCart(productId) {
	const auth = useAuthStore();

	const response = await fetch("http://localhost:3000/cart", {
		method: "POST",
		body: JSON.stringify({
			user_id: auth.state.user.id,
			product_id: productId,
			quantity: 1,
		}),
		headers: {
			"Content-Type": "application/json",
			Authorization: localStorage.getItem("token"),
		},
	});

	return response.json();
}

export async function getCart() {
	const auth = useAuthStore();

	const response = await fetch(
		"http://localhost:3000/cart/" + auth.state.user.id,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("token"),
			},
		}
	);

	return response.json();
}

export async function getOrderHistory() {
	const auth = useAuthStore();

	const response = await fetch("http://localhost:3000/order/history", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: localStorage.getItem("token"),
		},
	});

	return response.json();
}
