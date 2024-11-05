import React from 'react';
import { Typography, Table, Tabs, Card } from 'antd';
import { motion } from 'framer-motion';
import { Ruler, Mail } from 'lucide-react';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const SizeGuide = () => {
  const womensSizes = [
    { size: 'XS', bust: '31-32', waist: '24-25', hips: '34-35' },
    { size: 'S', bust: '33-34', waist: '26-27', hips: '36-37' },
    { size: 'M', bust: '35-36', waist: '28-29', hips: '38-39' },
    { size: 'L', bust: '37-38', waist: '30-31', hips: '40-41' },
    { size: 'XL', bust: '39-40', waist: '32-33', hips: '42-43' },
  ];

  const mensSizes = [
    { size: 'XS', chest: '34-36', waist: '28-30', hips: '34-36' },
    { size: 'S', chest: '36-38', waist: '30-32', hips: '36-38' },
    { size: 'M', chest: '38-40', waist: '32-34', hips: '38-40' },
    { size: 'L', chest: '40-42', waist: '34-36', hips: '40-42' },
    { size: 'XL', chest: '42-44', waist: '36-38', hips: '42-44' },
  ];

  const columns = {
    women: [
      { title: 'Size', dataIndex: 'size', key: 'size' },
      { title: 'Bust (inches)', dataIndex: 'bust', key: 'bust' },
      { title: 'Waist (inches)', dataIndex: 'waist', key: 'waist' },
      { title: 'Hips (inches)', dataIndex: 'hips', key: 'hips' },
    ],
    men: [
      { title: 'Size', dataIndex: 'size', key: 'size' },
      { title: 'Chest (inches)', dataIndex: 'chest', key: 'chest' },
      { title: 'Waist (inches)', dataIndex: 'waist', key: 'waist' },
      { title: 'Hips (inches)', dataIndex: 'hips', key: 'hips' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={1} className="text-center mb-4">Size Guide</Title>
        <div className="flex items-center justify-center gap-2 mb-12">
          <Ruler className="h-6 w-6" />
          <Paragraph className="text-lg mb-0">Find your perfect fit</Paragraph>
        </div>

        <Card className="mb-8">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Women's Sizes" key="1">
              <Table
                dataSource={womensSizes}
                columns={columns.women}
                pagination={false}
                className="mb-6"
              />
            </TabPane>
            <TabPane tab="Men's Sizes" key="2">
              <Table
                dataSource={mensSizes}
                columns={columns.men}
                pagination={false}
                className="mb-6"
              />
            </TabPane>
          </Tabs>
        </Card>

        <div className="space-y-8">
          <div>
            <Title level={3}>How to Measure</Title>
            <Card>
              <div className="space-y-4">
                <div>
                  <Title level={4}>Bust/Chest</Title>
                  <Paragraph>
                    Measure around the fullest part of your bust/chest, keeping the measuring tape horizontal.
                  </Paragraph>
                </div>
                <div>
                  <Title level={4}>Waist</Title>
                  <Paragraph>
                    Measure around your natural waistline, keeping the tape comfortably loose.
                  </Paragraph>
                </div>
                <div>
                  <Title level={4}>Hips</Title>
                  <Paragraph>
                    Measure around the fullest part of your hips, keeping the tape horizontal.
                  </Paragraph>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Title level={3}>Tips for the Perfect Fit</Title>
            <Card>
              <ul className="list-disc pl-4 space-y-2">
                <li>Take measurements over undergarments similar to those you'll wear with the garment</li>
                <li>Keep the measuring tape snug but not tight</li>
                <li>Stand straight and relaxed while measuring</li>
                <li>If between sizes, we recommend sizing up for a more comfortable fit</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mt-8 text-center">
          <Title level={3} className="mb-4">Need Help?</Title>
          <Paragraph>
            If you need assistance with sizing or have any questions, our customer service team is here to help.
          </Paragraph>
          <div className="flex justify-center">
            <Mail className="h-5 w-5 mr-2" />
            <a href="mailto:support@luxe.com">support@luxe.com</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SizeGuide;