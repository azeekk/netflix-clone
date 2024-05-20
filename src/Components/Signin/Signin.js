import { useState } from 'react'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Signin.css'
import { Firebase } from '../../Firebase/firebase'

function Signin() {
const [firstName,setFirstName] = useState('');
const [secondName,setSecondName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('')

function handleSubmit(e) {
  e.preventDefault()
  Firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
  })
}
  return (
     <div className='signin'>
      <Navbar />
      <div className='container'>
        <form>
            <label>first-name</label>

            <input type="text"
              name='first-name'
              value={firstName}
              onChange={event =>setFirstName(event.target.value)}
              className='first'
              placeholder='firstname' />

            <label>second-name</label>

            <input type="text"
              name='second-name'
              value={secondName}
              onChange={event => setSecondName(event.target.value)}
              className='second'
              placeholder='secondname'/>

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

            <button onClick={handleSubmit}>Submit</button>

        </form>
      </div>
    </div>
    
  )
}

export default Signin