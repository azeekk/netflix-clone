import React from 'react'

function Login() {
  return (
    <div>
            <div className='signin'>
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