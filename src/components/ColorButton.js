import { useState } from 'react';

import buttonStyle from './ColorButton.module.css';

function ColorButton(props) {

    const [color, setColor] = useState(randomColorGenerator);


    function randomColorGenerator() {
        let red = Math.floor(Math.random() * 256);                         // Setting a random value (0-255) for the red.
        let green = Math.floor(Math.random() * 256);                       // Setting a random value (0-255) for the green.
        let blue = Math.floor(Math.random() * 256);                        // Setting a random value (0-255) for the blue.

        return "rgb(" + red + ", " + green + ", " + blue + ")";            // Returning the whole new rgb(r,g,b) string.
    }

    function myHandler() {
        if (props.name === props.correctBtn) {
            console.log("POW!");
            props.messageButton("CORRECT!");
            props.playAgainButton("PLAY AGAIN");
        } else {
            props.messageButton("WRONG, TRY AGAIN!");
            props.playAgainButton("NEW COLORS");

        }
    }

    return (
        <button className={buttonStyle.btn} onClick={myHandler} style={{ 'backgroundColor': color }}></button>
    );
}

export default ColorButton;