import About from "./components/intro/about/About";
import Contact from "./components/intro/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/intro/productList/ProductList";
import Toggle from "./components/intro/toggle/Toggle";
import { ThemeContext } from "./Context";
import {useContext} from "react";

 
function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{backgroundColor:darkMode? "#222": "white",
    color: darkMode && "white",
    }}
    >
      <Toggle/>
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
    </div>
  );
}

export default App;
