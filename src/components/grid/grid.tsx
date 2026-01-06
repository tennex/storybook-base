import type { CSSProperties } from 'react';

import { Break } from '../../utils';

import styles from './grid.module.scss';

export type GridAlignmentPrefix = 'start' | 'center' | 'end' | 'top' | 'middle' | 'bottom' | 'around' | 'between';
export type GridAlignment = `${GridAlignmentPrefix}-${string & Break}`;
export type GridNoWrap = Break[] | boolean;

export interface GridProps {
  /**
   * Align all columns.
   * align={["start-xs", "center-xs", "end-xs", "top-xs", "middle-xs", "bottom-xs", "around-xs", "between-xs"]}
   */
  align?: GridAlignment[];
  /**
   * Grid content.
   * Use GridColumn component as children in most cases.
   */
  children?: React.ReactNode;
  /**
   * Additional class.
   */
  className?: string;
  /**
   * Should all of the columns (on the same row) have equal height.
   */
  equalHeight?: boolean;
  /**
   * Use when in need for either none or default spacing between columns.
   */
  gutter?: 'default' | 'none';
  /**
   * Disable wrapping in certain breakpoint(s).
   * Can be used with breakpoints or as boolean value.
   * noWrap={["xs", "sm", "md", "lg", "xl"]}
   */
  noWrap?: GridNoWrap;
  /**
   * Reverse all columns.
   * reverse={["xs", "sm", "md", "lg", "xl"]}
   */
  reverse?: Break[];
  /**
   * Additional style.
   */
  style?: CSSProperties;
  /**
   * Enable wrapping in certain breakpoint(s).
   * wrap={["xs", "sm", "md", "lg", "xl"]}
   */
  wrap?: Break[];
}

export const Grid = ({
  align,
  children,
  className,
  gutter = 'default',
  equalHeight,
  noWrap,
  reverse,
  style,
  wrap,
}: GridProps): React.ReactElement => {
  const BEM = () => {
    const classArray = [styles['grid']];

    if (equalHeight) {
      classArray.push(styles['grid--equalheight']);
    }

    if (gutter) {
      classArray.push(styles[`grid--gutter-${gutter}`]);
    }

    if (reverse) {
      reverse.forEach((r) => classArray.push(styles[`grid--reverse-${r}`]));
    }

    if (align) {
      align.forEach((a) => classArray.push(styles[`grid--${a}`]));
    }

    if (noWrap) {
      if (Array.isArray(noWrap)) {
        noWrap.forEach((n) => classArray.push(styles[`grid--no-wrap-${n}`]));
      } else {
        classArray.push(styles['grid--no-wrap-xs']);
      }
    }

    if (wrap) {
      wrap.forEach((val: string) => classArray.push(styles[`grid--wrap-${val}`]));
    }

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };

  return (
    <div className={BEM()} style={style}>
      {children}
    </div>
  );
};
