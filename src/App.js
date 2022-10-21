import React from "react";
import Navbar from "./components/navbar";
import Mid from "./components/mid"
import Vest from "./components/vestibulinho";
import Sobre from "./components/sobre"
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Navbar/>
      <Mid/>
      <Vest/>
      <Sobre/>
    </div>
    </ThemeProvider>
  );
}

export default App;
