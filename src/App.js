import React, { useContext } from "react";
//import Header from "./components/Header";
import Musicpage from "./components/Music_page";
import Cart from "./components/Cart";
//import Poster from "./components/Poster";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aboutpage from "./components/Aboutpage";
import ProductDetail from "./components/ProductDetail";
import AuthForm from "./components/Aurth/AuthForm";
import UserProfile from "./components/Profile/UserProfile";
import AuthContext from "./components/store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Musicpage />} />
        <Route path="/product-details/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/profile" element={isLoggedIn && <UserProfile />} />
      </Routes>
    </div>
  );
};

export default App;
