document.getElementById("Multiply").addEventListener("click", function(event) {
    event.preventDefault();
    calculate("multiply");
});

document.getElementById("Divide").addEventListener("click", function(event) {
    event.preventDefault();
    calculate("divide");
});

function calculate(operation) {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("result").textContent = "Invalid input. Please enter valid numbers.";
    } else {
        let result;
        if (operation === "multiply") {
            result = firstNumber * secondNumber;
            document.getElementById("result").textContent = `Multiplication: ${firstNumber} * ${secondNumber} = ${result}`;
        } else if (operation === "divide") {
            if (secondNumber === 0) {
                document.getElementById("result").textContent = "Error: Division by zero.";
            } else {
                result = firstNumber / secondNumber;
                document.getElementById("result").textContent = `Division: ${firstNumber} / ${secondNumber} = ${result}`;
            }
        }
    }
}