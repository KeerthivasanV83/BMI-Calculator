function calculateBMI(): void {
  const weightInput = document.getElementById("weight") as HTMLInputElement;
  const heightInput = document.getElementById("height") as HTMLInputElement;
  const result = document.getElementById("result")!;
  const category = document.getElementById("category")!;

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

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

  const bmi = weight / Math.pow(height / 100, 2);
  const roundedBMI = bmi.toFixed(1);
  result.textContent = roundedBMI;

  let bmiCategory: string;

  if (bmi < 18.5) {
    bmiCategory = "Underweight 🥲";
  } else if (bmi < 24.9) {
    bmiCategory = "Normal weight 😄";
  } else if (bmi < 29.9) {
    bmiCategory = "Overweight 😯";
  } else {
    bmiCategory = "Obese 😨";
  }

  category.textContent = bmiCategory;
}

document.getElementById("calculateBtn")!.addEventListener("click", calculateBMI);
