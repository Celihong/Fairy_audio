import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Button from "./component/Button";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Button />
    </>
  );
}

export default App;
