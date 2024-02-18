import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Hamber from '../Components/Hamber'

function Home() {
  return (
    <div className='w-full'>
    <Navbar />
    <Hamber />
    <Hero />
   
    </div>
  )
}

export default Home