import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../components/Avatar/Avatar';

interface AvatarProps {
  src: string;
  alt: string;
  status: string;
}

const meta: Meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const Online: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/89322346',
    alt: 'Online Avatar Alt Text',
    status: 'online',
  },
};

export const Offline: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/89322346',
    alt: 'Offline Avatar Alt Text',
    status: 'offline',
  },
};
