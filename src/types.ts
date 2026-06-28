// ALL INTERFACES AND TYPES USED IN THE APPLICATION

export enum Category {
  Electronics = 'Electronics',
  Clothing = 'Clothing',
  Books = 'Books',
  Sports = 'Sports',
}

// interface : product er blueprint

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  inStock: boolean;
  description?: string; // optional
}

// CreateProductInput — Utility Type

export type CreateProductInput = Omit<Product, 'id'>;

// update product input

export type UpdateProductInput = Partial<Omit<Product, 'id'>>;
