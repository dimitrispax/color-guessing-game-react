import { useDebugValue, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import TitleBar from "./components/TitleBar";
import ResultBar from "./components/ResultBar";
import ColorsContainer from "./components/ColorsContainer";


function App(props) {

  const [resultBarMessage, setResultBarMessage] = useState("Select the correct color.");
  const [resultBarButtonText, setResultBarButtonText] = useState("NEW COLORS");

  const [titleBarColor, setTitleBarColor] = useState("");
  const [playAgainFlagData, setplayAgainFlagData] = useState(false);
  const [correctBtn, setCorrectBtn] = useState("");
  const [colorsArray, setColorsArray] = useState([]);

  const rowLength = 3;


  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (playAgainFlagData) {
      initializeGame();
      setplayAgainFlagData(false);
    }
  }, [playAgainFlagData]);

  useEffect(() => {
    console.log("correctBtn: " + correctBtn);
  }, [correctBtn]);

  // ES6 FUNCTION
  const initializeGame = () => {
    let rowArray = [];
    let row = [];
    for (let i = 1; i <= 6; i++) {
      row.push(randomColorGenerator());

      if (i % rowLength === 0 && i != 0) {
        rowArray.push(row);
        row = []
      }
    }
    let randomRow = Math.floor(Math.random() * rowArray.length)
    let randomCol = Math.floor(Math.random() * rowArray[0].length)

    console.log(randomRow, randomCol)

    setCorrectBtn(rowArray[randomRow][randomCol])
    setColorsArray(rowArray);
  }

  function randomColorGenerator() {
    let red = Math.floor(Math.random() * 256);                         // Setting a random value (0-255) for the red.
    let green = Math.floor(Math.random() * 256);                       // Setting a random value (0-255) for the green.
    let blue = Math.floor(Math.random() * 256);                        // Setting a random value (0-255) for the blue.

    return "rgb(" + red + ", " + green + ", " + blue + ")";            // Returning the whole new rgb(r,g,b) string.
  }

  return (
    <div>
      <TitleBar
        correctBtn={correctBtn}
        titleBarColor={titleBarColor}
      />
      <ResultBar
        resultBarMessage={resultBarMessage}
        resultBarButtonText={resultBarButtonText}
        playAgain={() => { initializeGame() }}
      />
      <ColorsContainer
        correctBtn={correctBtn}
        colorsArray={colorsArray}
      // messageContainer={setMessageContainerData}
      // playAgainContainer={setplayAgainContainerData}
      // titleColorContainer={setTitleColorContainerData}
      />
    </div>
  );
}

export default App;
