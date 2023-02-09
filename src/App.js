import React from 'react';
import Home from './Component/Home/Home';
import Signup from './Component/Signin/Signup';
import Signin from './Component/Signin/Signin'
import Tour from './Component/Tour/Tour';
import { Routes, Route } from "react-router-dom";
import Contact from './Component/Contact/Contact';


export default function App(){
  return(
      <Routes>
        <Route path='/'> 
          <Route index path='home' element={<Home />}/>
          <Route path='tour' element={<Tour />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='signin' element={<Signin />}/>

          <Route path='*' element={<Home />}/>
        </Route>
      </Routes>
  );
}