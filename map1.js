const products = [
  { id: 1, name: "Laptop", price: 999.99, quantity: 10 },
  { id: 2, name: "Smartphone", price: 499.99, quantity: 5 },
  { id: 3, name: "Tablet", price: 299.99, quantity: 6 },
  { id: 4, name: "Monitor", price: 199.99, quantity: 8 },
  { id: 5, name: "Keyboard", price: 49.99, quantity: 15 },
  { id: 6, name: "Mouse", price: 29.99, quantity: 20 },
  { id: 7, name: "Printer", price: 149.99, quantity: 4 }
];

const productsName = product => product.name;
const productsTotal = product => (product.quantity + product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const test = () => "teste"; 

console.log(products.map(productsName));
console.log(products.map(productsTotal));
console.log(products.map(test));
