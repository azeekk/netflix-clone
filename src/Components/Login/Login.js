import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { Firebase } from '../../Firebase/firebase';

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
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

            <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login