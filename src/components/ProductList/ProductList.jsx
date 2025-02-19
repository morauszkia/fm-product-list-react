import ProductCard from "../ProductCard/ProductCard";

import classes from "./ProductList.module.css";

export default function ProductList() {
  return (
    <main>
      <h1 className={classes.title}>Desserts</h1>
      <ul className={classes.grid}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </main>
  );
}
