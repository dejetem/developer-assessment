
import './App.css';
import Home from './page/Home';
import Header from './component/Header'
import {CartProvider} from "./context/Cart";
import { Route, Routes } from "react-router-dom";
import Cart from './page/Cart';

function App() {
  return (
       <div className="App">
        <Header/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>

  );
}

export default App;
