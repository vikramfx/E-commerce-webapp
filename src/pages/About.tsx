import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={1} className="text-center mb-12">About LUXE</Title>
        
        <Row gutter={[24, 24]} className="mb-16">
          <Col xs={24} md={12}>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Our Story"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </Col>
          <Col xs={24} md={12}>
            <Title level={2}>Our Story</Title>
            <Paragraph className="text-lg">
              Founded in 2024, LUXE has established itself as a premier destination for contemporary fashion. Our commitment to quality, sustainability, and innovative design has made us a trusted name in the industry.
            </Paragraph>
            <Paragraph className="text-lg">
              We believe that fashion is more than just clothing – it's a form of self-expression, a confidence booster, and a way to make a statement without saying a word.
            </Paragraph>
          </Col>
        </Row>

        <Title level={2} className="text-center mb-8">Our Values</Title>
        <Row gutter={[24, 24]} className="mb-16">
          <Col xs={24} md={8}>
            <Card className="h-full">
              <Title level={3}>Quality</Title>
              <Paragraph>
                We source only the finest materials and work with skilled artisans to create pieces that last.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="h-full">
              <Title level={3}>Sustainability</Title>
              <Paragraph>
                Our commitment to the environment drives us to implement eco-friendly practices throughout our supply chain.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="h-full">
              <Title level={3}>Innovation</Title>
              <Paragraph>
                We continuously explore new technologies and designs to bring you the latest in fashion.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Row className="bg-gray-50 p-8 rounded-lg">
          <Col xs={24}>
            <Title level={2} className="text-center mb-8">Our Mission</Title>
            <Paragraph className="text-lg text-center max-w-3xl mx-auto">
              To provide our customers with high-quality, sustainable fashion that empowers them to express their unique style while making conscious choices for our planet.
            </Paragraph>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default About;