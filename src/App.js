import React from 'react';
import TabOpt from './components/TabOpt';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Landing';

function App() {
  return (
    <>
      <h1 className="heading">Employee ID Log</h1>
        <Router>
          <Routes>
            <Route path="/" element={<TabOpt/>}/>
            <Route path="/Landing" element={<Landing/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
