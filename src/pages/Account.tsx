import React, { useState } from 'react';
import { Typography, Tabs, Card, Button, Avatar, Form, Input, Upload, Table, Tag } from 'antd';
import { motion } from 'framer-motion';
import { User, Package, Heart, CreditCard, Upload as UploadIcon } from 'lucide-react';
import type { UploadProps } from 'antd';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const Account = () => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');

  const orders = [
    {
      id: '#12345',
      date: '2024-02-20',
      total: 299.99,
      status: 'Delivered',
      items: 3,
    },
    {
      id: '#12346',
      date: '2024-02-15',
      total: 149.99,
      status: 'Processing',
      items: 1,
    },
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Premium Wool Coat',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Silk Blouse',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const uploadProps: UploadProps = {
    name: 'avatar',
    showUploadList: false,
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        console.error('You can only upload JPG/PNG files!');
        return false;
      }
      return false;
    },
  };

  const orderColumns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (total: number) => `$${total}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Delivered' ? 'green' : 'blue'}>{status}</Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <Button type="link">View Details</Button>,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <Title level={2}>My Account</Title>
          <Text className="text-gray-500">Manage your account and preferences</Text>
        </div>

        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane
            tab={
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" /> Profile
              </span>
            }
            key="1"
          >
            <Card>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center">
                  <Avatar size={100} icon={<User />} />
                  <Upload {...uploadProps}>
                    <Button type="link" icon={<UploadIcon className="h-4 w-4" />}>
                      Change Photo
                    </Button>
                  </Upload>
                </div>
                <div className="flex-1">
                  <Form
                    form={form}
                    layout="vertical"
                    initialValues={{
                      name: 'John Doe',
                      email: 'john@example.com',
                      phone: '+1 (555) 123-4567',
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Form.Item name="name" label="Full Name">
                        <Input />
                      </Form.Item>
                      <Form.Item name="email" label="Email">
                        <Input />
                      </Form.Item>
                      <Form.Item name="phone" label="Phone">
                        <Input />
                      </Form.Item>
                    </div>
                    <Button type="primary">Save Changes</Button>
                  </Form>
                </div>
              </div>
            </Card>
          </TabPane>

          <TabPane
            tab={
              <span className="flex items-center gap-2">
                <Package className="h-4 w-4" /> Orders
              </span>
            }
            key="2"
          >
            <Card>
              <Table
                columns={orderColumns}
                dataSource={orders}
                pagination={false}
              />
            </Card>
          </TabPane>

          <TabPane
            tab={
              <span className="flex items-center gap-2">
                <Heart className="h-4 w-4" /> Wishlist
              </span>
            }
            key="3"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card
                  key={item.id}
                  cover={
                    <img
                      alt={item.name}
                      src={item.image}
                      className="h-48 object-cover"
                    />
                  }
                  actions={[
                    <Button type="primary" key="add">Add to Cart</Button>,
                    <Button type="text" danger key="remove">Remove</Button>,
                  ]}
                >
                  <Card.Meta
                    title={item.name}
                    description={<Text strong>${item.price}</Text>}
                  />
                </Card>
              ))}
            </div>
          </TabPane>

          <TabPane
            tab={
              <span className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" /> Payment Methods
              </span>
            }
            key="4"
          >
            <Card>
              <div className="space-y-4">
                <Title level={4}>Saved Payment Methods</Title>
                <div className="border rounded p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-6 w-6" />
                    <div>
                      <Text strong className="block">•••• •••• •••• 4242</Text>
                      <Text className="text-gray-500">Expires 12/24</Text>
                    </div>
                  </div>
                  <Button danger>Remove</Button>
                </div>
                <Button type="primary">Add New Payment Method</Button>
              </div>
            </Card>
          </TabPane>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Account;