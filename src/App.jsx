import React from 'react'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Cards from './components/cards/cards'

const App = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Header/>
      <Cards/>
    </div>
  )
}

export default App