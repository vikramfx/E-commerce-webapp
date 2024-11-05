import React from 'react';
import { Button, Typography, Card, Badge } from 'antd';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Award, Truck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="overflow-hidden bg-stone-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-stone-900/40" />
        <motion.div 
          className="relative container mx-auto px-8 text-white"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-1 rounded-full bg-rose-500/20 text-rose-300 text-sm font-medium mb-6">NEW COLLECTION 2024</span>
            <Title level={1} className="text-white text-7xl font-bold mb-8 tracking-tight">
              Elevate Your Style<br />Define Your Signature
            </Title>
            <Text className="text-xl mb-12 block max-w-2xl text-stone-200 leading-relaxed">
              Discover our curated collection of premium fashion pieces designed for the modern individual.
              Embrace sophistication with our latest arrivals.
            </Text>
            <div className="flex gap-6">
              <Button type="primary" size="large" className="h-14 px-8 bg-rose-500 hover:bg-rose-600 border-none text-white font-medium rounded-lg">
                Shop Now <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Button>
              <Button size="large" ghost className="h-14 px-8 border-2 rounded-lg hover:bg-white hover:text-stone-900 transition-all duration-300">
                Watch Collection Video
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: <Star className="w-6 h-6" />, title: "Premium Quality", desc: "Crafted with excellence" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Latest Trends", desc: "Always in style" },
              { icon: <Truck className="w-6 h-6" />, title: "Fast Shipping", desc: "Worldwide delivery" },
              { icon: <RefreshCw className="w-6 h-6" />, title: "Easy Returns", desc: "30-day guarantee" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-rose-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <Title level={4} className="text-lg font-semibold mb-2">{feature.title}</Title>
                <Text className="text-stone-500">{feature.desc}</Text>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-24 bg-stone-50">
        <div className="container mx-auto px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <div className="relative h-[600px] group cursor-pointer overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Women's Collection"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent flex items-end p-12">
                  <div>
                    <Title level={2} className="text-white mb-6 text-4xl">Women's Collection</Title>
                    <Button type="primary" className="border-none h-12 px-6 rounded-lg bg-rose-500 hover:bg-rose-600 text-white transition-all duration-300">
                      Explore Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="relative h-[285px] group cursor-pointer overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Men's Collection"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent flex items-end p-12">
                  <div>
                    <Title level={3} className="text-white mb-6">Men's Collection</Title>
                    <Button type="primary" className="border-none h-12 px-6 rounded-lg bg-rose-500 hover:bg-rose-600 text-white transition-all duration-300">
                      Explore Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative h-[285px] group cursor-pointer overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Accessories"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent flex items-end p-12">
                  <div>
                    <Title level={3} className="text-white mb-6">Accessories</Title>
                    <Button type="primary" className="border-none h-12 px-6 rounded-lg bg-rose-500 hover:bg-rose-600 text-white transition-all duration-300">
                      Explore Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Title level={2} className="text-4xl font-bold mb-4">Featured Products</Title>
              <Text className="text-stone-500 text-lg">Handpicked by our fashion experts</Text>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Premium Wool Coat",
                price: "$299"
              },
              {
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Silk Blouse",
                price: "$149"
              },
              {
                image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Denim Jacket",
                price: "$199"
              },
              {
                image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Summer Dress",
                price: "$179"
              }
            ].map((product, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  hoverable
                  className="border-none shadow-md rounded-xl overflow-hidden group"
                  cover={
                    <div className="relative h-[400px] overflow-hidden">
                      <img
                        alt={product.title}
                        src={product.image}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  }
                >
                  <Card.Meta
                    title={<span className="text-lg font-semibold">{product.title}</span>}
                    description={
                      <div className="flex justify-between items-center mt-2">
                        <Text strong className="text-lg text-rose-500">{product.price}</Text>
                        <Button type="link" className="p-0 text-rose-500 hover:text-rose-600">
                          Shop Now <ArrowRight className="h-4 w-4 inline ml-1" />
                        </Button>
                      </div>
                    }
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <Title level={2} className="text-white text-4xl font-bold mb-6">Join Our Community</Title>
              <Text className="text-stone-400 text-lg mb-12 block leading-relaxed">
                Subscribe to receive updates, access to exclusive deals, and more.
                Get 10% off your first order when you sign up!
              </Text>
              <div className="flex gap-6 justify-center">
                <Button type="primary" size="large" className="min-w-[200px] h-14 bg-rose-500 hover:bg-rose-600 border-none rounded-lg">
                  Subscribe Now
                </Button>
                <Button ghost size="large" className="min-w-[200px] h-14 border-2 rounded-lg hover:bg-white hover:text-stone-900">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;