import { Product } from "@repo/types";

const API_URL = process.env.API_URL || "http://localhost:3001";

export default async function Products() {
  const response = await fetch(`${API_URL}/products`, {
    next: { tags: ['products'] },
    // cache: 'no-store',
  });
  const products: Product[] = await response.json();

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p> 
          </div>
        ))}
      </div>
    </div>
  )
}