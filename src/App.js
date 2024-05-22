import {React,useContext,useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import './App.css';
import Signin from './Components/Signin/Signin';
import Login from './Components/Login/Login';
import { AuthContext } from './store/Context';
import { Firebase } from './Firebase/firebase';

function App() {
  const {setUser} = useContext(AuthContext)

  useEffect(()=>{
    Firebase.auth().onAuthStateChanged((user) =>{
      setUser(user)
    })
  })

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/netflix-clone' element={ <Home />}></Route>
        <Route path='/signin' element={ <Signin />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
