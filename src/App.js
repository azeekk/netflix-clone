import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import './App.css';
import Signin from './Components/Signin/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/netflix-clone' element={ <Home />}></Route>
        <Route path='/signin' element={ <Signin />}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
