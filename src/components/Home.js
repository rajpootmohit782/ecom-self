import React from 'react'
import Header from './Header'
import Musicpage from './Music_page'
import Poster from './Poster'

const Home = ({cartHandle}) => {
    console.log(cartHandle)
  return (
    <div>
        <Header cartHandle={cartHandle}/>
        <Poster/>
        <Musicpage/>
        
    </div>
  )
}

export default Home