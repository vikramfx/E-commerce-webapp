import React, { useState } from 'react';
import { Typography, Input, Card, Button, Tag } from 'antd';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stores = [
    {
      id: 1,
      name: 'LUXE Fifth Avenue',
      address: '123 Fifth Avenue, New York, NY 10001',
      phone: '+1 (212) 555-0123',
      hours: {
        weekday: '10:00 AM - 8:00 PM',
        saturday: '10:00 AM - 6:00 PM',
        sunday: '11:00 AM - 5:00 PM',
      },
      services: ['Personal Styling', 'Alterations', 'Click & Collect'],
    },
    {
      id: 2,
      name: 'LUXE SoHo',
      address: '456 Broadway, New York, NY 10013',
      phone: '+1 (212) 555-0456',
      hours: {
        weekday: '11:00 AM - 7:00 PM',
        saturday: '10:00 AM - 6:00 PM',
        sunday: '12:00 PM - 5:00 PM',
      },
      services: ['Personal Styling', 'Click & Collect'],
    },
    {
      id: 3,
      name: 'LUXE Madison',
      address: '789 Madison Avenue, New York, NY 10065',
      phone: '+1 (212) 555-0789',
      hours: {
        weekday: '10:00 AM - 7:00 PM',
        saturday: '10:00 AM - 6:00 PM',
        sunday: '12:00 PM - 5:00 PM',
      },
      services: ['Personal Styling', 'Alterations', 'VIP Room'],
    },
  ];

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={1} className="text-center mb-4">Store Locator</Title>
        <Paragraph className="text-center text-lg mb-8">
          Find a LUXE store near you
        </Paragraph>

        <div className="mb-8">
          <Search
            placeholder="Search by location or store name"
            size="large"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-xl mx-auto"
          />
        </div>

        <div className="space-y-6">
          {filteredStores.map((store) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card hoverable className="overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <Title level={3} className="mb-2">{store.name}</Title>
                    <div className="flex items-start gap-2 mb-4">
                      <MapPin className="h-5 w-5 mt-1" />
                      <Text>{store.address}</Text>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Phone className="h-5 w-5" />
                      <Text>{store.phone}</Text>
                    </div>
                    <div className="flex items-start gap-2 mb-4">
                      <Clock className="h-5 w-5 mt-1" />
                      <div>
                        <div>Mon-Fri: {store.hours.weekday}</div>
                        <div>Sat: {store.hours.saturday}</div>
                        <div>Sun: {store.hours.sunday}</div>
                      </div>
                    </div>
                    <div className="space-x-2">
                      {store.services.map((service, index) => (
                        <Tag key={index} color="blue">{service}</Tag>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Button type="primary">Get Directions</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StoreLocator;