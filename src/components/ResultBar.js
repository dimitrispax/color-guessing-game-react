import resultStyle from './ResultBar.module.css';

function ResultBar(props) {


    return (
        <div className={resultStyle.container}>
            <button className={resultStyle.btn}>{props.buttonText}</button>
            <p className={resultStyle.message}>{props.message}</p>

        </div>
    );
}

export default ResultBar;