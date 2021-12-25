
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Homepage} from './pages/Homepage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
