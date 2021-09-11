import React from 'react';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './Slider.module.css'

export const Slider = ({
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className={styles.main}>
      <label>{label} <strong>{value}%</strong></label>
      <RcSlider value={value} step={10} onChange={onChange}/>
    </div>
  );
};
