import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Signin.css'
import { Firebase } from '../../Firebase/firebase'

function Signin() {
function handleSubmit(e) {
  e.preventDefault()
  Firebase.auth().createUserWithEmailAndPassword().then((userCredentials)=>{
    console.log(userCredentials);
  })
}
  return (
     <div className='signin'>
      <Navbar />
      <div className='container'>
        <form>
            <label>first-name</label>
            <input type="text" name='first-name' className='first' placeholder='firstname' />
            <label>second-name</label>
            <input type="text" name='second-name' className='second' placeholder='secondname'/>
            <label>email</label>
            <input type="email" name='email' className='email' placeholder='email' />
            <label>password</label>
            <input type="password" name='password' className='password' placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
    
  )
}

export default Signin