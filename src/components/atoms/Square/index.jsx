import React from 'react'
import './styles.css';

function Square(props) {   
    let status = props.highlightWinner && 'winner'; 
    return (
        <button className={`square ${status}`} onClick={() => props.onClickHandler()}>
            { props.value }
        </button>
    )
}

export default Square