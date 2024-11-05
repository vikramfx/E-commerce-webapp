import React from 'react';
import { Menu, Slider, Checkbox, Typography, Divider } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const { Title } = Typography;

interface FilterSidebarProps {
  onPriceChange: (value: [number, number]) => void;
  onCategoryChange: (values: CheckboxValueType[]) => void;
  onSizeChange: (values: CheckboxValueType[]) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onPriceChange,
  onCategoryChange,
  onSizeChange,
}) => {
  const categories = ['Shirts', 'Pants', 'Dresses', 'Jackets', 'Accessories'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="p-4">
      <Title level={4}>Filters</Title>
      <Divider />
      
      <div className="mb-6">
        <Title level={5}>Price Range</Title>
        <Slider
          range
          defaultValue={[0, 1000]}
          min={0}
          max={1000}
          onChange={onPriceChange}
          tooltip={{
            formatter: (value) => `$${value}`
          }}
        />
      </div>

      <div className="mb-6">
        <Title level={5}>Categories</Title>
        <Checkbox.Group
          options={categories}
          onChange={onCategoryChange}
          className="flex flex-col gap-2"
        />
      </div>

      <div className="mb-6">
        <Title level={5}>Sizes</Title>
        <Checkbox.Group
          options={sizes}
          onChange={onSizeChange}
          className="flex flex-col gap-2"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;