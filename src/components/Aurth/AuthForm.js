import { useState, useRef, useContext } from "react";

import classes from "./AuthForm.module.css";
import AuthContext from "../store/auth-context";
import Header from "../Header";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const entiredEmail = emailInputRef.current.value;
    const enterdpass = passwordInputRef.current.value;
    console.log(entiredEmail, enterdpass);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1cHwbFf5M0-WkzZzuui1ilakaxz8Og2c";
      try {
        const login = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: entiredEmail,
            password: enterdpass,
            returnSecureToken: true
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        let data = await login.json();
        console.log("login--", data);
        authCtx.login(data.idToken);
      } catch (error) {
        console.log(error.json());
        alert(error.json());
      }
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1cHwbFf5M0-WkzZzuui1ilakaxz8Og2c";

      try {
        const signup = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: entiredEmail,
            password: enterdpass,
            returnSecureToken: true
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log("signup--", await signup.json());
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  };

  return (
    <>
      <Header />
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
