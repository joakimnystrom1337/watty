import { calculateCharge } from "helpers/calculateCharge";

it('returns correct value', ()=>{
    expect(calculateCharge({beforeCharge: 50, afterCharge: 100, battery:100})).toEqual(50)
    expect(calculateCharge({beforeCharge: 0, afterCharge: 100, battery:100})).toEqual(100)
    expect(calculateCharge({beforeCharge: 1, afterCharge: 90, battery:100})).toEqual(89)
    expect(calculateCharge({beforeCharge: 50, afterCharge: 100, battery: 67})).toEqual(34)
    expect(calculateCharge({beforeCharge: 10, afterCharge: 90, battery: 67})).toEqual(54)
})