import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import Gyms from "./pages/Gyms.tsx";
import Coaches from "./pages/Coaches.tsx";
import Schedule from "./pages/Schedule.tsx";
import Checkout from "./pages/Checkout.tsx";
import NoPage from "./pages/NoPage.tsx";
import { useEffect } from "react";
import CartProvider from "./components/CartContext.tsx";
import Cart from "./pages/Cart.tsx";
import Product from "./pages/Product.tsx";

function App() {
  useEffect(() => {
    document.title = "Iron Mecca";
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gyms" element={<Gyms />} />
            <Route path="coaches" element={<Coaches />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
