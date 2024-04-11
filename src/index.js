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