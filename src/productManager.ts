// productmanager class and CRUD operations for products
// business logic

import { Storage } from './storage';
import {
  Category,
  CreateProductInput,
  Product,
  UpdateProductInput,
} from './types';

export class ProductManager {
  private storage = new Storage<Product>();

  addProduct(input: CreateProductInput): Product {
    const product: Product = {
      id: `prod-{${Math.random().toString(36).slice(2, 8)}}`,
      ...input,
    };

    this.storage.add(product);

    return product;
  }

  getAllProducts(): Product[] {
    return this.storage.getAll();
  }

  getbyCategory(category: Category): Product[] {
    return this.storage.getAll().filter((p) => p.category === category);
  }

  updateProduct(id: string, data: UpdateProductInput): boolean {
    return this.storage.update(id, data);
  }

  deleteProduct(id: string): boolean {
    return this.storage.delete(id);
  }

  getInstock(): Product[] {
    return this.storage.getAll().filter((p) => p.inStock);
  }
}
