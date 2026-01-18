import React from 'react';

import './App.css';

import Home from './components/Home.jsx';
import Gallery from './components/Gallery.jsx';
import Projects from './components/Projects.jsx';
import Journal from './components/Journal.jsx';

import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;