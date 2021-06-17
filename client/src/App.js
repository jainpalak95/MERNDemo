import React from'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Login from './components/login.js';
import Signup from './components/signup.js';
import './App.css';

const App = () => {
return(
  <>
   <Navbar/>
   <Route exact path = "/">
    <Home/>
   </Route>
   
   <Route path = "/about">
    <About/>
   </Route>

   <Route path = "/contact">
    <Contact/>
   </Route>

   <Route path = "/login">
    <Login/>
   </Route>

   <Route path = "/signup">
    <Signup/>
   </Route>
  </>
)


}
export default App;
