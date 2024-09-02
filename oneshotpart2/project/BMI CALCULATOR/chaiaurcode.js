const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please give a valid height";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please give a valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = "";

        if (bmi < 18.6) {
            category = "Under Weight";
        } else if (bmi >= 18.6 && bmi < 24.9) {
            category = "Normal Weight";
        } else if (bmi >= 24.9 && bmi < 30) {
            category = "Over Weight";
        } else {
            category = "Obese";
        }

        results.innerHTML = `<span>${bmi}</span> - ${category}`;
    }
});
