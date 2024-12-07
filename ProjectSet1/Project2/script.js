const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector('#result');
    const showres = document.querySelector('#showres');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please enter a valid height.`;
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please enter a valid weight.`;
    } else {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
        if (bmi < 18.6) {
            showres.innerHTML = `You are underweight`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            showres.innerHTML = `You fall under the category of normal weight`;
        } else {
            showres.innerHTML = `You are overweight. Wazan Kam Krr apna`;
        }
    }


    // console.log(bmi);
});
