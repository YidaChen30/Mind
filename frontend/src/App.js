
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Homepage} from './pages/Homepage';
import { Speedtiles } from './pages/Speedtiles';
import { Aimtrainer } from './pages/Aimtrainer';
import { AddPost } from './pages/AddPost';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='addpost' element={<AddPost/>}/>
        <Route path='Speedtiles' element={<Speedtiles/>}></Route>
        <Route path='Aimtrainer' element={<Aimtrainer/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
