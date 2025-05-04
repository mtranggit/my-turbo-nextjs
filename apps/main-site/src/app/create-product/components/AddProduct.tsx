import createProduct from "../actions/createProduct";

export default async function AddProduct() {
  return (
    <div>
      <form action={createProduct}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}