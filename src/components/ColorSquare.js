import { useState } from 'react';

import squareStyle from './ColorSquare.module.css';
import squareStyle2 from './ColorSquare.module.css';

function ColorSquare(props) {

    const [visibility, setVisibility] = useState('visible');


    const myHandler = () => {
        console.log("backgroundColor: " + props.style.backgroundColor);
        console.log("Visibility: " + props.style.visibility);
        if (props.correctBtn === props.style.backgroundColor) {
            console.log("correctBtn: " + props.correctBtn);
            props.setMakeVisibleAllSquares(true);
            // props.titleColorButton(color);
            // props.messageButton("CORRECT!");
            // props.playAgainButton("PLAY AGAIN");
        } else {
            console.log("Mphke square function");
            setVisibility('hidden');
            // props.messageButton("WRONG, TRY AGAIN!");
            // props.playAgainButton("NEW COLORS");

        }
    }

    console.log("flag: " + props.makeVisibleAllSquares);

    return (
        <div
            className={squareStyle.btn}
            onClick={(props.makeVisibleAllSquares) ? props.onClick : myHandler}
            style={props.style}>
            {/* // style={{ backgroundColor: props.backgroundColor, 'visibility': (false) ? visibility : visibility }}> */}
        </div>
    );
}

export default ColorSquare;