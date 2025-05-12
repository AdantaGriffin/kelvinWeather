let kelvin = 293;
// The weather given in kelvin
let celsius = kelvin - 273;
// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
let fahrenheit = celsius * (9/5) + 32;
//this equation calculate calculate gahrenheit
fahrenheit - Math.floor(fahrenheit);
//When you convert from Celsius to Fahrenheit, you often get a decimal number. Math.floor method rounds down the Fahrenheit temperature.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
//logs our function to the cpu