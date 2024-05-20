import React from 'react'
import Navbar from '../Navbar/Navbar'

function Login() {
  return (
    <div>
            <div className='signin'>
              <Navbar />
      <div className='container'>
        <form>
            <label>email</label>
            <input type="email" name='email' className='email' placeholder='email' />
            <label>password</label>
            <input type="password" name='password' className='password' placeholder='password' />
            <button>Login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login