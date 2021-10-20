import { useState } from 'react'
import './App.css'
import logo from './icons/logo.svg'
import Slider from '@atoms/Slider'
import Select from '@atoms/Select'
import { calculateCharge } from './helpers/calculateCharge'

const initialState = {
    beforeCharge: 50,
    afterCharge: 100,
    type: '64',
}

const ChargeSum = ({ values }) => {
    if (!values.battery) {
        return <p>Välj batteri!</p>
    }
    return (
        <p>
            {' '}
            <strong>{calculateCharge(values)}</strong> kW
        </p>
    )
}

function App() {
    const [formState, setFormState] = useState(initialState)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" />
            </header>
            <div className="main">
                <Slider
                    onChange={(val) => {
                        if (val >= formState.afterCharge) return false
                        setFormState({ ...formState, beforeCharge: val })
                    }}
                    value={formState.beforeCharge}
                    label={`Batteri innan laddning`}
                />
                <Slider
                    onChange={(val) => {
                        if (val <= formState.beforeCharge) return false
                        setFormState({ ...formState, afterCharge: val })
                    }}
                    value={formState.afterCharge}
                    label={`Batteri efter laddning`}
                />
                <Select
                    onChange={(val) =>
                        setFormState({ ...formState, type: val })
                    }
                    value={formState.type}
                    options={[
                        { value: '64', label: '64 kWh' },
                        { value: '24 ', label: '24 kWh' },
                        { value: '15.6 ', label: '15.6 kWh' },
                    ]}
                />
                <ChargeSum
                    values={{ ...formState, battery: formState.type.value }}
                />
            </div>
        </div>
    )
}

export default App
