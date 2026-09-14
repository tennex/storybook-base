import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';

import { Button } from './button';
import buttonMeta from './button.stories';

/**
 * Behavioural tests for the Button component.
 *
 * Listed under the top-level "Tests" sidebar group rather than under Button itself, has no
 * docs page, and isn't snapshotted by Chromatic — these stories exist for Vitest and coverage.
 */
const meta: Meta<typeof Button> = {
  ...buttonMeta,
  tags: ['!autodocs'],
  title: 'Button/Tests',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Click: Story = {
  args: {
    label: 'Save changes',
  },
  play: async ({ args, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Save changes' }));

    expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Save changes',
  },
  play: async ({ args, canvas }) => {
    const button = canvas.getByRole('button', { name: 'Save changes' });

    expect(button).toBeDisabled();

    await userEvent.click(button);

    expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary',
    primary: true,
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button');

    expect(button.className).not.toContain('undefined');
    expect(button.className).toContain('button--primary');
    expect(button.className).not.toContain('button--secondary');
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button');

    expect(button.className).toContain('button--secondary');
    expect(button.className).not.toContain('button--primary');
  },
};

export const Sizes: Story = {
  args: {
    label: 'Sized',
  },
  play: async ({ canvas }) => {
    (['small', 'medium', 'large'] as const).forEach((size) => {
      const button = canvas.getByRole('button', { name: new RegExp(size, 'i') });

      expect(button.className).toContain(`button--${size}`);
    });
  },
  render: (args) => (
    <>
      <Button {...args} label="Small" size="small" />
      <Button {...args} label="Medium" size="medium" />
      <Button {...args} label="Large" size="large" />
    </>
  ),
};
