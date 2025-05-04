import AddProduct from "./components/AddProduct";
import Products from "./components/Product";

export const dynamic = "force-dynamic";

export default function CreateProduct() {
	return (
		<div>
			<h1>Product List</h1>
			<Products />
			<h2>Add Product</h2>
			<AddProduct />
		</div>
	);
}