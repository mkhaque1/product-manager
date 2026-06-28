// GENERIC STORAGE CLASS
// This class provides a generic storage mechanism for any type of data. It uses a Map to store the data in memory, and provides methods to add, get, update, and delete items from the storage.
// seperation of concerns
// encapsulation

class Storage<T extends { id: string }> {
  // empty array to hold items of product
  private items: T[] = [];

  // add logic to add item to storage
  add(item: T): void {
    this.items.push(item);
  }

  // get logic to retrieve item from storage by id
  getAll(): T[] {
    return [...this.items];
  }

  // get single product by ID
  getByID(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  // update product
  update(id: string, data: Partial<T>): boolean {
    const index = this.items.findIndex((i) => i.id === id);
    if (index === -1) return false;

    this.items[index] = { ...this.items[index], ...data } as T;

    return true;
  }

  // delete product

  delete(id: string): boolean {
    const before = this.items.length;

    this.items = this.items.filter((i) => i.id !== id);

    return this.items.length < before;
  }
}
