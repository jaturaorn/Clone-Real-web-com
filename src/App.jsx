// component
import Overview from "./pages/Overview";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import ACSLD from "./pages/ACSLD";
import INV from "./pages/INV";

// react-router
import { Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Overview /> } />
        <Route path="/ACSLD" element={ <ACSLD /> } />
        <Route path="/INV" element={ <INV /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
