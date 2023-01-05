import React from 'react';
import classes from './Music.module.css'


const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
const Musicpage = () => {
  return (
    <div className={classes.heading}>
        <div>
            {productsArr.map((productss) =><div className={classes.products}> 
                <h2 className={classes.title}>{productss.title}</h2>
                <img src={productss.imageUrl} alt='music-album-ima'/>
                <h3> ${productss.price}</h3>
                 </div>)}
        </div>
    </div>
  )
}

export default Musicpage