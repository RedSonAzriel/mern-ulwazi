//Came with initial install but don't need to use. 
// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
//header component
import Header from "./components/Header"

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'


// In react router 6, nothing that doesnt contain the "<routes>" tag can go inside the routes subcategory (referring to line 24)

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}  />
          </Routes>  
        </div>
      </Router>
    </>
  )
}

export default App;
