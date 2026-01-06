import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container } from './container';

const getStyles = () => ({
  alignItems: 'center',
  border: '1px solid',
  display: 'flex',
  justifyContent: 'center',
  padding: '16px',
});

const meta: Meta<typeof Container> = {
  args: {
    children: <div style={getStyles()}>This is inside a Container component</div>,
  },
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          'The **Container** component serves as a content area for the page.\n\n' +
          'By default, all components are full width, occupying the entire horizontal space of the page. ' +
          'The Container component restricts the width of its children, ensuring they stay within its boundaries.',
      },
    },
    layout: 'fullscreen',
  },
  title: 'Container',
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ClassName: Story = {
  args: {
    className: 'test-class',
  },
  tags: ['!dev', '!autodocs'],
};
