import CakeImg from "../../assets/images/illustration-empty-cart.svg";

export default function Cart() {
  return (
    <section>
      <h2>Your Cart (0)</h2>
      <img src={CakeImg} alt="Cake" />
      <p>Your added items will appear here</p>
    </section>
  );
}
