import ProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  return (
    <main>
      <h1>Desserts</h1>
      <ul>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </main>
  );
}
