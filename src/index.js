import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

let color;
let correctBtn;

initializeGame();

function initializeGame() {
  color = randomColorGenerator();
  let lotteryArray = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6'];
  correctBtn = lotteryArray[Math.floor(Math.random() * 7)];
  while (typeof correctBtn == 'undefined') {
    correctBtn = lotteryArray[Math.floor(Math.random() * 7)];
  }
}



function randomColorGenerator() {
  let red = Math.floor(Math.random() * 256);                         // Setting a random value (0-255) for the red.
  let green = Math.floor(Math.random() * 256);                       // Setting a random value (0-255) for the green.
  let blue = Math.floor(Math.random() * 256);                        // Setting a random value (0-255) for the blue.

  return "rgb(" + red + ", " + green + ", " + blue + ")";            // Returning the whole new rgb(r,g,b) string.
}




ReactDOM.render(
  <App color={color} correctBtn={correctBtn} />,
  document.getElementById('root')
);

