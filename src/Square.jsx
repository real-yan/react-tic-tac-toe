import React from 'react'
import './Square.css';

function Square(props) {
    
    let status = props.highlightWinner ? 'winner' : 'looser'; 
    
    return (
        <button className={`square ${status}`} onClick={() => props.onClick()}>
            { props.value }
        </button>
    )
}

export default Square