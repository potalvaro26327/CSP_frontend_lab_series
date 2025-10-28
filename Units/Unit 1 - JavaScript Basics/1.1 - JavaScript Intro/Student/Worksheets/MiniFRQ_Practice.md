# Mini FRQ — Lab 1.1 (Intro)

**Prompt:** Write JavaScript that declares two variables `width` and `height`. Compute and log the **area** and **perimeter** of a rectangle. Then log a sentence using template literals to summarize the results.


let width = 8;
let height = 5;

let area = width * height;
let perimeter = 2 * (width + height);

console.log("Area:", area);
console.log("Perimeter:", perimeter);

console.log(`The rectangle is ${width} units wide and ${height} units tall, 
with an area of ${area} square units and a perimeter of ${perimeter} units.`);