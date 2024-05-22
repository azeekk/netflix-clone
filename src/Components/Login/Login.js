import React,{useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { Firebase } from '../../Firebase/firebase';
import { AuthContext } from '../../store/Context';

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)

  function handleLogin(e) {
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(() => {
      console.log(user);
      navigate('/netflix-clone')
    })
  }


  return (
    <div>
            <div className='signin'>
              <Navbar />
      <div className='container'>
        <form>

            <label>email</label>

            <input type="email"
             name='email'
             value={email}
             onChange={event => setEmail(event.target.value)}
             className='email'
             placeholder='email' />

            <label>password</label>

            <input type="password"
            name='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
            className='password'
            placeholder='password' />

            <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login