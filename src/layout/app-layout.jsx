import React from 'react'
import '../App.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const applayout = () => {
  return (
    <div className='bg-gray-950 text-white min-h-screen'>
      <div className='container px-6 py-4 mx-auto'>
        <Header/>
      </div>
      <main><Outlet/></main>
    </div>
  )
}

export default applayout