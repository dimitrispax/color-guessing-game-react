import containerStyle from './ColorsContainer.module.css';
import ColorSquare from '../ColorSquare/ColorSquare';

const ColorsContainer = ({ colorsArray, correctColor, setColorsArray, setTitleBarColor, setResultBarButtonText, setResultBarMessage }) => {

    const clickHandler = (color, id) => {         // if the color of the clicked button is equal
        if (color === correctColor) {             // with the correctColor, then: 
            changeColor()
            setTitleBarColor(correctColor)
            setResultBarButtonText("PLAY AGAIN")
            setResultBarMessage("CORRECT!")
        } else {
            changeVisibility(id)
            setResultBarMessage("WRONG, TRY AGAIN!")
        }
    }

    const changeColor = () => {
        const tempColorsArray = [...colorsArray]
        tempColorsArray.map(object => {
            if (object.visibility === 'visible')
                object.color = correctColor
        })
        setColorsArray(tempColorsArray)
    }

    const changeVisibility = (id) => {
        const tempColorsArray = [...colorsArray]
        tempColorsArray[id].visibility = 'hidden';
        setColorsArray(tempColorsArray)
    }


    return (
        <div className={containerStyle.mainContainer}>
            <div className={containerStyle.innerContainer}>
                {Object.keys(colorsArray).map((key) => {
                    return (
                        <ColorSquare key={colorsArray[key].id}
                            correctColor={correctColor}
                            onClick={() => clickHandler(colorsArray[key].color, colorsArray[key].id)}
                            backgroundColor={colorsArray[key].color}
                            visibility={colorsArray[key].visibility}
                        />
                    )
                })}
            </div>
        </div>
    )

}

export default ColorsContainer;