import React from 'react';
import { Typography, Card, Button, InputNumber, Radio } from 'antd';
import { motion } from 'framer-motion';
import { Gift, Mail, Printer } from 'lucide-react';

const { Title, Paragraph, Text } = Typography;

const GiftCards = () => {
  const [amount, setAmount] = React.useState(50);
  const [deliveryMethod, setDeliveryMethod] = React.useState('email');

  const predefinedAmounts = [25, 50, 100, 150, 200];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <Title level={1} className="mb-4">Gift Cards</Title>
          <div className="flex items-center justify-center gap-2">
            <Gift className="h-6 w-6" />
            <Paragraph className="text-lg mb-0">
              Give the gift of style
            </Paragraph>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="h-full">
            <Title level={3}>Select Amount</Title>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                {predefinedAmounts.map((value) => (
                  <Button
                    key={value}
                    type={amount === value ? 'primary' : 'default'}
                    onClick={() => setAmount(value)}
                    className="w-full"
                  >
                    ${value}
                  </Button>
                ))}
              </div>
              <div>
                <Text>Custom Amount:</Text>
                <InputNumber
                  min={10}
                  max={1000}
                  value={amount}
                  onChange={(value) => setAmount(value || 0)}
                  formatter={(value) => `$ ${value}`}
                  className="w-full mt-2"
                />
              </div>
            </div>
          </Card>

          <Card className="h-full">
            <Title level={3}>Delivery Method</Title>
            <Radio.Group
              value={deliveryMethod}
              onChange={(e) => setDeliveryMethod(e.target.value)}
              className="w-full"
            >
              <div className="space-y-4">
                <Card className="cursor-pointer" onClick={() => setDeliveryMethod('email')}>
                  <Radio value="email" className="w-full">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      <div>
                        <Text strong>Email</Text>
                        <Text className="block text-gray-500">Send instantly to any email address</Text>
                      </div>
                    </div>
                  </Radio>
                </Card>
                <Card className="cursor-pointer" onClick={() => setDeliveryMethod('print')}>
                  <Radio value="print" className="w-full">
                    <div className="flex items-center gap-2">
                      <Printer className="h-5 w-5" />
                      <div>
                        <Text strong>Print at Home</Text>
                        <Text className="block text-gray-500">Print and give in person</Text>
                      </div>
                    </div>
                  </Radio>
                </Card>
              </div>
            </Radio.Group>
          </Card>
        </div>

        <Card className="mb-8">
          <Title level={3}>Gift Card Details</Title>
          <ul className="list-disc pl-4 space-y-2">
            <li>Never expires</li>
            <li>Can be used online or in stores</li>
            <li>Redeemable on all full-price and sale items</li>
            <li>Balance can be checked online or in stores</li>
          </ul>
        </Card>

        <div className="text-center">
          <Button type="primary" size="large">
            Continue to Personalization
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default GiftCards;