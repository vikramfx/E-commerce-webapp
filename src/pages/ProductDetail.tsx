import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Typography, Button, Rate, InputNumber, Tabs, Image, message } from 'antd';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useShop();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      message.error('Please select a size');
      return;
    }
    addToCart(product, quantity, selectedSize);
    message.success('Added to cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Row gutter={48}>
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              className="rounded-lg"
            />
          </motion.div>
        </Col>
        
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title level={2}>{product.name}</Title>
            <div className="flex items-center gap-4 mb-4">
              <Rate disabled defaultValue={4.5} />
              <Text className="text-gray-500">(125 reviews)</Text>
            </div>
            <Title level={3} className="mb-6">${product.price}</Title>
            
            {product.sizes && (
              <div className="mb-6">
                <Text strong className="block mb-2">Size</Text>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      type={selectedSize === size ? 'primary' : 'default'}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <Text strong className="block mb-2">Quantity</Text>
              <InputNumber
                min={1}
                max={10}
                value={quantity}
                onChange={(value) => setQuantity(value || 1)}
              />
            </div>
            
            <div className="flex gap-4 mb-8">
              <Button
                type="primary"
                size="large"
                icon={<ShoppingBag className="h-5 w-5" />}
                className="flex-1"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                size="large"
                icon={<Heart className="h-5 w-5" />}
              />
            </div>
            
            <Tabs defaultActiveKey="1">
              <TabPane tab="Description" key="1">
                <Text>{product.description}</Text>
              </TabPane>
              <TabPane tab="Details" key="2">
                <ul className="list-disc pl-4">
                  <li className="mb-2">Premium quality materials</li>
                  <li className="mb-2">Regular fit</li>
                  <li className="mb-2">Machine washable</li>
                </ul>
              </TabPane>
              <TabPane tab="Reviews" key="3">
                <Text>Customer reviews coming soon...</Text>
              </TabPane>
            </Tabs>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;