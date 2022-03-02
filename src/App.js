import { useDebugValue, useEffect, useRef, useState } from 'react';

import TitleBar from "./components/TitleBar";
import ResultBar from "./components/ResultBar";
import ColorsContainer from "./components/ColorsContainer";


function App(props) {

  const [messageContainerData, setMessageContainerData] = useState("");
  const [playAgainContainerData, setplayAgainContainerData] = useState("");
  const [titleColorContainerData, setTitleColorContainerData] = useState("");
  const [playAgainFlagData, setplayAgainFlagData] = useState(false);
  const [color, setColor] = useState(randomColorGenerator());
  const [correctBtn, setCorrectBtn] = useState(0);

  let message = messageContainerData;
  let buttonText = playAgainContainerData;
  let titleColorApp = titleColorContainerData;


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


  function initializeGame() {
    setColor(randomColorGenerator());
    setCorrectBtn(Math.floor(Math.random() * 7));
    // while (typeof correctBtn === 'undefined') {
    //   setCorrectBtn(Math.floor(Math.random() * 7));
    // }
  }

  function randomColorGenerator() {
    let red = Math.floor(Math.random() * 256);                         // Setting a random value (0-255) for the red.
    let green = Math.floor(Math.random() * 256);                       // Setting a random value (0-255) for the green.
    let blue = Math.floor(Math.random() * 256);                        // Setting a random value (0-255) for the blue.

    return "rgb(" + red + ", " + green + ", " + blue + ")";            // Returning the whole new rgb(r,g,b) string.
  }

  return (
    <div>
      <TitleBar color={color} titleColor={titleColorApp} />
      <ResultBar message={message} buttonText={buttonText} playAgain={setplayAgainFlagData} />
      <ColorsContainer messageContainer={setMessageContainerData} playAgainContainer={setplayAgainContainerData} titleColorContainer={setTitleColorContainerData} color={color} correctBtn={correctBtn} />
    </div>
  );
}

export default App;
