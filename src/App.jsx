import React from 'react';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/signup'
import Login from "./components/login"
import VerifyEmail from './components/verify'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<VerifyEmail/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
