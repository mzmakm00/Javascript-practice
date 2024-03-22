
function evaluateExpression(expression) {
    try {

      if (!/\d$/.test(expression)) {
        throw new EvalError("Last digit should be an integer");
      }

    } catch (error) {
      if (error instanceof EvalError) {
        console.error("EvalError:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  }
  

  const invalidExpression1 = "2 + - *"; 
  const result2 = evaluateExpression(invalidExpression1);
  console.log(result2); 
  

