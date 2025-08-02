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
      <Route path = "/" element = {<Signup/>}/>
      <Route path = "/verify" element = {<VerifyEmail/>}/>
      <Route path = "/login" element = {<Login/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}
export default App
