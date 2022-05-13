import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Product from "./views/productos";

function App() {
  return (
    <div className = 'App'>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = { <Home />} />
          <Route path = "/product" element = { <Product/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
