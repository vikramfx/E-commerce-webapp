import React from 'react';
import { Typography, Timeline, Card, Button } from 'antd';
import { motion } from 'framer-motion';
import { Truck, RotateCcw, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const ShippingReturns = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={1} className="text-center mb-12">Shipping & Returns</Title>

        <div className="mb-12">
          <Title level={2} className="flex items-center gap-2 mb-6">
            <Truck className="h-6 w-6" /> Shipping Information
          </Title>
          <Card className="mb-6">
            <Timeline
              items={[
                {
                  children: (
                    <div>
                      <Text strong>Standard Shipping (Free)</Text>
                      <Paragraph className="text-gray-500 mb-0">3-5 business days</Paragraph>
                    </div>
                  ),
                },
                {
                  children: (
                    <div>
                      <Text strong>Express Shipping ($14.99)</Text>
                      <Paragraph className="text-gray-500 mb-0">1-2 business days</Paragraph>
                    </div>
                  ),
                },
                {
                  children: (
                    <div>
                      <Text strong>International Shipping</Text>
                      <Paragraph className="text-gray-500 mb-0">7-14 business days</Paragraph>
                    </div>
                  ),
                },
              ]}
            />
          </Card>
          <Paragraph>
            All orders are processed within 1-2 business days. Orders placed after 2 PM EST will be processed the next business day.
            Tracking information will be provided via email once your order ships.
          </Paragraph>
        </div>

        <div className="mb-12">
          <Title level={2} className="flex items-center gap-2 mb-6">
            <RotateCcw className="h-6 w-6" /> Returns Policy
          </Title>
          <Card className="mb-6">
            <div className="space-y-4">
              <div>
                <Text strong className="block">30-Day Return Window</Text>
                <Text className="text-gray-500">Items must be unworn with original tags attached</Text>
              </div>
              <div>
                <Text strong className="block">Free Returns</Text>
                <Text className="text-gray-500">We provide a prepaid return shipping label</Text>
              </div>
              <div>
                <Text strong className="block">Refund Method</Text>
                <Text className="text-gray-500">Original payment method within 5-7 business days of return receipt</Text>
              </div>
            </div>
          </Card>
          <Paragraph>
            We want you to be completely satisfied with your purchase. If you're not happy with your order,
            we'll gladly accept returns within 30 days of delivery.
          </Paragraph>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <Title level={3} className="mb-4">Need Help?</Title>
          <Paragraph className="mb-6">
            Our customer service team is here to assist you with any questions about shipping or returns.
          </Paragraph>
          <Link to="/contact">
            <Button type="primary" icon={<Mail className="h-4 w-4" />} size="large">
              Contact Support
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ShippingReturns;