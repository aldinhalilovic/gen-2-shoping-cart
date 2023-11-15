import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./page/HomePage";
import About from "./page/About";
import Contact from "./page/Contact";
import Cart from "./page/Cart";
import Profile from "./page/Profile";
import CartContextProvider from "./store/CartContext";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{ padding: "0 20%", minHeight: "66.5vh" }}>
          <CartContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </CartContextProvider>
        </div>
        <Toaster />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
