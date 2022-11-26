import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Navigate to="/login"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
