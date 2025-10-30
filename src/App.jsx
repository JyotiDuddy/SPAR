import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login.jsx";
import Dashboard from "./dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;