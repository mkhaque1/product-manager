// Entry point for the application.

import { ProductManager } from './productManager';
import { Category } from './types';

const manager = new ProductManager();

const Product1 = manager.addProduct({
  name: 'MAcbook M5',
  price: 50000,
  category: Category.Electronics,
  inStock: true,
});

const Product2 = manager.addProduct({
  name: 'Football',
  price: 2000,
  category: Category.Sports,
  inStock: true,
});

const Product3 = manager.addProduct({
  name: 'Iphone 14',
  price: 40000,
  category: Category.Electronics,
  inStock: true,
});

const Product4 = manager.addProduct({
  name: 'Apple watch',
  price: 10000,
  category: Category.Electronics,
  inStock: true,
});

console.log('\n Products ');
console.table(manager.getAllProducts());

// filtering
console.log('\n Filter by Electronics ');
console.table(manager.getbyCategory(Category.Electronics));

// updating product

console.log('\n update products ');

manager.updateProduct(Product1.id, { price: 150000, inStock: true });
manager.updateProduct(Product4.id, {
  name: 'Apple watch SE',
  price: 150000,
  inStock: true,
});

console.table(manager.getAllProducts());

// deleting product

manager.deleteProduct(Product4.id);

console.log('\n after delete products ');

console.table(manager.getAllProducts());

// in stock products

console.log('\n in stock products ');
console.table(manager.getInstock());
