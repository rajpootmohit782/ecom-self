import React,{useState} from 'react'
import Header from './components/Header'
import Musicpage from './components/Music_page'
import Cart from './components/Cart'
import Poster from './components/Poster'
import {Route, Router, Routes} from 'react-router-dom'
import Home from './components/Home'
import Aboutpage from './components/Aboutpage'

const App = () => {
  const [isCart, setIscart] = useState(false)
const cart = (props)=>{
  setIscart(true)
  console.log('clicked')
}
  return (
  <div>
    <Routes>
  <Route path='/cart' element={<Cart/>}/>
  </Routes>
    <Routes>
   
    
    <Route path='/' element={<Home cartHandle={cart}/>} /> 
    

<Route path='/about' element={<Aboutpage/>} /> 
  </Routes>
  </div>
 )
  
}

export default App
