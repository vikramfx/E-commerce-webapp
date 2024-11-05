import React from 'react';
import { Typography, Form, Input, Button, Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values: any) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={1} className="text-center mb-12">Contact Us</Title>

        <Row gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <Title level={2} className="mb-8">Get in Touch</Title>
            <Form
              layout="vertical"
              onFinish={onFinish}
              className="max-w-md"
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea rows={4} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col xs={24} lg={12}>
            <Title level={2} className="mb-8">Contact Information</Title>
            <div className="space-y-6">
              <Card className="border-none shadow-sm">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <div>
                    <Title level={4} className="mb-1">Email</Title>
                    <Paragraph className="mb-0">support@luxe.com</Paragraph>
                  </div>
                </div>
              </Card>

              <Card className="border-none shadow-sm">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6" />
                  <div>
                    <Title level={4} className="mb-1">Phone</Title>
                    <Paragraph className="mb-0">+1 (555) 123-4567</Paragraph>
                  </div>
                </div>
              </Card>

              <Card className="border-none shadow-sm">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <Title level={4} className="mb-1">Address</Title>
                    <Paragraph className="mb-0">
                      123 Fashion Street<br />
                      New York, NY 10001<br />
                      United States
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8">
              <Title level={3} className="mb-4">Business Hours</Title>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-2">Monday - Friday:</td>
                    <td className="py-2">9:00 AM - 6:00 PM EST</td>
                  </tr>
                  <tr>
                    <td className="py-2">Saturday:</td>
                    <td className="py-2">10:00 AM - 4:00 PM EST</td>
                  </tr>
                  <tr>
                    <td className="py-2">Sunday:</td>
                    <td className="py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Contact;