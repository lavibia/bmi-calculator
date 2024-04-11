import { wMetricToImperial } from "./Converter.mjs";

function minIdealWeight(heightInMeters) {
    //calculate min weight using a BMI of 18.5
    let minWeight = 18.5 * (heightInMeters * heightInMeters)
    return Math.round(minWeight * 10) / 10
}
function maxIdealWeight(heightInMeters) {
    //calculate max weight using a BMI of 24.9
    let maxWeight = 24.9 * (heightInMeters * heightInMeters)
    return Math.round(maxWeight * 10) / 10
}

export function getMetricIdealWeight(heightInMeters) {
    return `${minIdealWeight(heightInMeters)}kgs - ${maxIdealWeight(heightInMeters)}kgs`
}

export function getImperialIdealWeight(heightInMeters) {
    return `${wMetricToImperial(minIdealWeight(heightInMeters))} - ${wMetricToImperial(maxIdealWeight(heightInMeters))}`
}
// console.log(getMetricIdealWeight(1.85));
// console.log(getImperialIdealWeight(1.85));