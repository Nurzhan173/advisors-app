// Card.stories.tsx
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Card from '../components/Card/Card';
import '../components/Card/Card.css';
import { Advisor } from '../stores/AdvisorsStore';

const meta: Meta = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    // Add any specific argTypes here.
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Fullscreen layout for a better mobile view
  },
};

export default meta;
type Story = StoryObj<{ advisor: Advisor }>;

const exampleAdvisor: Advisor = {
  id: '1',
  name: 'John Doe',
  avatar: 'https://avatars.githubusercontent.com/u/89322346',
  language: 'English',
  status: 'online',
  rating: 4.5,
  reviews: 10,
  price: 20,
  description: 'Experienced advisor providing expert advice.',
};

export const Default: Story = {
  args: {
    advisor: exampleAdvisor,
  },
};

// You can create additional stories with different data or variations as needed.
