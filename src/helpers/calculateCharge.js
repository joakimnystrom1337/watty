export const calculateCharge = ({ beforeCharge, afterCharge, battery }) => {
  return Math.round(((afterCharge - beforeCharge) / 100 * battery))
};
