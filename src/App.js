import { useState } from 'react';

import TitleBar from "./components/TitleBar";
import ResultBar from "./components/ResultBar";
import ColorsContainer from "./components/ColorsContainer";

function App() {

  const [messageContainerData, setMessageContainerData] = useState("");
  const [playAgainContainerData, setplayAgainContainerData] = useState("");


  let message = messageContainerData;
  let buttonText = playAgainContainerData;


  return (
    <div>
      <TitleBar />
      <ResultBar message={message} buttonText={buttonText} />
      <ColorsContainer messageContainer={setMessageContainerData} playAgainContainer={setplayAgainContainerData} />
    </div>
  );
}

export default App;
