export const useAuthStore = () => ({
	state: {
		user: JSON.parse(localStorage.getItem("user")),
	},
});
