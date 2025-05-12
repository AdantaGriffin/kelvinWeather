# Kelvin Weather

## Overview
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

<figure>
    <img src="https://content.codecademy.com/projects/introduction-to-javascript/learn-javascript-introduction/kelvin-weather/Kelvin%20Thermometers.svg" height="200px" width="200px"/>
    <figcaption>For example, 283 K converts to 10 °C which converts to 50 °F.</figcaption>
</figure>

## Installation
Set up a html:5 and css doc in your text editor of choice.

## Steps
1.
The forecast today is <code>293</code.> Kelvin. To start, create a variable named <code>kelvin</code>, and set it equal to <code>293</code>.

The value saved to <code>kelvin</code> will stay constant. Choose the variable type with this in mind.

2.
Write a comment above that explains this line of code.

3.
Celsius is similar to Kelvin — the only difference is that Celsius is <code>273</code> degrees less than Kelvin.

Let’s convert Kelvin to Celsius by subtracting <code>273</code> from the <code>kelvin</code> variable. Store the result in another variable, named <code>celsius</code>.

4.
Write a comment above that explains this line of code.

5.
Use this equation to calculate Fahrenheit, then store the answer in a variable named <code>fahrenheit</code>.

Fahrenheit = Celsius * (9/5) + 32

In the next step we will round the number saved to <code>fahrenheit</code>. Choose the variable type that allows you to change its value.

6.
Write a comment above that explains this line of code.

7.
When you convert from Celsius to Fahrenheit, you often get a decimal number.

Use the <code>.floor()</code> method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the <code>fahrenheit</code> variable.

8.
Write a comment above that explains this line of code.

9.
Use <code>console.log</code> and string interpolation to log the temperature in fahrenheit to the console as follows:
    "The temperature is TEMPERATURE degrees Fahrenheit."
Use string interpolation to replace <code>TEMPERATURE</code> with the value saved to <code>fahrenheit</code>.

10.
Run your program to see your results!

11.
By using variables, your program should work for any Kelvin temperature — just change the value of <code>kelvin</code> and run the program again.

What’s <code>0</code> Kelvin in Fahrenheit?

12.
Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit.

If you’d like extra practice, try this:

    Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

    Round down the Newton temperature using the .floor() method
    Use console.log and string interpolation to log the temperature in newton to the console

## Credits
www.codecademy.com
### License
MIT License

Copyright (c) 2025 Adanta Griffin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.