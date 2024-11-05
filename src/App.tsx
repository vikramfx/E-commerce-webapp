import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ShopProvider } from './context/ShopContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import ShippingReturns from './pages/ShippingReturns';
import SizeGuide from './pages/SizeGuide';
import FAQ from './pages/FAQ';
import NewArrivals from './pages/NewArrivals';
import Sale from './pages/Sale';
import GiftCards from './pages/GiftCards';
import StoreLocator from './pages/StoreLocator';
import Login from './pages/Login';
import Account from './pages/Account';

const theme = {
  token: {
    colorPrimary: '#1a1a1a',
    borderRadius: 8,
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <ShopProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="shipping-returns" element={<ShippingReturns />} />
              <Route path="size-guide" element={<SizeGuide />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="new-arrivals" element={<NewArrivals />} />
              <Route path="sale" element={<Sale />} />
              <Route path="gift-cards" element={<GiftCards />} />
              <Route path="store-locator" element={<StoreLocator />} />
              <Route path="login" element={<Login />} />
              <Route path="account" element={<Account />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    </ConfigProvider>
  );
}

export default App;