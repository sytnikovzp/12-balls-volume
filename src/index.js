'use strict';

const COUNT_OF_BALLS = 12;
const DIAMETER = 0.5;
const THICKNESS = 0.01;
let commonVolume = 0;

for (let i = 1; i <= COUNT_OF_BALLS; i++) {
  let currentDiameter = DIAMETER + 2 * (i-2) * THICKNESS;
  let currentVolume = Math.PI * currentDiameter ** 3 / 6;
  commonVolume += currentVolume;
}

console.log(`The volume of ${COUNT_OF_BALLS} ball(s) with thickness is ${commonVolume} meters^3`)