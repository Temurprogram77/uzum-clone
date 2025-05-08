import React from 'react'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Cards from './components/cards/cards'
import Nav from './components/nav/nav'

const App = () => {
  return (
    <div className='bg-white'>
      <Nav/>
      <Navbar/>
      <Header/>
      <Cards/>
    </div>
  )
}

export default App