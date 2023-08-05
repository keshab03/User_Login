// import React, { useState, useEffect } from "react"
import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from "./Components/SignUp/Signup"
import Signin from "./Components/SignIn/Signin"
// import axios from 'axios'
import './Components/app.css'
import Home from "./Components/Home/Home"
const App = () => {
  // const [content, setContent] = useState([])

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:4000/users')
  //     .then((res) => {
  //       console.log(res.data)
  //       setContent(res.data)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [])
  return (
    <div id="full">
         {/* <div id="icon">
          <i className="fa-solid fa-user">{content.length}</i>
          
        </div> */}
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