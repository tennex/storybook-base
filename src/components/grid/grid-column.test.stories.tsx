import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { GridColumn } from './grid-column';
import gridColumnMeta from './grid-column.stories';

/**
 * Behavioural tests for the GridColumn component.
 *
 * Listed under the top-level "Tests" sidebar group rather than under Grid Column itself, has no
 * docs page, and isn't snapshotted by Chromatic — these stories exist for Vitest and coverage.
 */
const meta: Meta<typeof GridColumn> = {
  ...gridColumnMeta,
  tags: ['!autodocs'],
  title: 'Grid Column/Tests',
} satisfies Meta<typeof GridColumn>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The shared `render` wraps the column in a Grid, so the column is the grid's first child.
 */
const getColumn = (canvasElement: HTMLElement) => canvasElement.firstElementChild?.firstElementChild as HTMLElement;

const expectClasses = (element: HTMLElement, expected: string[]) => {
  expect(element.className).not.toContain('undefined');

  expected.forEach((name) => expect(element.className).toContain(name));
};

export const Default: Story = {
  play: async ({ canvasElement }) => {
    expectClasses(getColumn(canvasElement), ['grid__col']);
  },
};

export const Width: Story = {
  args: {
    width: ['xs-2', 'sm-6'],
  },
  play: async ({ canvasElement }) => {
    expectClasses(getColumn(canvasElement), ['grid__col--xs-2', 'grid__col--sm-6']);
  },
};

export const WidthMinMax: Story = {
  args: {
    width: ['min-xs'],
  },
  play: async ({ canvasElement }) => {
    expectClasses(getColumn(canvasElement), ['grid__col--min-xs']);
  },
};

export const Offset: Story = {
  args: {
    offset: ['xs-2', 'sm-8'],
    width: ['xs-2', 'sm-4'],
  },
  play: async ({ canvasElement }) => {
    expectClasses(getColumn(canvasElement), ['grid__col--offset-xs-2', 'grid__col--offset-sm-8']);
  },
};

export const Order: Story = {
  args: {
    order: ['first-xs', 'last-sm'],
  },
  play: async ({ canvasElement }) => {
    expectClasses(getColumn(canvasElement), ['grid__col--first-xs', 'grid__col--last-sm']);
  },
};

export const Align: Story = {
  args: {
    align: ['top-xs', 'middle-sm'],
  },
  play: async ({ canvasElement }) => {
    expectClasses(getColumn(canvasElement), ['grid__col--top-xs', 'grid__col--middle-sm']);
  },
};

export const ClassName: Story = {
  args: {
    className: 'test-class',
  },
  play: async ({ canvasElement }) => {
    const column = getColumn(canvasElement);

    expectClasses(column, ['grid__col']);
    expect(column.className).toContain('test-class');
  },
};
