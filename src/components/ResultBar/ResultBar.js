import resultStyle from './ResultBar.module.css';

function ResultBar({playAgain, resultBarButtonText, resultBarMessage}) {

    return (
        <div className={resultStyle.mainContainer}>
            <div className={resultStyle.innerContainer}>
                <button onClick={playAgain} className={resultStyle.btn}>{resultBarButtonText}</button>
                <p className={resultStyle.message}>{resultBarMessage}</p>
            </div>
        </div>
    );
}

export default ResultBar;

