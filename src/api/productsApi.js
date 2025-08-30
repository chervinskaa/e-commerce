
// отримати всі товари
export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

// отримати товари по категорії
export async function getProductsByCategory(category) {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  return res.json();
}

// отримати один товар
export async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}
