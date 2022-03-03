import { useState } from 'react';

import ColorButton from './ColorButton';
import containerStyle from './ColorsContainer.module.css';

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
        if (color === props.correctBtn) {
            console.log("Egine!");
        } else {
            console.log("Den egine!");
            console.log(visibility);
            visibility = 'hidden';
            console.log(visibility);
            return visibility;
        }
    }

    // const onClick = event => {
    //     console.log(event.target.style);
    // }



    return (
        <div className={containerStyle.mainContainer}>
            {Object.keys(props.colorsArray).map((key, index2) => {
                return (
                    <div key={index2}
                        className={containerStyle.btn}
                        onClick={() => clickHandler(props.colorsArray[key].color, props.colorsArray[key].visibility)}
                        style={{ backgroundColor: `${props.colorsArray[key].color}`, 'visibility': props.colorsArray[key].visibility }}>
                    </div>
                )
            })}
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