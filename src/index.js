'use strict';

let countOfBalls = 12;
let diameter = 50;
let thickness = 0.1;
let volume = 0;

for (let i = 0; i <= countOfBalls; i++) {
  volume = (Math.PI * diameter ** 3) / 6;
  volume += thickness;
}

console.log(`The volume of ${countOfBalls} balls is ${volume / 1000} liters`);
