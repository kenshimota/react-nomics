import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Product from "./views/productos";
import SearchAppBar from "./components/SearchAppBar";

function App() {
  return (
    <div className = 'App'>
      <BrowserRouter>
      <SearchAppBar/>
        <Routes>
          <Route path = '/' element = { <Home />} />
          <Route path = "/product" element = { <Product/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
