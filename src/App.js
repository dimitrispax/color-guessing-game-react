import { useEffect, useState } from 'react';

import TitleBar from "./components/TitleBar/TitleBar";
import ResultBar from "./components/ResultBar/ResultBar";
import ColorsContainer from "./components/ColorsContainer/ColorsContainer";

const App = (props) => {

  const [resultBarMessage, setResultBarMessage] = useState("Select the correct color.");
  const [resultBarButtonText, setResultBarButtonText] = useState("NEW COLORS");
  const [titleBarColor, setTitleBarColor] = useState("rgb(28, 173, 173)");
  const [playAgainFlagData, setplayAgainFlagData] = useState(false);
  const [correctColor, setCorrectColor] = useState("");
  const [colorsArray, setColorsArray] = useState([]);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (playAgainFlagData) {
      initializeGame();
      setplayAgainFlagData(false);
    }
  }, [playAgainFlagData]);

  const initializeGame = () => {
    let squareData = [];
    let id = 0;
    for (let i = 1; i <= 6; i++) {
      squareData.push(randomColorGenerator(i - 1));
    }
    let randomSquare = Math.floor(Math.random() * squareData.length)
    setCorrectColor(squareData[randomSquare].color);
    setColorsArray(squareData);
    setTitleBarColor("rgb(28, 173, 173)")
  }

  const randomColorGenerator = (id) => {
    let red = Math.floor(Math.random() * 256);    // Setting a random value (0-255) for the red.
    let green = Math.floor(Math.random() * 256);  // Setting a random value (0-255) for the green.
    let blue = Math.floor(Math.random() * 256);   // Setting a random value (0-255) for the blue.
    return { color: "rgb(" + red + ", " + green + ", " + blue + ")", visibility: 'visible', id: id }//"rgb(" + red + ", " + green + ", " + blue + ")";            // Returning the whole new rgb(r,g,b) string.
  }

  return (
    <div>
      <TitleBar
        correctColor={correctColor}
        titleBarColor={titleBarColor}
      />
      <ResultBar
        resultBarMessage={resultBarMessage}
        resultBarButtonText={resultBarButtonText}
        playAgain={() => { initializeGame() }}
      />
      <ColorsContainer
        correctColor={correctColor}
        colorsArray={colorsArray}
        setColorsArray={setColorsArray}
        setResultBarMessage={setResultBarMessage}
        setResultBarButtonText={setResultBarButtonText}
        setTitleBarColor={setTitleBarColor}
      />
    </div>
  );
}

export default App;
