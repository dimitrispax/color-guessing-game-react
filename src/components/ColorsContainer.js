import { useState } from 'react';

import ColorButton from './ColorButton';
import colorStyle from './ColorsContainer.module.css';

function ColorsContainer(props) {

    const [messageButtonData, setMessageButtonData] = useState("Select the correct color.");
    const [playAgainButtonData, setPlayAgainButtonData] = useState("NEW COLORS");
    const [titleColorButtonData, setTitleColorButtonData] = useState("rgb(28, 173, 173)");
    const [allButtons, setAllButtons] = useState(false);

    props.messageContainer(messageButtonData);
    props.playAgainContainer(playAgainButtonData);
    props.titleColorContainer(titleColorButtonData);

    console.log(titleColorButtonData);


    return (
        <div className={colorStyle.mainContainer}>
            <div className={colorStyle.upperRow}>
                <ColorButton
                    playAgainButton={setPlayAgainButtonData}
                    messageButton={setMessageButtonData}
                    titleColorButton={setTitleColorButtonData}
                    color={props.color}
                    correctBtn={props.correctBtn}
                    name="btn1"
                />
                <ColorButton
                    playAgainButton={setPlayAgainButtonData}
                    messageButton={setMessageButtonData}
                    titleColorButton={setTitleColorButtonData}
                    color={props.color}
                    correctBtn={props.correctBtn}
                    name="btn2"
                />
                <ColorButton
                    playAgainButton={setPlayAgainButtonData}
                    messageButton={setMessageButtonData}
                    titleColorButton={setTitleColorButtonData}
                    color={props.color}
                    correctBtn={props.correctBtn}
                    name="btn3"
                />
            </div>
            <div className={colorStyle.lowerRow}>
                <ColorButton
                    playAgainButton={setPlayAgainButtonData}
                    messageButton={setMessageButtonData}
                    titleColorButton={setTitleColorButtonData}
                    color={props.color}
                    correctBtn={props.correctBtn}
                    name="btn4"
                />
                <ColorButton
                    playAgainButton={setPlayAgainButtonData}
                    messageButton={setMessageButtonData}
                    titleColorButton={setTitleColorButtonData}
                    color={props.color}
                    correctBtn={props.correctBtn}
                    name="btn5"
                />
                <ColorButton
                    playAgainButton={setPlayAgainButtonData}
                    messageButton={setMessageButtonData}
                    titleColorButton={setTitleColorButtonData}
                    color={props.color}
                    correctBtn={props.correctBtn}
                    name="btn6"
                />
            </div>
        </div>
    );
}

export default ColorsContainer;