import type { ButtonHTMLAttributes } from 'react';

import styles from './button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
}

/** Primary UI component for user interaction */
export const Button = ({ primary = false, size = 'medium', label, ...props }: ButtonProps) => {
  const BEM = () => {
    const classArray = [styles['button']];

    classArray.push(styles[`button--${size}`]);

    if (primary) {
      classArray.push(styles['button--primary']);
    } else {
      classArray.push(styles['button--secondary']);
    }

    return classArray.join(' ');
  };

  return (
    <button className={BEM()} type="button" {...props}>
      {label}
    </button>
  );
};
