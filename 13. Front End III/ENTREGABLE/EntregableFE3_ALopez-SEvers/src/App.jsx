
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { ContextProvider } from "./Components/utils/global.context"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Home from "./Routes/Home"


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Footer/>
          <ContextProvider>
            <Contact/>
            <Detail/>
            <Favs/>
            <Home/>
          </ContextProvider>
      </div>
  );
}

export default App;
