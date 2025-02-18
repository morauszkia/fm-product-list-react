import { getImageURL } from "../../util/image-util";
import addToCartImg from "../../assets/images/icon-add-to-cart.svg";

import classes from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <li>
      <div className={classes["img-container"]}>
        <picture className={classes.img}>
          <source
            media="(min-width: 600px) and (max-width: 799px)"
            srcSet={getImageURL("image-waffle-tablet.jpg")}
          />
          <source
            media="(min-width: 800px)"
            srcSet={getImageURL("image-waffle-desktop.jpg")}
          />
          <img
            src={getImageURL("image-waffle-mobile.jpg")}
            alt="Waffle with Berries"
          />
        </picture>
        <button className={classes["btn--add"]}>
          <img src={addToCartImg} alt="" />
          Add to Cart
        </button>
      </div>
      <div className={classes["card--text"]}>
        <p className={classes.category}>Waffle</p>
        <p className={classes.name}>Waffle with Berries</p>
        <p className={classes.price}>$6.50</p>
      </div>
    </li>
  );
}
