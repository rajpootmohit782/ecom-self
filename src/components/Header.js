import React,{ useContext, useState } from 'react'
import classes from './Header.module.css'
import { Button } from 'react-bootstrap'
import { CartContext } from './Context'

const Header = (props) => {
   const GlobalContext= useContext(CartContext)

   const statelength= GlobalContext.state.length
   console.log(statelength)

  return (

   
  <div className={classes.divcontainer}>
    <div className={classes.divcontainer}>
        <div className={classes.container}>
            <div>Home</div>
            <div>Store</div>
            <div>About</div>
        </div>
        
    </div>
    <div>
        
    <Button onClick={props.cartHandle} varient='sucess'>Cart{statelength}</Button>
    </div>
  </div>
    
  )
}

export default Header