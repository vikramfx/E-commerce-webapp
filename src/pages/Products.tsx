import React, { useState, useMemo } from 'react';
import { Row, Col, Select, Input, Typography, Empty, message } from 'antd';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const { Title } = Typography;
const { Search } = Input;

const Products = () => {
  const { addToCart } = useShop();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category || '');
        const matchesSize = selectedSizes.length === 0 || product.sizes?.some(size => selectedSizes.includes(size));
        
        return matchesSearch && matchesPrice && matchesCategory && matchesSize;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          default:
            return 0;
        }
      });
  }, [searchQuery, sortBy, priceRange, selectedCategories, selectedSizes]);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product, 1);
    message.success({
      content: 'Added to cart',
      className: 'bg-gray-900 text-white',
      style: {
        marginTop: '5vh',
      },
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-center mb-12 bg-white p-8 rounded-lg shadow-sm"
      >
        <Title level={2} className="mb-0 text-gray-900 font-light tracking-tight">
          Discover Our Collection
        </Title>
        <div className="flex gap-4 w-full md:w-auto mt-4 md:mt-0">
          <Search
            placeholder="Search products..."
            onSearch={setSearchQuery}
            className="max-w-xs"
            size="large"
          />
          <Select
            defaultValue="newest"
            onChange={setSortBy}
            options={[
              { value: 'newest', label: 'Newest' },
              { value: 'price-asc', label: 'Price: Low to High' },
              { value: 'price-desc', label: 'Price: High to Low' },
            ]}
            className="w-40"
            size="large"
          />
        </div>
      </motion.div>

      <Row gutter={24}>
        <Col xs={24} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <FilterSidebar
                onPriceChange={setPriceRange}
                onCategoryChange={(values) => setSelectedCategories(values as string[])}
                onSizeChange={(values) => setSelectedSizes(values as string[])}
              />
            </div>
          </motion.div>
        </Col>
        <Col xs={24} md={18}>
          {filteredProducts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Row gutter={[24, 24]}>
                {filteredProducts.map((product) => (
                  <Col xs={24} sm={12} lg={8} key={product.id}>
                    <motion.div variants={itemVariants}>
                      <ProductCard
                        {...product}
                        onAddToCart={() => handleAddToCart(product)}
                      />
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-12 rounded-lg shadow-sm"
            >
              <Empty
                description={
                  <span className="text-gray-500 text-lg">
                    No products found matching your criteria
                  </span>
                }
                className="mt-8"
              />
            </motion.div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Products;