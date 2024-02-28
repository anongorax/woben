import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState("");
  return (
    <div className={`${darkMode}`}>
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
