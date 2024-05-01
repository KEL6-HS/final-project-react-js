import React from 'react'
import Navbar from '../components/organisems/Navbar'
import Footer from '../components/organisems/Footer'

export default function RootLayouts({ children }) {
  return (
   <>
    <Navbar/>
    {children}
    <Footer/>
   </>
  )
}
