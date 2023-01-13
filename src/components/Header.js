import React, { useContext, useState } from "react";
import classes from "./Header.module.css";
import { Button } from "react-bootstrap";
import { CartContext } from "./Context";
import Poster from "./Poster";
import Musicpage from "./Music_page";
import Aboutpage from "./Aboutpage";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const GlobalContext = useContext(CartContext);

  const statelength = GlobalContext.state.length;
  console.log(statelength);
  const Cart = <Button varient="sucess">Cart{statelength}</Button>;
  return (
    <div>
      <div className={classes.divcontainer}>
        <div className={classes.divcontainer}>
          <div className={classes.container}>
            <NavLink style={{ textDecoration: "None", color: "white" }} to="/">
              Home
            </NavLink>
            <NavLink
              style={{ textDecoration: "None", color: "white" }}
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              style={{ textDecoration: "None", color: "white" }}
              to="/about"
            >
              Aboutpage
            </NavLink>
          </div>
        </div>
        <div>
          <NavLink
            style={{ textDecoration: "None", color: "white" }}
            to="/cart"
          >
            {Cart}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
