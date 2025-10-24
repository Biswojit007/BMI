const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `❌ Please enter a valid height.`;
        result.className = '';
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `❌ Please enter a valid weight.`;
        result.className = '';
        return;
    }

    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    let message = `Your BMI is <strong>${bmi}</strong><br>`;

    if (bmi < 18.6) {
        message += "⚠️ You are <strong>Underweight</strong>";
        result.className = '';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        message += "✅ You are in the <strong>Normal range</strong>";
        result.className = 'result-success';
    } else {
        message += "⚠️ You are <strong>Overweight</strong>";
        result.className = '';
    }

    result.innerHTML = message;
});
