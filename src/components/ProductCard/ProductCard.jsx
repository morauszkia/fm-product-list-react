import { getImageURL } from "../../util/image-util";

export default function ProductCard() {
  return (
    <li>
      <picture>
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
      <button>Add to Cart</button>
      <p>Waffle</p>
      <p>Waffle with Berries</p>
      <p>$6.50</p>
    </li>
  );
}
