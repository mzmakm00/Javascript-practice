function celsiusToFahrenheit(celsius) {
    console.log(`${celsius}°C is ${(celsius * 9/5) + 32}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    console.log(`${fahrenheit}°F is ${(fahrenheit - 32) * 5/9}°C`);
}

const celsiusTemp = 60;
const fahrenheitTemp = 45;

celsiusToFahrenheit(celsiusTemp);
fahrenheitToCelsius(fahrenheitTemp);
