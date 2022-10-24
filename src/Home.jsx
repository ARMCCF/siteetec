import Navbar from "./components/navbar";
import Mid from "./components/mid";
import Vest from "./components/vestibulinho";
import Sobre from "./components/sobre";
import { ThemeProvider } from "@material-tailwind/react";

const Home = () => {
    return(
        <ThemeProvider>
          <Navbar/>
          <Mid/>
          <Vest/>
          <Sobre/>
          </ThemeProvider>
    )
}

export default Home