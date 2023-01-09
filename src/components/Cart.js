import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from './Context'

const Cart = ({setIscart,isCart}) => {
  const GlobalContext = useContext(CartContext)
  const cartElements = GlobalContext.state
  console.log(cartElements)
    
        const removeHandel =(props)=>{
       
         let re =   document.getElementById('list')
         let ren =   document.getElementById(props);
         console.log(ren)
          re.removeChild(ren)
        }
        console.log(isCart)
  return (
    <div>
        <div style={{display: 'flex' , justifyContent: 'space-evenly'}}>
        <div>Title</div>
        <div>price</div>
        
        <div>quantity</div>
        <button onClick={()=> setIscart(!isCart)}>X</button>
        </div>
        <ul id='list'>
            {cartElements.map((Element) => <li id={Element.key} style={{display: 'flex' , justifyContent: 'space-evenly'}}><div>{Element.title}</div> <div>{Element.price}</div><div>{Element.quantity}</div> <Button  onClick= {()=> removeHandel(Element.key)}>Remove</Button></li>)}
        </ul>
    </div>
  )
}

export default Cart