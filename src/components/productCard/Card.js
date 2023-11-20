import React, { useContext } from "react";
import "./card.css";
import { useState } from "react";
import { CartContext } from "../../store/CartContext";

function Card({ product, addToCart }) {
  const { inCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  const max = 10;
  const increase = () => {
    if (quantity !== max) {
      setQuantity(quantity + 1);
    }
  };
  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="main-cont">
      <div className="first-cont">
        <img src={product.imageURL} alt={product.title} />
      </div>
      <div className="second-cont">
        <h4>{product.title}</h4>
        <h5 id="green-underline">Remove</h5>
      </div>
      <div className="third-cont">
        <h4>{Number(product.price)}$</h4>
        <div className="quantity">
          <p style={{ cursor: "pointer" }} onClick={decrease}>
            -
          </p>
          <p>{quantity}</p>
          <p style={{ cursor: "pointer" }} onClick={increase}>
            +
          </p>
        </div>
        <div style={{ width: "40px" }}>
          {product.discount && <h4>{product.discount}%</h4>}
        </div>
        <div
          className="quantity"
          onClick={addToCart}
          style={{
            width: "100px",
            cursor: "pointer",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          {inCart(product) ? <p>Added to cart!</p> : <p>Add to cart</p>}
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Card;
