import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import Product from "./pages/Product"

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Products" element={<Product/>}/>
    <Route path="/*" element={<PageNotFound/>}/>
  </Routes>
    
  </>
  );
}

export default App;
