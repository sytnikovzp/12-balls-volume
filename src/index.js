'use strict';

const COUNT_OF_BALLS = 12;
const DIAMETER = 0.5;
const THICKNESS = 0.01;
let volumeOfSmallestBall = 0;
let commonVolume = 0;
let currentVolume = 0;

volumeOfSmallestBall = (Math.PI * DIAMETER ** 3) / 6;

for (let i = 1; i <= COUNT_OF_BALLS; i++) {
  currentVolume = Math.PI * (DIAMETER + THICKNESS * i * 2) ** 3 / 6;
  commonVolume += currentVolume;
}

console.log(`The volume of ${COUNT_OF_BALLS} ball(s) with thickness is ${commonVolume} meters^3`)