import { Break, BreakXS, BreakSM } from '../../utils';

import styles from './grid.module.scss';

export type GridColumnWithMinMax = 'min' | 'max';
export type GridColumnWidthNumbersXS = '1' | '2' | '3' | '4';
export type GridColumnWidthNumbersSM = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type GridColumnBorderPlacement = 'bottom' | 'left' | 'none' | 'bottom-none' | 'left-none';
export type GridColumnOrderPrefix = 'first' | 'last' | 'original';
export type GridColumnAlignmentPrefix = 'top' | 'middle' | 'bottom';
export type BreakPointWidthNumbersXS = `${string & BreakXS}` | `${string & BreakXS}-${GridColumnWidthNumbersXS}`;
export type BreakPointWidthNumbersSM = `${string & BreakSM}` | `${string & BreakSM}-${GridColumnWidthNumbersSM}`;
export type TWidthMinMax = `${GridColumnWithMinMax}-${string & Break}` | GridColumnWithMinMax;
export type GridColumnWidth = BreakPointWidthNumbersXS | BreakPointWidthNumbersSM | TWidthMinMax;
export type GridColumnOffset =
  | `${string & BreakXS}-${GridColumnWidthNumbersXS}`
  | `${string & BreakSM}-${GridColumnWidthNumbersSM}`;
export type GridColumnAlignment = `${GridColumnAlignmentPrefix}-${string & Break}`;
export type GridColumnOrder = `${GridColumnOrderPrefix}-${string & Break}`;

export interface GridColumnProps {
  /**
   * Alignment of the column with breakpoint.
   * align={["top-xs", "middle-xs", "bottom-xs"]}
   */
  align?: GridColumnAlignment[];
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Additional class.
   */
  className?: string;
  /**
   * Offset of the column with breakpoint.
   * offset={["xs-4"]}
   */
  offset?: GridColumnOffset[];
  /**
   * Order of the column with breakpoint.
   * order={["first-xs", "last-xs", "original-xs"]}
   */
  order?: GridColumnOrder[];
  /**
   * Width of the column with breakpoint.
   * width={["xs-4"]}
   */
  width?: GridColumnWidth[];
}

export const GridColumn = (props: GridColumnProps): React.ReactElement => {
  const BEM = () => {
    const classArray = [styles['grid__col']];

    if (props.width) {
      props.width.forEach((w) => classArray.push(styles[`grid__col--${w}`]));
    }
    if (props.offset) {
      props.offset.forEach((o) => classArray.push(styles[`grid__col--offset-${o}`]));
    }
    if (props.order) {
      props.order.forEach((o) => classArray.push(styles[`grid__col--${o}`]));
    }
    if (props.align) {
      props.align.forEach((a) => classArray.push(styles[`grid__col--${a}`]));
    }
    if (props.className) {
      classArray.push(props.className);
    }

    return classArray.join(' ');
  };

  return <div className={BEM()}>{props.children}</div>;
};
