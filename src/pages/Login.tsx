import React from 'react';
import { Typography, Form, Input, Button, Divider, message } from 'antd';
import { motion } from 'framer-motion';
import { Mail, Lock, Github, Twitter } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Login form submitted:', values);
    message.success('Successfully logged in!');
    navigate('/account');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <Title level={2}>Welcome Back</Title>
          <Text className="text-gray-500">Sign in to your LUXE account</Text>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input
                prefix={<Mail className="h-5 w-5 text-gray-400" />}
                placeholder="Email"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password
                prefix={<Lock className="h-5 w-5 text-gray-400" />}
                placeholder="Password"
                size="large"
              />
            </Form.Item>

            <div className="flex justify-between mb-4">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Link to="/forgot-password" className="text-sm">
                  Forgot password?
                </Link>
              </Form.Item>
            </div>

            <Button type="primary" htmlType="submit" size="large" block>
              Sign In
            </Button>

            <Divider>or continue with</Divider>

            <div className="grid grid-cols-2 gap-4">
              <Button size="large" icon={<Github className="h-5 w-5" />} block>
                Github
              </Button>
              <Button size="large" icon={<Twitter className="h-5 w-5" />} block>
                Twitter
              </Button>
            </div>

            <div className="text-center mt-6">
              <Text className="text-gray-500">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-600 hover:text-blue-500">
                  Sign up
                </Link>
              </Text>
            </div>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;