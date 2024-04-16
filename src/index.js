import './style.css';
import * as BMI from './BMI.mjs';
import * as Converter from './Converter.mjs';
import * as IdealWeight from './IdealWeight.mjs'

let rMetric = document.querySelector('.radio-metric>input');
let rImperial = document.querySelector('.radio-imperial>input');

setListenersOnMetricInputs()

rMetric.addEventListener('click', () => {
    displayForm('metric');
    setListenersOnMetricInputs();
});

rImperial.addEventListener('click', () => {
    displayForm('imperial');
    setListenersOnImperialInputs();
});

function setListenersOnMetricInputs() {
    document.querySelector('#height-cm').addEventListener('blur', () => {
        let valid = checkMetricValidity()
        if (valid == true) {
            showResultContainer();
            dispalyMetricBmiInfo(
                document.querySelector('#height-cm').value,
                document.querySelector('#weight-kg').value)
        }
    })
    document.querySelector('#weight-kg').addEventListener('blur', () => {
        let valid = checkMetricValidity()
        if (valid == true) {
            showResultContainer();
            dispalyMetricBmiInfo(
                document.querySelector('#height-cm').value,
                document.querySelector('#weight-kg').value)
        }
    })

}
function setListenersOnImperialInputs() {
    document.querySelector('#height-ft').addEventListener('blur', () => {
        let valid = checkImperialValidity()
        if (valid == true) {
            showResultContainer();
            displayImperialBmiInfo(
                document.querySelector('#height-ft').value,
                document.querySelector('#height-in').value,
                document.querySelector('#weight-st').value, document.querySelector('#weight-lbs').value)
        }
    })
    document.querySelector('#height-in').addEventListener('blur', () => {
        let valid = checkImperialValidity()
        if (valid == true) {
            showResultContainer();
            displayImperialBmiInfo(
                document.querySelector('#height-ft').value,
                document.querySelector('#height-in').value,
                document.querySelector('#weight-st').value, document.querySelector('#weight-lbs').value)
        }
    })
    document.querySelector('#weight-st').addEventListener('blur', () => {
        let valid = checkImperialValidity()
        if (valid == true) {
            showResultContainer();
            displayImperialBmiInfo(
                document.querySelector('#height-ft').value,
                document.querySelector('#height-in').value,
                document.querySelector('#weight-st').value, document.querySelector('#weight-lbs').value)
        }
    })
    document.querySelector('#weight-lbs').addEventListener('blur', () => {
        let valid = checkImperialValidity()
        if (valid == true) {
            showResultContainer();
            displayImperialBmiInfo(
                document.querySelector('#height-ft').value,
                document.querySelector('#height-in').value,
                document.querySelector('#weight-st').value, document.querySelector('#weight-lbs').value)
        }
    })

}

function checkMetricValidity() {
    let height = document.querySelector('#height-cm')
    let weight = document.querySelector('#weight-kg')

    if (height.value < 100 || height.value > 270) {
        displayError(height)
        return false;
    } else {
        removeError(height);
    }

    if (weight.value > 380 || weight.value < 18) {
        displayError(weight)
        return false
    } else {
        removeError(weight);
    }
    if (height == null || weight == null) {
        return false
    }
    return true;
}
function checkImperialValidity() {
    let heightFt = document.querySelector('#height-ft');
    let heightIn = document.querySelector('#height-in');
    let weightSt = document.querySelector('#weight-st')
    let weightLbs = document.querySelector('#weight-lbs')

    if (heightFt.value < 3 || heightFt.value > 8) {
        displayError(heightFt.parentElement);
        return false;
    } else {
        removeError(heightFt.parentElement);
    }
    if (heightIn.value < 0 || heightIn.value > 11) {
        displayError(heightIn.parentElement);
        return false;
    } else {
        removeError(heightIn.parentElement);
    }

    if (weightSt.value > 59 || weightSt.value < 3) {
        displayError(weightSt.parentElement)
        return false
    } else {
        removeError(weightSt.parentElement);
    }

    if (weightLbs.value > 13 || weightLbs.value < 0) {
        displayError(weightLbs.parentElement)
        return false
    } else {
        removeError(weightLbs.parentElement);
    }

    if (heightFt == null ||
        heightIn == null ||
        weightSt == null ||
        weightLbs == null) 
    {
        return false
    }
    return true;
}

function removeError(sibling) {
    let errorDOM = sibling.parentElement.parentElement.querySelector('.error');
    errorDOM.style.display = 'none'
}

function displayError(sibling) {
    let errorDOM = sibling.parentElement.parentElement.querySelector('.error')
    errorDOM.style.display = 'block'
}

function dispalyMetricBmiInfo(heightInCm, weightInKg) {
    let bmi = BMI.getBMIMetric(heightInCm, weightInKg);
    document.querySelector('.result>h2').textContent = bmi;

    document.querySelector('.result>p').innerHTML = `Your BMI suggests you're ${BMI.getWeightCategory(bmi)}.
    Your ideal weight is between <b> ${IdealWeight.getMetricIdealWeight(Converter.heightInMeters(heightInCm))} <b>.`;
}
function displayImperialBmiInfo(heightInFeet, heightInInch, weightInStones, weightInPounds) {
    let bmi = BMI.getBMIImperial(heightInFeet, heightInInch, weightInStones, weightInPounds);
    document.querySelector('.result>h2').textContent = bmi;
    document.querySelector('.result>p').innerHTML = `Your BMI suggests you're ${BMI.getWeightCategory(bmi)}.
    Your ideal weight is between <b> ${IdealWeight.getImperialIdealWeight(heightInFeet, heightInInch)} <b>.`;
}
function showResultContainer() {
    document.querySelector('.form-holder>.result').classList.remove('hidden');
    document.querySelector('.form-holder>.welcome').classList.add('hidden');
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