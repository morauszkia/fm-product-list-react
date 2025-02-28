import CartProvider from "@/context/CartProvider";
import ProductList from "@/components/Products/ProductList/ProductList";
import Cart from "@/components/Cart/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <ProductList />
      <Cart />
    </CartProvider>
  );
}

export default App;
