import squareStyle from './ColorSquare.module.css';

const ColorSquare = ({ onClick, backgroundColor, visibility }) => {

    return (
        <div
            className={squareStyle.btn}
            onClick={onClick}
            style={{ backgroundColor: backgroundColor, 'visibility': visibility }}>
        </div>
    );
}

export default ColorSquare;