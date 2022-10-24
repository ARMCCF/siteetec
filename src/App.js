import React from "react";
import Home from "./Home"
import Post from './components/post/post'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes> 
    <Route exact path="/" element={<Home />} />
    <Route exact path="/post" element={<Post/>} />
  </Routes>
  )
}

export default App;
