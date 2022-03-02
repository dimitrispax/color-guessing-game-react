import resultStyle from './ResultBar.module.css';


function ResultBar(props) {



    function flagHandler() {
        props.playAgain(true);
    }

    return (
        <div className={resultStyle.mainContainer}>
            <div className={resultStyle.innerContainer}>
                <button onClick={flagHandler} className={resultStyle.btn}>{props.buttonText}</button>
                <p className={resultStyle.message}>{props.message}</p>
            </div>
        </div>
    );
}

export default ResultBar;

