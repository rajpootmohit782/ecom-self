import React,{} from 'react'
import classes from './Header.module.css'
import { Button } from 'react-bootstrap'

const Header = (props) => {
   

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
        
    <Button onClick={props.cartHandle} varient='sucess'>Cart</Button>
    </div>
  </div>
    
  )
}

export default Header