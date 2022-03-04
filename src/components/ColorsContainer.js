import { useState } from 'react';

import containerStyle from './ColorsContainer.module.css';
import ColorSquare from './ColorSquare';

import squareStyle from './ColorSquare.module.css';
import squareStyle2 from './ColorSquare2.module.css';

function ColorsContainer(props) {

    // const [messageButtonData, setMessageButtonData] = useState("Select the correct color.");
    // const [playAgainButtonData, setPlayAgainButtonData] = useState("NEW COLORS");
    // const [titleColorButtonData, setTitleColorButtonData] = useState("rgb(28, 173, 173)");

    // props.messageContainer(messageButtonData);
    // props.playAgainContainer(playAgainButtonData);
    // props.titleColorContainer(titleColorButtonData);

    // console.log(titleColorButtonData);

    // return (
    //     <div className={containerStyle.mainContainer}>
    //         <div className={containerStyle.upperRow}>
    //             <ColorButton
    //                 playAgainButton={setPlayAgainButtonData}
    //                 messageButton={setMessageButtonData}
    //                 titleColorButton={setTitleColorButtonData}
    //                 color={props.color}
    //                 correctBtn={props.correctBtn}
    //                 name="btn1"
    //             />
    //             <ColorButton
    //                 playAgainButton={setPlayAgainButtonData}
    //                 messageButton={setMessageButtonData}
    //                 titleColorButton={setTitleColorButtonData}
    //                 color={props.color}
    //                 correctBtn={props.correctBtn}
    //                 name="btn2"
    //             />
    //             <ColorButton
    //                 playAgainButton={setPlayAgainButtonData}
    //                 messageButton={setMessageButtonData}
    //                 titleColorButton={setTitleColorButtonData}
    //                 color={props.color}
    //                 correctBtn={props.correctBtn}
    //                 name="btn3"
    //             />
    //         </div>
    //         <div className={containerStyle.lowerRow}>
    //             <ColorButton
    //                 playAgainButton={setPlayAgainButtonData}
    //                 messageButton={setMessageButtonData}
    //                 titleColorButton={setTitleColorButtonData}
    //                 color={props.color}
    //                 correctBtn={props.correctBtn}
    //                 name="btn4"
    //             />
    //             <ColorButton
    //                 playAgainButton={setPlayAgainButtonData}
    //                 messageButton={setMessageButtonData}
    //                 titleColorButton={setTitleColorButtonData}
    //                 color={props.color}
    //                 correctBtn={props.correctBtn}
    //                 name="btn5"
    //             />
    //             <ColorButton
    //                 playAgainButton={setPlayAgainButtonData}
    //                 messageButton={setMessageButtonData}
    //                 titleColorButton={setTitleColorButtonData}
    //                 color={props.color}
    //                 correctBtn={props.correctBtn}
    //                 name="btn6"
    //             />
    //         </div>
    //     </div>
    // );


    const clickHandler = (color, visibility) => {
        console.log(props.colorsArray);
        console.log(color);
        console.log(visibility);
    }

    // const onClick = event => {
    //     console.log(event.target.style);
    // }




    return (
        <div className={containerStyle.mainContainer}>
            <div className={containerStyle.innerContainer}>
                {Object.keys(props.colorsArray).map((key, index) => {
                    return (
                        // <div 
                        //     className={containerStyle.btn}
                        //     onClick={() => clickHandler(props.colorsArray[key].color, props.colorsArray[key].visibility)}
                        //     style={{ backgroundColor: `${props.colorsArray[key].color}`, 'visibility': props.colorsArray[key].visibility }}>
                        // </div>
                        <ColorSquare key={index}
                            correctBtn={props.correctBtn}
                            onClick={() => clickHandler(props.colorsArray[key].color, props.colorsArray[key].visibility)}
                            style={{ backgroundColor: props.colorsArray[key].color, 'visibility': props.colorsArray[key].visibility }}
                            backgroundColor={(props.makeVisibleAllSquares) ? props.correctBtn : props.colorsArray[key].color}
                            setMakeVisibleAllSquares={props.setMakeVisibleAllSquares}
                            makeVisibleAllSquares={props.makeVisibleAllSquares}
                        />

                    )
                })}
            </div>
        </div>
    )



    {/* {

                Object.keys(props.colorsArray).map((rowKey, index1) => {
                    console.log("rowKey: " + props.colorsArray[rowKey]);
                    return (
                        <div key={index1} style={{ display: 'flex', justifyContent: 'center' }}>
                            {Object.keys(props.colorsArray[rowKey]).map((key, index2) => {
                                return (
                                    <div key={index2}
                                        className={containerStyle.btn}
                                        onClick={() => clickHandler(props.colorsArray[rowKey][key].color, props.colorsArray[rowKey][key].visibility)}
                                        style={{ backgroundColor: `${props.colorsArray[rowKey][key].color}`, 'visibility': props.colorsArray[rowKey][key].visibility }}>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            } */}


}

export default ColorsContainer;