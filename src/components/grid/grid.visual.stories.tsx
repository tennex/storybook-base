import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid, type GridAlignment } from './grid';
import gridMeta, {
  getChildren,
  horizontalAlignColumns,
  justifyColumns,
  minMaxColumns,
  nestingColumns,
  noGutterColumns,
  offsetColumns,
  orderColumns,
  reverseColumns,
  verticalAlignColumns,
  widthColumns,
} from './grid.stories';

/**
 * Visual regression matrices for the Grid component.
 *
 * Each story renders every variant of one dimension in a single snapshot, so Chromatic
 * covers the whole matrix at the cost of one screenshot. Listed under the top-level "Visual"
 * sidebar group rather than under Grid itself, with no docs page, and Vitest skips them —
 * behavioural assertions belong in `grid.test.stories.tsx` instead.
 */
const meta: Meta<typeof Grid> = {
  ...gridMeta,
  tags: ['!autodocs', '!test'],
  title: 'Grid/Visual',
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

const Section = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <section style={{ marginBottom: '24px' }}>
    <h3 style={{ font: '600 13px/1.4 monospace', margin: '0 0 8px' }}>{label}</h3>
    {children}
  </section>
);

const horizontalAlignments: GridAlignment[] = ['start-xs', 'center-xs', 'end-xs'];
const justifyAlignments: GridAlignment[] = ['around-xs', 'between-xs'];
const verticalAlignments: GridAlignment[] = ['top-xs', 'middle-xs', 'bottom-xs'];

export const HorizontalAlignMatrix: Story = {
  render: () => (
    <>
      {horizontalAlignments.map((align) => (
        <Section key={align} label={align}>
          <Grid align={[align]}>{getChildren(horizontalAlignColumns)}</Grid>
        </Section>
      ))}
      {justifyAlignments.map((align) => (
        <Section key={align} label={align}>
          <Grid align={[align]}>{getChildren(justifyColumns)}</Grid>
        </Section>
      ))}
    </>
  ),
};

export const VerticalAlignMatrix: Story = {
  render: () => (
    <>
      {verticalAlignments.map((align) => (
        <Section key={align} label={align}>
          <Grid align={[align]} style={{ minHeight: '150px' }}>
            {getChildren(verticalAlignColumns)}
          </Grid>
        </Section>
      ))}
      <Section label="per-column alignment">
        <Grid style={{ minHeight: '150px' }}>{getChildren(verticalAlignColumns)}</Grid>
      </Section>
    </>
  ),
};

export const WidthMatrix: Story = {
  render: () => (
    <>
      <Section label="widths">
        <Grid equalHeight>{getChildren(widthColumns)}</Grid>
      </Section>
      <Section label="min / max width (noWrap)">
        <Grid noWrap={['xs']}>{getChildren(minMaxColumns)}</Grid>
      </Section>
    </>
  ),
};

export const OffsetMatrix: Story = {
  render: () => (
    <Section label="offsets">
      <Grid>{getChildren(offsetColumns)}</Grid>
    </Section>
  ),
};

export const OrderMatrix: Story = {
  render: () => (
    <>
      <Section label="order">
        <Grid>{getChildren(orderColumns)}</Grid>
      </Section>
      <Section label="reverse-sm">
        <Grid reverse={['sm']}>{getChildren(reverseColumns)}</Grid>
      </Section>
      <Section label="reverse-xs">
        <Grid reverse={['xs']}>{getChildren(reverseColumns)}</Grid>
      </Section>
    </>
  ),
};

export const GutterMatrix: Story = {
  render: () => (
    <>
      <Section label="gutter: default">
        <Grid>{getChildren(noGutterColumns)}</Grid>
      </Section>
      <Section label="gutter: none">
        <Grid gutter="none">{getChildren(noGutterColumns)}</Grid>
      </Section>
    </>
  ),
};

export const NestingMatrix: Story = {
  render: () => (
    <Section label="nested grids">
      <Grid>{getChildren(nestingColumns)}</Grid>
    </Section>
  ),
};
