import React,{Fragment} from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
  <div>
    <div className={classes.divcontainer}>
        <div className={classes.container}>
            <div>Home</div>
            <div>Store</div>
            <div>About</div>
        </div>
        <div className={classes.cart}>Cart</div>
    </div>
    <div>
        <h1 className={classes.poster}>The Generics</h1>
    </div>
  </div>
  )
}

export default Header