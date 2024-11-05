import React from 'react';
import { Table, Button, InputNumber, Typography, Empty } from 'antd';
import { motion } from 'framer-motion';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const { Title, Text } = Typography;

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useShop();

  const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <div className="flex items-center gap-4">
          <img
            src={record.image}
            alt={text}
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <Text strong>{text}</Text>
            {record.size && <Text className="block text-gray-500">Size: {record.size}</Text>}
          </div>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity: number, record: any) => (
        <InputNumber
          min={1}
          max={10}
          value={quantity}
          onChange={(value) => updateQuantity(record.id, value || 1)}
        />
      ),
    },
    {
      title: 'Total',
      key: 'total',
      render: (record: any) => `$${(record.price * record.quantity).toFixed(2)}`,
    },
    {
      key: 'action',
      render: (record: any) => (
        <Button
          type="text"
          danger
          icon={<Trash2 className="h-5 w-5" />}
          onClick={() => removeFromCart(record.id)}
        />
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title level={2} className="mb-8">Shopping Cart</Title>

      {cart.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Table
            columns={columns}
            dataSource={cart}
            pagination={false}
            rowKey="id"
          />

          <div className="flex justify-end mt-8">
            <div className="w-full max-w-md">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between mb-4">
                  <Text>Subtotal:</Text>
                  <Text strong>${getCartTotal().toFixed(2)}</Text>
                </div>
                <div className="flex justify-between mb-4">
                  <Text>Shipping:</Text>
                  <Text strong>FREE</Text>
                </div>
                <div className="flex justify-between mb-6">
                  <Text strong>Total:</Text>
                  <Title level={4}>${getCartTotal().toFixed(2)}</Title>
                </div>
                <Link to="/checkout">
                  <Button
                    type="primary"
                    size="large"
                    block
                    className="flex items-center justify-center"
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <Empty
          description="Your cart is empty"
          className="my-16"
        >
          <Link to="/products">
            <Button type="primary">Continue Shopping</Button>
          </Link>
        </Empty>
      )}
    </div>
  );
};

export default Cart;