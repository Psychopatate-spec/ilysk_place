import React from 'react';

import './App.css';

import Trash from './components/Trash.jsx';
import Computer from './components/Computer.jsx';
import Journal from './components/Journal.jsx';
import Cloud from './components/Cloud.jsx';

import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <h1>my room.</h1>
        <Link to="/trash">Trash</Link>
        <Link to="/computer">Computer</Link>
        <Link to="/cloud">Cloud</Link>
        
        <Routes>
          <Route path="/trash" element={<Trash />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;