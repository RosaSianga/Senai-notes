
import './App.css'
import Login from "./pages/login";
import Forgot from "./pages/forgot"
import Reset from "./pages/reset"

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
