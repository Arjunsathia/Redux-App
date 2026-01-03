// import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "./bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Landing from "./pages/Landing";
import Detail from "./pages/Detail";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/det/:id" element={<Detail />} />
          <Route path="/wish" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
