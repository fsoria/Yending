import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/"  element />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



