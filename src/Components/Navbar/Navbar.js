import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
      <Link to={'/netflix-clone'}><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix_logo"></img></Link>
      </div>
      <div className='right'></div>
     <Link to={'/signin'} style={{textDecoration:'none'}}><div className='signup'>Signup</div></Link>
     <Link to={'/login'} style={{textDecoration:'none'}}><div className='login'>Login</div></Link>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"></img>
    </div>
  )
}

export default Navbar
