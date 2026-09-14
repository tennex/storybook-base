import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Grid } from './grid';
import gridMeta, { getChildren, reverseColumns, widthColumns } from './grid.stories';

/**
 * Behavioural tests for the Grid component.
 *
 * These stories exist for Vitest and coverage: listed under the top-level "Tests" sidebar
 * group rather than under Grid itself, with no docs page, and Chromatic does not snapshot
 * them. Visual regressions belong in `grid.visual.stories.tsx` instead.
 */
const meta: Meta<typeof Grid> = {
  ...gridMeta,
  tags: ['!autodocs'],
  title: 'Grid/Tests',
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The Grid renders a single root element, so the first child of the canvas is the grid itself.
 */
const getGrid = (canvasElement: HTMLElement) => canvasElement.firstElementChild as HTMLElement;

/**
 * CSS module class names are hashed, so we match on the readable part of the name rather than
 * comparing exactly. A class missing from the SCSS would make `styles[...]` resolve to
 * `undefined` and end up in the class list verbatim, which is why every assertion guards
 * against it.
 */
const expectClasses = (element: HTMLElement, expected: string[]) => {
  expect(element.className).not.toContain('undefined');

  expected.forEach((name) => expect(element.className).toContain(name));
};

export const NoWrapBoolean: Story = {
  args: {
    noWrap: true,
  },
  play: async ({ canvasElement }) => {
    expectClasses(getGrid(canvasElement), ['grid--no-wrap-xs']);
  },
};

export const NoWrapBreakpoints: Story = {
  args: {
    noWrap: ['sm', 'md'],
  },
  play: async ({ canvasElement }) => {
    const grid = getGrid(canvasElement);

    expectClasses(grid, ['grid--no-wrap-sm', 'grid--no-wrap-md']);
    expect(grid.className).not.toContain('grid--no-wrap-xs');
  },
};

export const Wrap: Story = {
  args: {
    wrap: ['md'],
  },
  play: async ({ canvasElement }) => {
    expectClasses(getGrid(canvasElement), ['grid--wrap-md']);
  },
};

export const Reverse: Story = {
  args: {
    children: getChildren(reverseColumns),
    reverse: ['xs', 'sm'],
  },
  play: async ({ canvasElement }) => {
    expectClasses(getGrid(canvasElement), ['grid--reverse-xs', 'grid--reverse-sm']);
  },
};

export const Align: Story = {
  args: {
    align: ['between-xs', 'middle-sm'],
  },
  play: async ({ canvasElement }) => {
    expectClasses(getGrid(canvasElement), ['grid--between-xs', 'grid--middle-sm']);
  },
};

export const GutterNone: Story = {
  args: {
    gutter: 'none',
  },
  play: async ({ canvasElement }) => {
    expectClasses(getGrid(canvasElement), ['grid--gutter-none']);
  },
};

export const GutterDefault: Story = {
  play: async ({ canvasElement }) => {
    expect(getGrid(canvasElement).className).not.toContain('grid--gutter-none');
  },
};

export const EqualHeight: Story = {
  args: {
    children: getChildren(widthColumns),
    equalHeight: true,
  },
  play: async ({ canvasElement }) => {
    expectClasses(getGrid(canvasElement), ['grid--equalheight']);
  },
};

export const ClassName: Story = {
  args: {
    className: 'test-class',
  },
  play: async ({ canvasElement }) => {
    const grid = getGrid(canvasElement);

    expectClasses(grid, ['grid']);
    expect(grid.className).toContain('test-class');
  },
};

export const InlineStyle: Story = {
  args: {
    style: { minHeight: '150px' },
  },
  play: async ({ canvasElement }) => {
    expect(getGrid(canvasElement).style.minHeight).toBe('150px');
  },
};
