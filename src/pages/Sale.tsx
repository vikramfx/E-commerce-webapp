import React from 'react';
import { Typography, Row, Col, Card, Tag, Button } from 'antd';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Sale = () => {
  const saleItems = [
    {
      id: 1,
      name: 'Summer Dress',
      originalPrice: 129.99,
      salePrice: 79.99,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      discount: 38,
    },
    {
      id: 2,
      name: 'Denim Jacket',
      originalPrice: 149.99,
      salePrice: 99.99,
      image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      discount: 33,
    },
    {
      id: 3,
      name: 'Classic White Shirt',
      originalPrice: 89.99,
      salePrice: 59.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      discount: 33,
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
          <Title level={1}>Sale</Title>
          <Text className="text-lg">Up to 60% off selected items</Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center bg-red-50">
            <Title level={2} className="text-red-500 mb-2">30%</Title>
            <Text className="block">Off All Dresses</Text>
          </Card>
          <Card className="text-center bg-blue-50">
            <Title level={2} className="text-blue-500 mb-2">40%</Title>
            <Text className="block">Off Jackets</Text>
          </Card>
          <Card className="text-center bg-green-50">
            <Title level={2} className="text-green-500 mb-2">50%</Title>
            <Text className="block">Off Accessories</Text>
          </Card>
        </div>

        <Row gutter={[24, 24]}>
          {saleItems.map((item) => (
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
                      <Tag color="red" className="absolute top-4 right-4">
                        {item.discount}% OFF
                      </Tag>
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
                      <div className="flex items-center gap-2">
                        <Text delete className="text-gray-500">
                          ${item.originalPrice}
                        </Text>
                        <Text strong className="text-red-500">
                          ${item.salePrice}
                        </Text>
                      </div>
                    }
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="bg-gray-50 p-8 rounded-lg mt-12 text-center">
          <Title level={3} className="mb-4">Limited Time Offer</Title>
          <Text className="block mb-6">
            Extra 10% off when you spend $200 or more. Use code EXTRA10 at checkout.
          </Text>
          <Link to="/products">
            <Button type="primary" size="large">
              Shop All Sale
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Sale;