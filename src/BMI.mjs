import * as Converter from './Converter.mjs'
export function getBMIMetric(heightInCm, weightInKg) {
    let heightInMeters = Converter.heightInMeters(heightInCm)
    let bmi = weightInKg / (heightInMeters * heightInMeters);
    return Math.round(bmi * 10) / 10
}
export function getBMIImperial(heightInFeet, heightInInch, weightInStones, weightInPounds) {
    let height = Converter.hImperialToMetric(heightInFeet, heightInInch);
    let weight = Converter.wImperialToMetric(weightInStones, weightInPounds);
    return getBMIMetric(height, weight);
}
export function getWeightCategory(bmi) {
    if (bmi < 18.5) {
        return 'underweight';
    }
    if (bmi < 25) {
        return 'a healthy weight'
    }
    if (bmi < 30) {
        return 'overweight'
    }
    return 'obese'
}
