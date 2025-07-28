import React from 'react';
import './index.css';
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import JobLists from './components/job-lists'
import Dashboard from "./components/dashboard"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<JobLists/>}/>
      <Route path = "/dashboard/:id" element = {<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
