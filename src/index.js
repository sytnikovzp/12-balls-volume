'use strict';

const COUNTOFBALLS = 12;
const DIAMETER = 0.5;
const THICKNESS = 0.01;
let volumeOfSmallestBall = 0;
let commonVolume = 0;
let result = 0;

volumeOfSmallestBall = (Math.PI * DIAMETER ** 3) / 6;

for (let i = 1; i <= COUNTOFBALLS; i++) {
  result = volumeOfSmallestBall + THICKNESS;
  commonVolume += result;
  console.log(`The volume of ${i} ball(s) with thickness is ${commonVolume} meters^3`)
}
