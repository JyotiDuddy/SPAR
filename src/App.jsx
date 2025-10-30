import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./login.jsx";
import Dashboard from "./dashboard.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123456") {
      setIsLoggedIn(true); // ✅ switch to dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    // <Routes>
    //   <Route path="/" element={<Login />} />
    //   <Route path="/dashboard" element={<Dashboard />} />
    // </Routes>
        <div>
      {isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </div>

  );
}

export default App;