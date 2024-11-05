import React from 'react';
import { Typography, Collapse, Input } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;
const { Search } = Input;

const FAQ = () => {
  const faqs = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping typically takes 3-5 business days within the continental US. Express shipping is available for 1-2 business day delivery.'
        },
        {
          q: 'Can I track my order?',
          a: 'Yes, you will receive a tracking number via email once your order has been shipped.'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Yes, we ship to most countries worldwide. International shipping times vary by location.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer free returns within 30 days of purchase. Items must be unworn and in original condition with tags attached.'
        },
        {
          q: 'How do I start a return?',
          a: 'Log into your account and visit the orders section to initiate a return. You will receive a prepaid shipping label via email.'
        }
      ]
    },
    {
      category: 'Product Information',
      questions: [
        {
          q: 'How do I find my size?',
          a: 'Please refer to our size guide for detailed measurements. Each product page also includes specific sizing information.'
        },
        {
          q: 'Are your products sustainable?',
          a: 'Yes, we are committed to sustainability. Many of our products use recycled materials and eco-friendly production methods.'
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={1} className="text-center mb-8">Frequently Asked Questions</Title>
        
        <Search
          placeholder="Search FAQ..."
          size="large"
          className="mb-8"
        />

        {faqs.map((category, index) => (
          <div key={index} className="mb-8">
            <Title level={3} className="mb-4">{category.category}</Title>
            <Collapse>
              {category.questions.map((faq, faqIndex) => (
                <Panel header={faq.q} key={faqIndex}>
                  <Paragraph>{faq.a}</Paragraph>
                </Panel>
              ))}
            </Collapse>
          </div>
        ))}

        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <Title level={3} className="text-center mb-4">Still have questions?</Title>
          <Paragraph className="text-center mb-6">
            Can't find the answer you're looking for? Please contact our customer support team.
          </Paragraph>
          <div className="text-center">
            <a href="/contact">
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Contact Support
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;