import titleStyle from './TitleBar.module.css';

function TitleBar(props) {
    return (
        <div>
            <h1 className={titleStyle.title}>Color Guessing Game</h1>
            <p className={titleStyle.statement}>Guess the color: </p>
            <p className={titleStyle.rgbColor}>RGB Color</p>
        </div>
    );
}

export default TitleBar;