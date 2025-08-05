import React from 'react';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/signup'
import Login from "./components/login"
import VerifyEmail from './components/verify'
import JobLists from './components/job-lists'
import Dashboard from './components/dashboard'
import Bookmarks from './components/bookmark'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Signup/>}/>
      <Route path = "/verify" element = {<VerifyEmail/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/joblists" element = {<JobLists/>}/>
      <Route path = "/dashboard/:id" element = {<Dashboard/>}/>
      <Route path = "/bookmarks" element = {<Bookmarks/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}
export default App
