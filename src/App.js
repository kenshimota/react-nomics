import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className = 'App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = '/' element = { <Home />} />
          <Route path = "/product" element = { <Products /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
