import { logDOM } from '@testing-library/dom'
import React from 'react'
import ReactSelect from 'react-select'

const options = [
  { value: '64', label: '64 kWh' },
  { value: '24 ', label: '24 kWh' }
]

const customStyles =  {
  container: (provided, state) => {
    return {...provided, margin: '20px 0'}
  },
  control: (provided, state) => {
    return {...provided, backgroundColor: 'transparent'}
  },
  ValueContainer: (provided, state) => {
    return {...provided, color: 'white'}
  },
  placeholder: (provided, state) => {
    return {...provided, color: 'white'}
  },
  singleValue: (provided, state) => {
    return {...provided, color: 'white'}
  },
  option: (provided, state) => {
    console.log(provided);
    return {...provided, color: 'black'}
  },
}

export const Select = ({onChange, value,...propa}) => (
  <ReactSelect 
    onChange={onChange} 
    styles={customStyles} 
    placeholder='Batterityp' 
    value={value}
    options={options} />
    
)
