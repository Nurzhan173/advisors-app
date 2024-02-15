// Select.stories.tsx
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Select from '../components/Select/Select';

const meta: Meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};


interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  onSelect: (selectedOption: string) => void;
}

export default meta;
type Story = StoryObj<SelectProps>;

const exampleOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

export const Default: Story = {
  args: {
    label: 'Select an option:',
    options: exampleOptions,
    onSelect: (selectedOption) => console.log(`Selected option: ${selectedOption}`),
  },
};

