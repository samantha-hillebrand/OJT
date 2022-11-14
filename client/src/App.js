import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import LandingPage from "./components/LandingPage/LandingPage";
import Register from './components/Register/Register';
import Main from "./components/Main/Main";


function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LandingPage />
            }
          />
          <Route
            exact
            path="/register"
            element={<Register />}
          />
          <Route
            exact
            path="/main"
            element={<Main />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
