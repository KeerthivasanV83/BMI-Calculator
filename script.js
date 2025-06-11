function calculateBMI() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var result = document.getElementById("result");
    var category = document.getElementById("category");
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    if (isNaN(weight) || weight <= 0) {
        result.textContent = "--";
        category.textContent = "Please enter a valid weight.";
        return;
    }
    if (isNaN(height) || height <= 0) {
        result.textContent = "--";
        category.textContent = "Please enter a valid height.";
        return;
    }
    var bmi = weight / Math.pow(height / 100, 2);
    var roundedBMI = bmi.toFixed(1);
    result.textContent = roundedBMI;
    var bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Underweight 🥲";
    }
    else if (bmi < 24.9) {
        bmiCategory = "Normal weight 😄";
    }
    else if (bmi < 29.9) {
        bmiCategory = "Overweight 😯";
    }
    else {
        bmiCategory = "Obese 😨";
    }
    category.textContent = bmiCategory;
}
document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
