import React, { useContext } from 'react';
import classes from './Music.module.css'
import { productsArr } from './productsArr';
import {CartContext} from './Context'
import Cart from './Cart';

//const {state} = useContext(Cart);

const Musicpage = () => {
 // const {state} = useContext(Cart);
 // console.log(state)

 const GlobalContext = useContext(CartContext)
 console.log(GlobalContext)
 const dispatch = GlobalContext.dispatch
 //console.log(dispatch)
  return (
    <div className={classes.heading}>
        <div>
            {productsArr.map((productss) =><div key={productss.key} className={classes.products}> 
                <h2 className={classes.title}>{productss.title}</h2>
                <img src={productss.imageUrl} alt='music-album-ima'/>
                <h3> ${productss.price}</h3>
                <button onClick={()=> dispatch({type: 'ADD',payload: productss})}>Add to cart</button>
                 </div>)}
        </div>
    </div>
  )
}

export default Musicpage