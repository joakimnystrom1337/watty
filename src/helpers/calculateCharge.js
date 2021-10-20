export const calculateCharge = ({ beforeCharge, afterCharge, battery }) => {
    return (((afterCharge - beforeCharge) / 100) * battery).toFixed(1)
}
