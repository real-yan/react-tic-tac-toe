import React, { useState } from 'react'
import Board from './Board'
import './Game.css'

function Game() {
    const [values, setValues] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [history, setHistory] = useState([{values}]);
    const [stepNumber, setStepNumber] = useState(0);

    const winner = calculateWinner(history[stepNumber].values);
    
    const handleClick = (i) => {
        
        const currentHistory = history.slice(0, stepNumber + 1)
        const currentValue = currentHistory[currentHistory.length - 1].values.slice() 

        if(winner || !!currentValue[i]) {
            return;
        }
        
        currentValue[i] = isXNext ? 'X' : 'O';

        setValues(currentValue);
        setIsXNext(!isXNext);
        setHistory(currentHistory.concat([{values: currentValue}]));
        setStepNumber(currentHistory.length);
    }    

    const jumpTo = (step) => {
        setStepNumber(step);
        setIsXNext(step % 2 === 0);
    }

    return (
        <div className="game-wrapper">
            <div className="game-board">
                <Board values={history[stepNumber].values} handleClick={handleClick} />
            </div>
            
            <div className="game-history">
                <div>
                    { winner ? `Winner: ${winner}` : `Next player: ${(isXNext ? 'X' : 'O')}` }
                </div>
                
                <ol>
                    {history.map((step, move) => {
                        return (
                            <li key={move}>
                                <button onClick={() => jumpTo(move)}>
                                    {!move ? "Go to start" : `Go to move #${move} ()`}
                                </button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
}

export default Game