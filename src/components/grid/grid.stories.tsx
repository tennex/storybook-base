import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid } from './grid';
import { GridColumn, type GridColumnProps } from './grid-column';

const GridAlignmentValues = [
  ...(['xs', 'sm', 'md', 'lg', 'xl'] as const).flatMap((breakpoint) =>
    (['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'] as const).map(
      (prefix) => `${prefix}-${breakpoint}`
    )
  ),
];

const getStyles = () => ({
  alignItems: 'center',
  border: '1px solid',
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '100%',
  minHeight: '50px',
  overflow: 'hidden',
  padding: '12px',
  width: '100%',
});

const meta: Meta<typeof Grid> = {
  argTypes: {
    align: {
      control: 'multi-select',
      options: GridAlignmentValues,
    },
    children: {
      table: {
        disable: true,
      },
    },
    noWrap: {
      control: 'inline-check',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    reverse: {
      control: 'inline-check',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    wrap: {
      control: 'inline-check',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  args: {
    children: (
      <>
        <GridColumn width={['xs-1']}>
          <div style={getStyles()}>Column</div>
        </GridColumn>
        <GridColumn width={['xs-1']}>
          <div style={getStyles()}>Column</div>
        </GridColumn>
      </>
    ),
  },
  component: Grid,
  parameters: {
    docs: {
      description: {
        component:
          'Grid helps to adjust the content on the screen and build modular layouts across different breakpoints.\n\n' +
          'Start by adding a `<Grid>` element and one or more `<GridColumn>` elements inside it as direct children. ' +
          'Columns define where the content will be placed and how much horizontal space each column will use. ' +
          'Column widths are flexible and depend on the browser viewport width.\n\n' +
          'On smaller screens (<600px), the grid is divided into **4 columns**. On larger screens, it has **12 columns**. ' +
          'Responsive modifiers (referred to as `#{bp}`) enable specifying different column sizes, offsets, alignment, and distribution at **xs, sm, md, lg, and xl** viewport widths.\n\n' +
          'Bear in mind that **the layout is mobile-first**. You can stack modifiers to achieve different alignments depending on the screen size.',
      },
    },
  },
  title: 'Grid',
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

interface GridExampleColumnProps extends GridColumnProps {
  name?: string;
}

const getChildren = (items: GridExampleColumnProps[]) =>
  items.map((item: GridColumnProps, index: number) => renderColumn(item, index));

const renderColumn = (props: GridExampleColumnProps, index: number) => {
  const { name, children, ...rest } = props;

  return (
    <GridColumn {...rest} key={index}>
      <div style={getStyles()}>{name || children}</div>
    </GridColumn>
  );
};

const equalHeightColumns: GridExampleColumnProps[] = [
  {
    name: 'short column',
    width: ['xs-2'],
  },
  {
    name: 'long column lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti fuga nostrum soluta totam sit magnam esse aliquid nisi, corrupti itaque, officiis minus aperiam eos iste, recusandae, rerum necessitatibus adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti fuga nostrum soluta totam sit magnam esse aliquid nisi, corrupti itaque, officiis minus aperiam eos iste, recusandae, rerum necessitatibus adipisci.',
    width: ['xs-2'],
  },
];

const horizontalAlignColumns: GridExampleColumnProps[] = [
  {
    name: 'center',
    width: ['xs'],
  },
  {
    name: 'center',
    width: ['xs-4'],
  },
  {
    name: 'center',
    width: ['xs-3', 'sm-10'],
  },
  {
    name: 'center',
    width: ['xs-3', 'sm-8'],
  },
  {
    name: 'center',
    width: ['xs-2', 'sm-6'],
  },
];

const justifyColumns: GridExampleColumnProps[] = [
  {
    name: 'column',
    width: ['xs-1'],
  },
  {
    name: 'column',
    width: ['xs-1'],
  },
];

const minMaxColumns: GridExampleColumnProps[] = [
  {
    name: 'short column',
    width: ['min-xs'],
  },
  {
    name: 'long column lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti fuga nostrum soluta totam sit magnam esse aliquid nisi, corrupti itaque, officiis minus aperiam eos iste, recusandae, rerum necessitatibus adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti fuga nostrum soluta totam sit magnam esse aliquid nisi, corrupti itaque, officiis minus aperiam eos iste, recusandae, rerum necessitatibus adipisci.',
    width: ['max-xs'],
  },
];

const nestingColumns: GridExampleColumnProps[] = [
  {
    children: (
      <Grid>
        {getChildren([
          {
            className: 'sb-box sb-box--nested',
            name: 'column',
            width: ['xs-1'],
          },
          {
            className: 'sb-box sb-box--nested',
            name: 'column',
            width: ['xs-2'],
          },
          {
            className: 'sb-box sb-box--nested',
            name: 'column',
            width: ['xs-1'],
          },
        ])}
      </Grid>
    ),
    width: ['xs-4'],
  },
  {
    children: (
      <Grid>
        {getChildren([
          {
            className: 'sb-box sb-box--nested',
            name: 'column',
            width: ['xs-2'],
          },
          {
            className: 'sb-box sb-box--nested',
            name: 'column',
            width: ['xs-2'],
          },
        ])}
      </Grid>
    ),
    width: ['xs-4'],
  },
];

const noGutterColumns: GridExampleColumnProps[] = [
  {
    name: 'column',
    width: ['xs-2'],
  },
  {
    name: 'column',
    width: ['xs-2'],
  },
];

const offsetColumns: GridExampleColumnProps[] = [
  {
    name: '',
    offset: ['xs-3', 'sm-11'],
    width: ['xs-1', 'sm-1'],
  },
  {
    name: '',
    offset: ['xs-2', 'sm-10'],
    width: ['xs-2', 'sm-2'],
  },
  {
    name: '',
    offset: ['xs-1', 'sm-9'],
    width: ['xs-3', 'sm-3'],
  },
  {
    name: '',
    offset: ['xs-2', 'sm-8'],
    width: ['xs-2', 'sm-4'],
  },
  {
    name: '',
    offset: ['xs-3', 'sm-7'],
    width: ['xs-1', 'sm-5'],
  },
];

const orderColumns: GridExampleColumnProps[] = [
  {
    name: 'first in DOM, but second on screen',
    width: ['sm-6'],
  },
  {
    name: 'second in DOM, but first on screen',
    order: ['first-xs'],
    width: ['sm-6'],
  },
];

const reverseColumns: GridExampleColumnProps[] = [
  {
    name: '1',
    width: ['xs-1'],
  },
  {
    name: '2',
    width: ['xs-1'],
  },
  {
    name: '3',
    width: ['xs-1'],
  },
  {
    name: '4',
    width: ['xs-1'],
  },
];

const verticalAlignColumns: GridExampleColumnProps[] = [
  {
    align: ['top-xs'],
    name: 'top',
    width: ['sm-4'],
  },
  {
    align: ['middle-xs'],
    name: 'middle',
    width: ['sm-4'],
  },
  {
    align: ['bottom-xs'],
    name: 'bottom',
    width: ['sm-4'],
  },
];

const widthColumns: GridExampleColumnProps[] = [
  {
    name: '100%',
    width: ['xs-4'],
  },
  {
    name: '50%',
    width: ['xs-2'],
  },
  {
    name: '50%',
    width: ['xs-2'],
  },
  {
    name: '75%',
    width: ['xs-3'],
  },
  {
    name: '25%',
    width: ['xs-1'],
  },
  {
    name: '25%',
    width: ['xs-1'],
  },
  {
    name: '25%',
    width: ['xs-1'],
  },
  {
    name: '25%',
    width: ['xs-1'],
  },
  {
    name: '25%',
    width: ['xs-1'],
  },
];

export const Example: Story = {};

/**
 * Make grid columns with equal height by setting grid `equalHeight` property to true.
 */

export const EqualHeight: Story = {
  args: {
    children: getChildren(equalHeightColumns),
    equalHeight: true,
  },
};

/**
 * Horizontal alignment can be adjusted by whole group of columns using grid (or for each column individually) `align` property.
 * Set `align` property to `start-#{bp}`, `center-#{bp}` or `end-#{bp}` to align horizontally.
 */

export const HorizontalAlign: Story = {
  args: {
    align: ['center-xs'],
    children: getChildren(horizontalAlignColumns),
  },
};

/**
 * Divide the space between (`align` property set to `between-xs`, example below) or around (`around-xs`) columns.
 */

export const Justify: Story = {
  args: {
    align: ['between-xs'],
    children: getChildren(justifyColumns),
  },
};

/**
 * Make a column with minimum width by setting column `width` property to `min-xs` or maximum width `max-xs`.
 * Grid has to have `noWrap` property set to true in order this to work.
 */

export const MinMax: Story = {
  args: {
    children: getChildren(minMaxColumns),
    noWrap: ['xs'],
  },
};

/**
 * Nesting multiple grids inside each other is possible.
 */

export const Nesting: Story = {
  args: {
    children: getChildren(nestingColumns),
  },
};

/**
 * Remove spacing between columns by setting grid `gutter` property to `none`.
 */

export const NoGutter: Story = {
  args: {
    children: getChildren(noGutterColumns),
    gutter: 'none',
  },
};

/**
 * Move columns to the right by using the `offset` property.
 * These classes increase the left margin of a column by # columns.
 * Offset property values are a combination of **breakpoint** (xs, sm, md, lg, xl) and
 * **number of columns** (1-12), for example `xs-2`.
 */

export const Offset: Story = {
  args: {
    children: getChildren(offsetColumns),
  },
};

/**
 * Change order of columns by setting column `order` property.
 * Order property value `last-#{bp}` moves column to the end of grid and
 * `first-#{bp}` to start.
 * Use `original-#{bp}` to nullify any first/last orders set by previous breakpoints.
 */

export const Order: Story = {
  args: {
    children: getChildren(orderColumns),
  },
};

/**
 * Reverse the order of the columns depending on break point by setting grid `reverse`
 * property value to any of the **breakpoint** (xs, sm, md, lg, xl).
 */

export const Reverse: Story = {
  args: {
    children: getChildren(reverseColumns),
    reverse: ['sm'],
  },
};

/**
 * Vertical alignment can be adjusted by whole group of columns using grid `align` property.
 * Set `align` property to `top-#{bp}`, `middle-#{bp}` or `bottom-#{bp}` to align vertically.
 */

export const VerticalAlign: Story = {
  args: {
    children: getChildren(verticalAlignColumns),
    style: { minHeight: '150px' },
  },
};

/**
 * Column width can be adjusted by column `width` property.
 * Set `width` property to `#{bp}-#{cols}` where bp is the *breakpoint* (xs, sm, md, lg or xl)
 * and cols is the number of columns 1-4 for small screens (<600px) or 1-12 for larger screens.
 */

export const Width: Story = {
  args: {
    children: getChildren(widthColumns),
    equalHeight: true,
  },
};

export const NoWrap: Story = {
  args: {
    noWrap: true,
  },
  tags: ['!dev', '!autodocs'],
};

export const Wrap: Story = {
  args: {
    wrap: ['md'],
  },
  tags: ['!dev', '!autodocs'],
};

export const ClassName: Story = {
  args: {
    className: 'test-class',
  },
  tags: ['!dev', '!autodocs'],
};
