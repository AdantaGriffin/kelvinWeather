

submit.addEventListener('click', () => {
    const tempInput = document.getElementById('temp-degree');
    const submitButton = document.getElementById('submit');
    
    const kelvin = tempInput.value;

    // The weather given in kelvin
    let celsius = kelvin - 273;
    // Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
    let fahrenheit = celsius * (9/5) + 32;
    //this equation calculate calculate gahrenheit
    fahrenheit - Math.floor(fahrenheit);
    //When you convert from Celsius to Fahrenheit, you often get a decimal number. Math.floor method rounds down the Fahrenheit temperature.

    const ageDisplay = document.getElementById('age');

    const response = [`The temperature is ${fahrenheit} degrees fahrenheit.`]

    ageDisplay.innerText = response;
})