import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import LandingPage from "./components/LandingPage/LandingPage";
import Register from './components/Register/Register';
import Main from "./components/Main/Main";


function App() {

  const [userInfo, setUserInfo] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
    confirm: "",
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LandingPage userInfo={userInfo} setUserInfo={setUserInfo} />
            }
          />
          <Route
            exact
            path="/register"
            element={<Register userInfo={userInfo} setUserInfo={setUserInfo} />}
          />
          <Route
            exact
            path="/main"
            element={<Main userInfo={userInfo} setUserInfo={setUserInfo} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
