import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid } from '../grid/grid';

import { GridColumn } from './grid-column';

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const columnsPerBreakpoint = {
  lg: 12,
  md: 12,
  sm: 12,
  xl: 12,
  xs: 4,
};

const generateGridColumnAlignmentValues = (prefixes: string[]) => [
  ...breakpoints.flatMap((breakpoint) => prefixes.map((prefix) => `${prefix}-${breakpoint}`)),
];

const generateGridColumnWidthValues = () => {
  const values: string[] = [];

  breakpoints.forEach((breakpoint) => {
    values.push(breakpoint);
    const columns = columnsPerBreakpoint[breakpoint];
    for (let i = 1; i <= columns; i++) {
      values.push(`${breakpoint}-${i}`);
    }
  });

  return values;
};

const GridColumnAlignmentValues = generateGridColumnAlignmentValues(['top', 'middle', 'bottom']);
const GridColumnOffsetValues = generateGridColumnWidthValues();
const GridColumnOrderValues = generateGridColumnAlignmentValues(['first', 'last', 'original']);
const GridColumnWidthValues = generateGridColumnWidthValues();

const meta = {
  argTypes: {
    align: {
      control: 'multi-select',
      options: GridColumnAlignmentValues,
    },
    children: {
      table: {
        disable: true,
      },
    },
    offset: {
      control: 'multi-select',
      options: GridColumnOffsetValues,
    },
    order: {
      control: 'multi-select',
      options: GridColumnOrderValues,
    },
    width: {
      control: 'multi-select',
      options: GridColumnWidthValues,
    },
  },
  args: {
    children: (
      <div
        style={{
          alignItems: 'center',
          border: '1px solid',
          display: 'flex',
          justifyContent: 'center',
          padding: '12px',
        }}
      >
        Column
      </div>
    ),
  },
  component: GridColumn,
  parameters: {
    docs: {
      description: {
        component: 'The GridColumn component is meant to be used only as a direct children of the Grid component.',
      },
    },
  },
  render: (args) => (
    <Grid>
      <GridColumn {...args} />
    </Grid>
  ),
  title: 'Grid Column',
} satisfies Meta<typeof GridColumn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
