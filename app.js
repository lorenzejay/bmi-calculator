// dom event listener 
const button = document.querySelector('.button');
const result = document.getElementById('result');
const classification = document.getElementById('classification');

button.addEventListener('click', () =>{
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    

    let calculations = (weight / (height * height) ) * 703;
    result.value = calculations.toFixed(1)


    // let them know what their BMI score means

    if (result.value < 18.5 ){
        classification.style.color = 'red'
        classification.textContent = 'You are Underweight'
    }
    if (result.value >= 18.5 && result.value <24.9) {
        classification.style.color = 'green'
        classification.textContent = 'You are Normal Weight'
    }
    if (result.value >=25 && result.value < 29.9) {
        classification.style.color = 'red'
        classification.textContent = 'You are Overweight'
    }
    if (result.value > 30) {
        classification.style.color = 'red'
        classification.textContent = 'You are Obese'
    }
})