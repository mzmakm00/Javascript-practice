function accessUndefinedVariable() {
    try {
        const result = undefinedvariable;
        console.log(result);
    } catch (error) {

        if (error instanceof ReferenceError) {
            console.error("ReferenceError: ", error.message);
            console.error("Please ensure the variable is defined before accessing it.");
        } else {
            console.error("An unexpected error occurred: ", error);
        }
    }
}
accessUndefinedVariable();
