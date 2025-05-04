"use server";

import { revalidateTag } from "next/cache";

const API_URL = process.env.API_URL || "http://localhost:3001";

export default async function createProduct(formData: FormData) {
	await fetch(`${API_URL}/products`, {
		method: "POST",
		body: JSON.stringify(Object.fromEntries(formData)),
		// body: JSON.stringify({
		// 	name: formData.get("name"),
		// 	price: formData.get("price"),
		// }),
		headers: {
			"Content-Type": "application/json",
		},
	});
	revalidateTag("products");
}
