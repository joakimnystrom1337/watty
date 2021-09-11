import './App.css';
import logo from './icons/logo.svg'
import {Button} from '@atoms/Button/Button';
import Slider from 'Components/Atoms/Slider';
import { useState } from 'react';
import Select from 'Components/Atoms/Select';

const initialState = {
  beforeCharge: 50,
  afterCharge: 100,
  type: '64'
}

const calculateCharge = ({beforeCharge,
  afterCharge,
  battery}) =>{
    return Math.floor(battery - (beforeCharge/afterCharge * battery))
  }
function App() {
  const [formState, setFormState] = useState(initialState)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <div className="main">
      <Slider onChange={val => setFormState({...formState, beforeCharge: val})} value={formState.beforeCharge} label={`Batteri innan laddning`}/>
      <Slider onChange={val => setFormState({...formState, afterCharge: val})} value={formState.afterCharge} label={`Batteri efter laddning`}/>
      <Select onChange={val => setFormState({...formState, type: val})} value={formState.type}/>
      
        {calculateCharge({afterCharge: 100,beforeCharge: 90 ,battery: 64})}
      </div>
    </div>
  );
}

export default App;
