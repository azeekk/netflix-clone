import React from 'react'
import './Signin.css'

function Signin() {
  return (
     <div className='signin'>
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
            <button>Submit</button>
        </form>
      </div>
    </div>
    
  )
}

export default Signin