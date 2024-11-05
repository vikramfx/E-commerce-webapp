import React from 'react';
import { Form, Input, Button, Steps, Radio, Typography, Divider } from 'antd';
import { motion } from 'framer-motion';
import { CreditCard, Truck, Check } from 'lucide-react';

const { Title, Text } = Typography;

const Checkout = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title level={2} className="mb-8">Checkout</Title>

      <Steps
        current={1}
        items={[
          {
            title: 'Cart',
            icon: <ShoppingBag className="h-5 w-5" />,
          },
          {
            title: 'Checkout',
            icon: <CreditCard className="h-5 w-5" />,
          },
          {
            title: 'Confirmation',
            icon: <Check className="h-5 w-5" />,
          },
        ]}
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <Title level={4} className="mb-6">Shipping Information</Title>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: 'email' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Form.Item
                  name="city"
                  label="City"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="state"
                  label="State"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="zipCode"
                  label="ZIP Code"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <Title level={4} className="mb-6">Shipping Method</Title>
              <Form.Item name="shippingMethod" initialValue="standard">
                <Radio.Group className="w-full">
                  <div className="space-y-4">
                    <Radio value="standard" className="w-full">
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <Text strong>Standard Shipping</Text>
                          <Text className="block text-gray-500">3-5 business days</Text>
                        </div>
                        <Text strong>FREE</Text>
                      </div>
                    </Radio>
                    <Radio value="express" className="w-full">
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <Text strong>Express Shipping</Text>
                          <Text className="block text-gray-500">1-2 business days</Text>
                        </div>
                        <Text strong>$14.99</Text>
                      </div>
                    </Radio>
                  </div>
                </Radio.Group>
              </Form.Item>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Title level={4} className="mb-6">Payment Information</Title>
              <Form.Item
                name="cardNumber"
                label="Card Number"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  name="expiryDate"
                  label="Expiry Date"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="MM/YY" />
                </Form.Item>
                <Form.Item
                  name="cvv"
                  label="CVV"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
          </Form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Title level={4} className="mb-6">Order Summary</Title>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <Text>Subtotal</Text>
                <Text strong>$89.99</Text>
              </div>
              <div className="flex justify-between">
                <Text>Shipping</Text>
                <Text strong>FREE</Text>
              </div>
              <Divider className="my-2" />
              <div className="flex justify-between">
                <Text strong>Total</Text>
                <Title level={4}>$89.99</Title>
              </div>
            </div>
            <Button type="primary" size="large" block onClick={() => form.submit()}>
              Place Order
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;