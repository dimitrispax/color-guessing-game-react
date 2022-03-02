import { useState } from 'react';

import buttonStyle from './ColorButton.module.css';

function ColorButton(props) {

    const [color, setColor] = useState(randomColorGenerator);
    const [visibility, setVisibility] = useState('visible');

    console.log(props.correctBtn.current);


    function randomColorGenerator() {
        if (props.name === props.correctBtn) {
            return props.color;
        }
        let red = Math.floor(Math.random() * 256);                         // Setting a random value (0-255) for the red.
        let green = Math.floor(Math.random() * 256);                       // Setting a random value (0-255) for the green.
        let blue = Math.floor(Math.random() * 256);                        // Setting a random value (0-255) for the blue.

        return "rgb(" + red + ", " + green + ", " + blue + ")";            // Returning the whole new rgb(r,g,b) string.
    }

    function myHandler() {
        if (props.color === color) {
            console.log(props.color);
            console.log(color);
            props.titleColorButton(color);
            props.messageButton("CORRECT!");
            props.playAgainButton("PLAY AGAIN");
        } else {
            setVisibility('hidden');

            props.messageButton("WRONG, TRY AGAIN!");
            props.playAgainButton("NEW COLORS");

        }
    }

    return (
        <button className={buttonStyle.btn} onClick={myHandler} style={{ 'backgroundColor': color, 'visibility': visibility }}></button>
    );
}

export default ColorButton;