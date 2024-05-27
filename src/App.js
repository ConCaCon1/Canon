import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
import Video from './Pages/Home/Video/Video';
import { Routes, Route } from 'react-router-dom'
import Sidebar from './Component/Sidebar/Sidebar';
import Feedback from './Component/Feed/Feedback';
import { useSelector } from 'react-redux';
function App() {
  const sidebar = useSelector((state)=>state.sidebar.isOpen);
  return (
    <div className="App">
      <Sidebar sidebar={sidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
