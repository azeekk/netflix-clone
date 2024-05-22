import React,{useContext} from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import { AuthContext } from '../../store/Context'
import { Firebase } from '../../Firebase/firebase'

function Navbar() {
const {user} = useContext(AuthContext)
console.log(user)

const logOut = () => {
  Firebase.auth().signOut()
}

  return (
    <div className='navbar'>
      <div className='left'>
      <Link to={'/netflix-clone'}><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix_logo"></img></Link>
      </div>
      <div className='right'>
        {user ? (
          <>
     <Link to={'/signin'} style={{textDecoration:'none'}}><span className='signup'>{user.displayName}</span></Link>
     <Link to={'/netflix-clone'} style={{textDecoration:'none'}}><span className='login_login'onClick={logOut} >{user && 'Logout'}</span></Link>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"></img>
      </> ) : (
        <>
        <Link to={'/signin'} style={{textDecoration:'none'}}><span className='signup'>Signup</span></Link>
     <Link to={'/login'} style={{textDecoration:'none'}}><span className='login_login'>Login</span></Link>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"></img>
        </>
      )}
      </div>
  
    </div>
  )
}

export default Navbar
