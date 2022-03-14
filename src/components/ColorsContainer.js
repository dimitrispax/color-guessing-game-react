import { useState } from 'react';

import containerStyle from './ColorsContainer.module.css';
import ColorSquare from './ColorSquare';

function ColorsContainer(props) {

    // const [messageButtonData, setMessageButtonData] = useState("Select the correct color.");
    // const [playAgainButtonData, setPlayAgainButtonData] = useState("NEW COLORS");
    // const [titleColorButtonData, setTitleColorButtonData] = useState("rgb(28, 173, 173)");
    // console.log('PROPS: ', props)

    const clickHandler = (color, visibility, id) => {
        console.log('Color: ', color)
        console.log('Index of: ', id)
        if (color === props.correctBtn) {
            changeColor()
        } else {
            changeVisibility(id)
        }

    }

    const changeColor = () => {
        const tempColorsArray = [...props.colorsArray]
        tempColorsArray = tempColorsArray.map(object => {
            object.color = props.correctBtn
            object.visibility = 'visible'
        })
        props.setColorsArray(tempColorsArray)
    }

    const changeVisibility = (id) => {
        const tempColorsArray = [...props.colorsArray]
        tempColorsArray[id].visibility = 'hidden';
        props.setColorsArray(tempColorsArray)
    }

    return (
        <div className={containerStyle.mainContainer}>
            <div className={containerStyle.innerContainer}>
                {Object.keys(props.colorsArray).map((key) => {
                    return (
                        <ColorSquare key={props.colorsArray[key].id}
                            correctBtn={props.correctBtn}
                            onClick={() => clickHandler(props.colorsArray[key].color, props.colorsArray[key].visibility, props.colorsArray[key].id)}
                            backgroundColor={props.colorsArray[key].color}
                            visibility={props.colorsArray[key].visibility}
                        />
                    )
                })}
            </div>
        </div>
    )


}

export default ColorsContainer;