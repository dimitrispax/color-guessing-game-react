import resultStyle from './ResultBar.module.css';

function ResultBar({ playAgain, changeDifficulty, resultBarButtonText, resultBarMessage, difficulty }) {

    return (
        <div className={resultStyle.mainContainer}>
            <div className={resultStyle.innerContainer}>
                <button onClick={playAgain} className={resultStyle.btn}>{resultBarButtonText}</button>
                <button onClick={changeDifficulty} className={resultStyle.btn}>{difficulty}</button>
                <p className={resultStyle.message}>{resultBarMessage}</p>
            </div>
        </div>
    );
}

export default ResultBar;

