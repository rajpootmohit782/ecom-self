import React,{useState} from 'react'
import Header from './components/Header'
import Musicpage from './components/Music_page'
import Cart from './components/Cart'
import Poster from './components/Poster'

const App = () => {
  const [isCart, setIscart] = useState(false)
const cart = (props)=>{
  setIscart(true)
  console.log('clicked')
}
  return (
    <div>
   { isCart && <div> <Cart/></div>}
   { !isCart && <div>
      <Header cartHandle={cart}/>
      <Poster/>
      <Musicpage/>
    </div>
}
  </div>)
  
}

export default App
