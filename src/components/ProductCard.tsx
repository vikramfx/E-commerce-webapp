import React from 'react';
import { Card, Typography, Button } from 'antd';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Text } = Typography;

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        hoverable
        cover={
          <Link to={`/products/${id}`}>
            <div className="overflow-hidden h-[300px]">
              <img
                alt={name}
                src={image}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </Link>
        }
        actions={[
          <Button 
            key="add-to-cart"
            type="primary"
            icon={<ShoppingBag className="h-4 w-4" />}
            onClick={onAddToCart}
            className="w-full"
          >
            Add to Cart
          </Button>
        ]}
      >
        <Meta
          title={name}
          description={
            <Text strong className="text-lg">
              ${price.toFixed(2)}
            </Text>
          }
        />
      </Card>
    </motion.div>
  );
};

export default ProductCard;