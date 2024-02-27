import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  const [darkMode, setDarkMode] = useState("");
  return (
    <div className={`${darkMode}`}>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
