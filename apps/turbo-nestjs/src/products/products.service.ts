import { Injectable } from '@nestjs/common';
import type { CreateProductRequest, Product } from '@repo/types';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    { id: '1', name: 'Product 1', price: 100 },
    { id: '2', name: 'Product 2', price: 200 },
  ];

  createProduct(createProductRequest: CreateProductRequest): Product {
    const product: Product = {
      ...createProductRequest,
      id: Math.random().toString(36).substring(2, 15),
    } as Product;

    console.log('Product created:', product);
    this.products.push(product);
    return product;
  }

  getProducts(): Product[] {
    return this.products;
  }
}
