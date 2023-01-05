import React from 'react'
import { Button } from 'react-bootstrap'

const Cart = (e) => {
    const cartElements = [

        {
        key: 1,
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
          key: 2,
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        key: 3,
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]

        const removeHandel =(props)=>{
       
         let re =   document.getElementById('list')
         let ren =   document.getElementById(props);
         console.log(ren)
          re.removeChild(ren)
        }
  return (
    <div>
        <div style={{display: 'flex' , justifyContent: 'space-evenly'}}>
        <div>Title</div>
        <div>price</div>
        
        <div>quantity</div>
        </div>
        <ul id='list'>
            {cartElements.map((Element) => <li id={Element.key} style={{display: 'flex' , justifyContent: 'space-evenly'}}><div>{Element.title}</div> <div>{Element.price}</div><div>{Element.quantity}</div> <Button  onClick= {()=> removeHandel(Element.key)}>Remove</Button></li>)}
        </ul>
    </div>
  )
}

export default Cart