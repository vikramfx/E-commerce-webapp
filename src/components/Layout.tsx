import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Layout as AntLayout, Menu, Badge, Button, Drawer, Input, Avatar, Dropdown } from 'antd';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Menu as MenuIcon, User } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const { Header, Content, Footer } = AntLayout;

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useShop();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [isAuthenticated] = useState(false);

  const menuItems = [
    { key: '1', label: <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link> },
    { key: '2', label: <Link to="/products" className="text-gray-700 hover:text-gray-900">Shop</Link> },
    { key: '3', label: <Link to="/new-arrivals" className="text-gray-700 hover:text-gray-900">New Arrivals</Link> },
    { key: '4', label: <Link to="/sale" className="text-gray-700 hover:text-gray-900">Sale</Link> },
  ];

  const userMenuItems = [
    {
      key: '1',
      label: <Link to="/account" className="text-gray-700">My Account</Link>,
    },
    {
      key: '2',
      label: <Link to="/account/orders" className="text-gray-700">My Orders</Link>,
    },
    {
      key: '3',
      label: <Link to="/account/wishlist" className="text-gray-700">Wishlist</Link>,
    },
    {
      key: '4',
      label: <span className="text-gray-700">Sign Out</span>,
      onClick: () => {
        navigate('/login');
      },
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setEmail('');
    }
  };

  return (
    <AntLayout className="min-h-screen">
      <Header className="bg-gray-50 px-4 md:px-8 flex items-center justify-between fixed w-full z-50 shadow-sm h-20">
        <div className="flex items-center gap-4 md:w-1/4">
          <Button 
            type="text"
            icon={<MenuIcon className="h-6 w-6" />}
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          />
          <Link to="/" className="text-3xl font-bold tracking-tight text-gray-900">LUXE</Link>
        </div>

        <div className="hidden md:flex justify-center w-1/2">
          <Menu
            mode="horizontal"
            items={menuItems}
            className="border-0 text-base font-medium bg-transparent"
            style={{ 
              display: 'flex', 
              justifyContent: 'center',
              minWidth: '500px'
            }}
          />
        </div>

        <div className="flex items-center gap-6 md:w-1/4 justify-end">
          <Button 
            type="text" 
            icon={<Search className="h-5 w-5 text-gray-600 hover:text-gray-900 transition-colors" />} 
            className="hover:bg-gray-100"
          />
          <Link to="/cart" className="relative">
            <Badge 
              count={cart.reduce((total, item) => total + item.quantity, 0)} 
              size="small"
              className="hover:opacity-80 transition-opacity"
            >
              <ShoppingBag className="h-5 w-5 text-gray-600 hover:text-gray-900 transition-colors" />
            </Badge>
          </Link>
          {isAuthenticated ? (
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <Avatar 
                icon={<User />} 
                className="cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors"
              />
            </Dropdown>
          ) : (
            <Button 
              type="primary"
              className="bg-gray-900 hover:bg-gray-800 transition-colors"
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          )}
        </div>
      </Header>

      <Drawer
        title={<span className="text-xl font-bold text-gray-900">LUXE</span>}
        placement="left"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className="font-medium"
      >
        <Menu
          mode="vertical"
          items={[...menuItems, { key: '5', label: <Link to="/login" className="text-gray-700">Sign In</Link> }]}
          className="border-0 text-base bg-transparent"
        />
      </Drawer>

      <Content className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </Content>

      <Footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-6">About LUXE</h3>
              <p className="text-gray-400 leading-relaxed">Curated fashion for the modern individual.</p>
              <Link to="/about" className="text-gray-400 hover:text-white block mt-4 transition-colors">
                Learn More
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Customer Service</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                </li>
                <li>
                  <Link to="/shipping-returns" className="hover:text-white transition-colors">Shipping & Returns</Link>
                </li>
                <li>
                  <Link to="/size-guide" className="hover:text-white transition-colors">Size Guide</Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link to="/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link>
                </li>
                <li>
                  <Link to="/sale" className="hover:text-white transition-colors">Sale</Link>
                </li>
                <li>
                  <Link to="/gift-cards" className="hover:text-white transition-colors">Gift Cards</Link>
                </li>
                <li>
                  <Link to="/store-locator" className="hover:text-white transition-colors">Store Locator</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button type="primary" htmlType="submit" className="bg-white text-gray-900 hover:bg-gray-100">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 LUXE. All rights reserved.</p>
          </div>
        </div>
      </Footer>
    </AntLayout>
  );
};

export default Layout;