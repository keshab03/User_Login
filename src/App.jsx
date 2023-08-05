// import React, { useState, useEffect } from "react"
import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from "./Components/SignUp/Signup"
import Signin from "./Components/SignIn/Signin"
import './Components/app.css'
import Home from "./Components/Home/Home"
const App = () => {

  return (
    <div id="full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
