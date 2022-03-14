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
    if (correctBtn !== "") {
      console.log("correctBtn: " + correctBtn);
    }
  }, [correctBtn]);

  // const changeVisibility = (index) => {
  //   const tempColorsArray = [...rowArray]
  //   tempColorsArray[index].visibility = false;
  //   setRowArray
  // }

  // ES6 FUNCTION
  const initializeGame = () => {
    let squareData = [];
    let id = 0;
    for (let i = 1; i <= 6; i++) {
      squareData.push(randomColorGenerator(i - 1));
    }
    let randomSquare = Math.floor(Math.random() * squareData.length)

    console.log("Correct index: " + randomSquare);
    console.log("Object element: " + squareData[randomSquare].color);

    setCorrectBtn(squareData[randomSquare].color);
    setColorsArray(squareData);
  }

  function randomColorGenerator(id) {
    let red = Math.floor(Math.random() * 256);                         // Setting a random value (0-255) for the red.
    let green = Math.floor(Math.random() * 256);                       // Setting a random value (0-255) for the green.
    let blue = Math.floor(Math.random() * 256);                        // Setting a random value (0-255) for the blue.
    return { color: "rgb(" + red + ", " + green + ", " + blue + ")", visibility: 'visible', id: id }//"rgb(" + red + ", " + green + ", " + blue + ")";            // Returning the whole new rgb(r,g,b) string.
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
        setColorsArray={setColorsArray}
      // messageContainer={setMessageContainerData}
      // playAgainContainer={setplayAgainContainerData}
      // titleColorContainer={setTitleColorContainerData}
      />
    </div>
  );
}

export default App;
