import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";

const Cart = (props) => {
  const GlobalContext = useContext(CartContext);
  const cartElements = GlobalContext.state;
  console.log(cartElements);
  console.log(props);
  const removeHandel = (props) => {
    let re = document.getElementById("list");
    let ren = document.getElementById(props.id);
    console.log(ren);
    //console.log(props);
    re.removeChild(ren);
  };
  //console.log(isCart);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>Title</div>
        <div>price</div>
        <div>quantity</div>
        <Link to="/">X</Link>
      </div>
      <ul id="list">
        {cartElements.map((Element) => (
          <li
            id={Element.id}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div>{Element.title}</div> <div>{Element.price}</div>
            <div>{Element.quantity}</div>{" "}
            <Button onClick={() => removeHandel(Element)}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
