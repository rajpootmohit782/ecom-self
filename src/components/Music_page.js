import React, { useContext } from "react";
import classes from "./Music.module.css";
import { productsArr } from "./productsArr";
import { CartContext } from "./Context";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";

//const {state} = useContext(Cart);

const Musicpage = () => {
  // const {state} = useContext(Cart);
  // console.log(state)

  const GlobalContext = useContext(CartContext);
  console.log(GlobalContext);
  const dispatch = GlobalContext.dispatch;
  //console.log(dispatch)
  const to = "./product-details/`";
  return (
    <div className={classes.heading}>
      {"Products"}

      <div>
        {productsArr.map((productss) => (
          <div>
            <NavLink style={{ textDecoration: "None" }} to={to + productss.id}>
              {
                <div key={productss.id} className={classes.products}>
                  <h2 className={classes.title}>{productss.title}</h2>
                  <img src={productss.imageUrl} alt="music-album-ima" />
                  <h3> ${productss.price}</h3>
                </div>
              }
            </NavLink>
            <div>
              <button
                onClick={() => dispatch({ type: "ADD", payload: productss })}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Musicpage;
