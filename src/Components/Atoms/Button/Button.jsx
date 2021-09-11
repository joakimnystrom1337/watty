import React from 'react';
import styles from './Button.module.css'
export const Button = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <button className={styles.root} type="button" onClick={onClick} {...props} >
      {children}
    </button>
  );
};
