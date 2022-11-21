import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/main:_id" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
