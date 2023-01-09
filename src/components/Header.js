import React,{ useContext, useState } from 'react'
import classes from './Header.module.css'
import { Button } from 'react-bootstrap'
import { CartContext } from './Context'
import Poster from './Poster'
import Musicpage from './Music_page'
import Aboutpage from './Aboutpage'
import { Link } from 'react-router-dom'

const Header = (props) => {
   const GlobalContext= useContext(CartContext)

   const statelength= GlobalContext.state.length
   console.log(statelength)

  return (

<div>
  <div className={classes.divcontainer}>
    <div className={classes.divcontainer}>
        <div className={classes.container}>
            <Link to="/">Home</Link>
            <div>Store</div>
            <Link to="/about">Aboutpage</Link>
            
        </div>
        
    </div>
    <div>
        
    <Link to="/cart"><Button onClick={props.cartHandle} varient='sucess'>Cart{statelength}</Button></Link>
    
    </div>
  </div>
 
  </div>
  )
}

export default Header