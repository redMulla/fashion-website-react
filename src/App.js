import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Clothing from './components/pages/Clothing';
import Accessories from './components/pages/Accessories';
import Perfumes from './components/pages/Perfumes';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/clothing' element={<Clothing/>} />
          <Route path='/accessories' element={<Accessories/>} />
          <Route path='/perfumes' element={<Perfumes/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
