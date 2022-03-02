import { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

import ColorButton from './ColorButton';
import colorStyle from './ColorsContainer.module.css';

function ColorsContainer(props) {

    // const [messageButtonData, setMessageButtonData] = useState("Select the correct color.");
    // const [playAgainButtonData, setPlayAgainButtonData] = useState("NEW COLORS");
    // const [titleColorButtonData, setTitleColorButtonData] = useState("rgb(28, 173, 173)");

    // props.messageContainer(messageButtonData);
    // props.playAgainContainer(playAgainButtonData);
    // props.titleColorContainer(titleColorButtonData);

    // console.log(titleColorButtonData);

    // return (
    //     <div className={colorStyle.mainContainer}>
    //         <div className={colorStyle.upperRow}>
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
    //         <div className={colorStyle.lowerRow}>
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

    return (
        <>
            {props.colorsArray.map((row, index) => {
                return (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {row.map((color, index) => {
                            return (
                                <div key={index} style={{ height: '100px', width: '100px', backgroundColor: `${color}` }}
                                >
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}

export default ColorsContainer;