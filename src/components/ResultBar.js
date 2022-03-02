import resultStyle from './ResultBar.module.css';


function ResultBar(props) {

    return (
        <div className={resultStyle.mainContainer}>
            <div className={resultStyle.innerContainer}>
                <button onClick={props.playAgain} className={resultStyle.btn}>{props.resultBarButtonText}</button>
                <p className={resultStyle.message}>{props.resultBarMessage}</p>
            </div>
        </div>
    );
}

export default ResultBar;

