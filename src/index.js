import './style.css';

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
        heightMetricDOM.style.display = 'flex';
        weightMetricDOM.style.display = 'flex';
        heightImperialDOM.style.display = 'none';
        weightImperialDOM.style.display = 'none';
    } else {
        heightMetricDOM.style.display = 'none';
        weightMetricDOM.style.display = 'none';
        heightImperialDOM.style.display = 'flex';
        weightImperialDOM.style.display = 'flex';
    }
}