import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Container } from './container';
import containerMeta from './container.stories';

/**
 * Behavioural tests for the Container component.
 *
 * Listed under the top-level "Tests" sidebar group rather than under Container itself, has no
 * docs page, and isn't snapshotted by Chromatic — these stories exist for Vitest and coverage.
 */
const meta: Meta<typeof Container> = {
  ...containerMeta,
  tags: ['!autodocs'],
  title: 'Container/Tests',
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

const getContainer = (canvasElement: HTMLElement) => canvasElement.firstElementChild as HTMLElement;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const container = getContainer(canvasElement);

    expect(container.className).not.toContain('undefined');
    expect(container.className).toContain('container');
  },
};

export const ClassName: Story = {
  args: {
    className: 'test-class',
  },
  play: async ({ canvasElement }) => {
    const container = getContainer(canvasElement);

    expect(container.className).toContain('container');
    expect(container.className).toContain('test-class');
  },
};
