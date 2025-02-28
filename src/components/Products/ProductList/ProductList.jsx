import ProductCard from "@/components/Products/ProductCard/ProductCard";

import classes from "./ProductList.module.css";

import dessertsData from "@/data/data.json";

function ProductList() {
  return (
    <main>
      <h1 className={classes.title}>Desserts</h1>
      <ul className={classes.grid}>
        {dessertsData.map((dessert) => (
          <ProductCard key={dessert.name} {...dessert} />
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
