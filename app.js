
const button = document.getElementById('button');
const result = document.getElementById('result');
const classification = document.getElementById('classification')

button.addEventListener('click', ()=>{
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let finalBmi = ((weight / (height * height )) * 703 );
    //round two decimal places
    finalBmi = finalBmi.toFixed(1)


    if (finalBmi < 18.5){
        classification.style.color = 'red'
        classification.textContent = `Your BMI is ${finalBmi}. You are classified as Underweight.`
    }
    if (finalBmi > 18.5 && finalBmi < 24.9) {
        classification.style.color = 'green'
        classification.textContent = `Your BMI is ${finalBmi}. You are classified as Normal Weight.`
    }
    if (finalBmi > 25 && finalBmi < 29.9) {
        classification.style.color = 'red'
        classification.textContent = `Your BMI is ${finalBmi}. You are classified as Overweight.`
    }
    if (finalBmi > 30) {
        classification.style.color = 'red'
        classification.textContent = `Your BMI is ${finalBmi}. You are classified as Obese.`
    }


    result.value = finalBmi
    
})


