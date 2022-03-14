import { useState } from 'react';

import squareStyle from './ColorSquare.module.css';

function ColorSquare(props) {


    const myHandler = () => {
        if (props.correctBtn === props.backgroundColor) {
            // console.log(props.correctBtn);
            // console.log(props.backgroundColor);
            // setMakeVisibleAllSquares(true);
            // props.titleColorButton(color);
            // props.messageButton("CORRECT!");
            // props.playAgainButton("PLAY AGAIN");
        } else {
            // console.log("Mphke");
            // setVisibility('hidden')
            // props.messageButton("WRONG, TRY AGAIN!");
            // props.playAgainButton("NEW COLORS");

        }
    }


    return (
        <div
            className={squareStyle.btn}
            onClick={props.onClick}
            style={{ backgroundColor: props.backgroundColor, 'visibility': props.visibility }}>
        </div>
    );
}

export default ColorSquare;