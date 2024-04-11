import './style.css';
import * as BMI from './BMI.mjs';
import * as Converter  from './Converter.mjs';
import * as IdealWeight from './IdealWeight.mjs'

let rMetric = document.querySelector('.radio-metric>input');
let rImperial = document.querySelector('.radio-imperial>input');

rMetric.addEventListener('click', () => {
    displayForm('metric');
});

rImperial.addEventListener('click', () => {
    displayForm('imperial')
});


//dispalyMetricBmiInfo(185,80)
// displayImperialBmiInfo(5,11,11,4)

function dispalyMetricBmiInfo(heightInCm, weightInKg){
    let bmi = BMI.getBMIMetric(heightInCm, weightInKg);
    document.querySelector('.result>h2').textContent=bmi;

    document.querySelector('.result>p').innerHTML=`Your BMI suggests you're ${BMI.getWeightCategory(bmi)}.
    Your ideal weight is between <b> ${IdealWeight.getMetricIdealWeight(Converter.heightInMeters(heightInCm))} <b>.`;
}
function displayImperialBmiInfo(heightInFeet, heightInInch, weightInStones, weightInPounds){
    let bmi = BMI.getBMIImperial(heightInFeet,heightInInch,weightInStones, weightInPounds);
    document.querySelector('.result>h2').textContent=bmi;
    document.querySelector('.result>p').innerHTML=`Your BMI suggests you're ${BMI.getWeightCategory(bmi)}.
    Your ideal weight is between <b> ${IdealWeight.getImperialIdealWeight(heightInFeet,heightInInch)} <b>.`;
}
function displayForm(measure) {
    let heightMetricDOM = document.querySelector('.height-metric');
    let weightMetricDOM = document.querySelector('.weight-metric');
    let heightImperialDOM = document.querySelector('.height-imperial');
    let weightImperialDOM = document.querySelector('.weight-imperial');

    if (measure === 'metric') {
        document.querySelector('.height-fieldset').style.gridArea = '2/1/3/7'
        document.querySelector('.weight-fieldset').style.gridArea = '2/7/3/13'
        heightMetricDOM.style.display = 'flex';
        weightMetricDOM.style.display = 'flex';
        heightImperialDOM.style.display = 'none';
        weightImperialDOM.style.display = 'none';
    } else {
        document.querySelector('.height-fieldset').style.gridArea = '2/1/3/13'
        document.querySelector('.weight-fieldset').style.gridArea = '3/1/4/13'
        heightMetricDOM.style.display = 'none';
        weightMetricDOM.style.display = 'none';
        heightImperialDOM.style.display = 'flex';
        weightImperialDOM.style.display = 'flex';
    }
}