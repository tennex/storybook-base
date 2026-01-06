import type { ReactNode } from 'react';

import styles from './container.module.scss';

export interface ContainerProps {
  /**
   * Content
   */
  children: ReactNode;
  /**
   * Additional class
   */
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  const BEM = () => {
    const classArray = [styles['container']];

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };

  return <div className={BEM()}>{children}</div>;
};
