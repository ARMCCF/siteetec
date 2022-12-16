import Navbar from "./components/navbar";
import Mid from "./components/mid";
import Vest from "./components/vestibulinho";
import Sobre from "./components/sobre";
import Secretaria from "./components/secretaria";
import { ThemeProvider } from "@material-tailwind/react";
import setNav from "./components/navbar"
    

const Home = () => {
    return(
        <ThemeProvider onClick={setNav}>
          <Navbar/>
          <Mid />
          <Vest/>
          <Sobre/>
          <Secretaria/>
          </ThemeProvider>
    )
}

export default Home