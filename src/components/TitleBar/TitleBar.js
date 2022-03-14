import titleStyle from './TitleBar.module.css';

function TitleBar({ titleBarColor, correctBtn }) {

    return (
        <div className={titleStyle.container} style={{ 'backgroundColor': titleBarColor }}>
            <h1 className={titleStyle.title}>Color Guessing Game</h1>
            <p className={titleStyle.statement}>Guess the color: </p>
            <p className={titleStyle.rgbColor}>{correctBtn}</p>
        </div>
    );
}

export default TitleBar;