import { useState } from 'react';

import ColorButton from './ColorButton';
import colorStyle from './ColorsContainer.module.css';

function ColorsContainer(props) {

    const [messageButtonData, setMessageButtonData] = useState("");
    const [playAgainButtonData, setPlayAgainButtonData] = useState("");


    let lotteryArray = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6'];
    let correctBtn = lotteryArray[Math.floor(Math.random() * 7)];
    while (typeof correctBtn == 'undefined') {
        correctBtn = lotteryArray[Math.floor(Math.random() * 7)];
    }
    console.log("Correct: " + correctBtn);


    props.messageContainer(messageButtonData);
    props.playAgainContainer(playAgainButtonData);


    return (
        <div className={colorStyle.mainContainer}>
            <div className={colorStyle.upperRow}>
                <ColorButton playAgainButton={setPlayAgainButtonData} messageButton={setMessageButtonData} correctBtn={correctBtn} name="btn1" />
                <ColorButton playAgainButton={setPlayAgainButtonData} messageButton={setMessageButtonData} correctBtn={correctBtn} name="btn2" />
                <ColorButton playAgainButton={setPlayAgainButtonData} messageButton={setMessageButtonData} correctBtn={correctBtn} name="btn3" />
            </div>
            <div className={colorStyle.lowerRow}>
                <ColorButton playAgainButton={setPlayAgainButtonData} messageButton={setMessageButtonData} correctBtn={correctBtn} name="btn4" />
                <ColorButton playAgainButton={setPlayAgainButtonData} messageButton={setMessageButtonData} correctBtn={correctBtn} name="btn5" />
                <ColorButton playAgainButton={setPlayAgainButtonData} messageButton={setMessageButtonData} correctBtn={correctBtn} name="btn6" />
            </div>
        </div>
    );
}

export default ColorsContainer;