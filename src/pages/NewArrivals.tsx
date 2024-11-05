import React from 'react';
import { Typography, Row, Col, Card, Tag, Button } from 'antd';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const NewArrivals = () => {
  const newArrivals = [
    {
      id: 1,
      name: 'Premium Wool Coat',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      isNew: true,
      isBestSeller: true,
    },
    {
      id: 2,
      name: 'Silk Blouse',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      isNew: true,
    },
    {
      id: 3,
      name: 'Leather Crossbody Bag',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      isNew: true,
      isBestSeller: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <Title level={1}>New Arrivals</Title>
          <Text className="text-lg">Discover our latest collection</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center bg-gradient-to-r from-purple-50 to-pink-50">
            <Title level={2} className="text-purple-600 mb-2">Fresh</Title>
            <Text className="block">Just Landed</Text>
          </Card>
          <Card className="text-center bg-gradient-to-r from-blue-50 to-green-50">
            <Title level={2} className="text-blue-600 mb-2">Trending</Title>
            <Text className="block">Most Popular</Text>
          </Card>
          <Card className="text-center bg-gradient-to-r from-yellow-50 to-red-50">
            <Title level={2} className="text-yellow-600 mb-2">Limited</Title>
            <Text className="block">While Stocks Last</Text>
          </Card>
        </div>

        <Row gutter={[24, 24]}>
          {newArrivals.map((item) => (
            <Col xs={24} sm={12} md={8} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  hoverable
                  cover={
                    <div className="relative overflow-hidden h-[300px]">
                      <img
                        alt={item.name}
                        src={item.image}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 space-y-2">
                        <Tag color="purple">NEW</Tag>
                        {item.isBestSeller && (
                          <Tag color="gold" icon={<Star className="h-3 w-3" />}>
                            BEST SELLER
                          </Tag>
                        )}
                      </div>
                    </div>
                  }
                  actions={[
                    <Link to={`/products/${item.id}`} key="view">
                      <Button type="primary" icon={<ShoppingBag className="h-4 w-4" />}>
                        Shop Now
                      </Button>
                    </Link>
                  ]}
                >
                  <Card.Meta
                    title={item.name}
                    description={
                      <Text strong>${item.price}</Text>
                    }
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="bg-gray-50 p-8 rounded-lg mt-12 text-center">
          <Title level={3} className="mb-4">Be the First to Know</Title>
          <Text className="block mb-6">
            Subscribe to our newsletter and get early access to new arrivals, exclusive offers, and style updates.
          </Text>
          <Link to="/products">
            <Button type="primary" size="large">
              View All New Arrivals
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NewArrivals;