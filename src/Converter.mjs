
export function wMetricToImperial(weightInKg) {
    let stones = weightInKg * 0.157473;
    let pounds = (stones % 1) * 14;
    return `${Math.floor(stones)}st ${Math.round(pounds)}lbs`
}
export function wImperialToMetric(weightInStones, weightInPounds) {
    let imperialWeight = weightInStones + (weightInPounds / 14)
    let weightInKg = imperialWeight / 0.157573
    return Math.round(weightInKg);
}
export function heightInMeters(heightInCm) {
    return heightInCm / 100;
}

export function hImperialToMetric(heightInFeet, heightInInch) {
    return (heightInFeet * 30.48) + (heightInInch * 2.54)
}
