import React from 'react'
import RcSlider from 'rc-slider'
import 'rc-slider/assets/index.css'
import styles from './Slider.module.css'

export const Slider = ({ label, value, onChange, ...props }) => {
    return (
        <div className={styles.main}>
            <label className={styles.label}>
                {label} <strong>{value}%</strong>
            </label>
            <RcSlider value={value} onChange={onChange} />
        </div>
    )
}
