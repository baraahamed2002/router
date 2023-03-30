import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">
            <h1>Home</h1>
            </Link>
        
        <Link to="/Profile">
        <h1>Profile</h1>
        </Link>
        
        <Link to="/Contact">
        <h1>Contact</h1>
        </Link>
       
    </div>
  )
}
