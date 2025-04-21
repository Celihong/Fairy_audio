import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Button from "./component/Button";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Button" element={<Button />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
