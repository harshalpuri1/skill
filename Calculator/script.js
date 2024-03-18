function calculateNumbers(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      console.error("Error: Both inputs must be numbers.");
      return;
    }
  
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;
  
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = `
      Addition: ${addition}<br>
      Subtraction: ${subtraction}<br>
      Multiplication: ${multiplication}<br>
      Division: ${division}
    `;
  }
  
  const num1 = prompt("Enter the first number:");
  const num2 = prompt("Enter the second number:");
  
  calculateNumbers(num1, num2);