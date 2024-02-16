function celsius_to_fahrenheit(cel){
    let far;
    far = (cel * (9/5)) + 32;
    return far;
}

let celsius;
for (celsius = -30; celsius <= 150; celsius += 10){
    let fahrenheit;
    fahrenheit = celsius_to_fahrenheit(celsius);
    console.log("-----------------------");
    console.log("Celsius: " + celsius);
    console.log("Fahrenheit: " + fahrenheit);
}

console.log("-----------------------");