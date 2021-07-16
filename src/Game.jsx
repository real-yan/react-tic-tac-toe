import React, { useState } from 'react'
import Board from './Board'
import './Game.css'

const locENUM = {}
locENUM[0] = [1, 1];
locENUM[1] = [2, 1];
locENUM[2] = [3, 1];
locENUM[3] = [1, 2];
locENUM[4] = [2, 2];
locENUM[5] = [3, 2];
locENUM[6] = [1, 3];
locENUM[7] = [2, 3];
locENUM[8] = [3, 3];

function Game() {
    const [values, setValues] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [history, setHistory] = useState([{values, localizacao: []}]);
    const [stepNumber, setStepNumber] = useState(0);

    const gameOver = calculateGameOver(history[stepNumber].values);
    
    const handleClick = (i) => {      
        const currentHistory = history.slice(0, stepNumber + 1);
        const currentValue = currentHistory[currentHistory.length - 1].values.slice(); 

        if(!!gameOver || !!currentValue[i]) {
            return;
        }
        
        currentValue[i] = isXNext ? 'X' : 'O';

        setValues(currentValue);
        setIsXNext(!isXNext);
        setHistory(currentHistory.concat([{values: currentValue, localizacao: locENUM[i]}]));
        setStepNumber(currentHistory.length);
    }    

    const jumpTo = (step) => {
        setStepNumber(step);
        setIsXNext(step % 2 === 0);
    }

    return (
        <div className="game-wrapper">
            <div className="game-board">
                <Board 
                    values={history[stepNumber].values} 
                    handleClick={handleClick} 
                    highlightWinner={gameOver && gameOver.positions} />
            </div>
            
            <div className="game-history">
                <div>
                    { gameOver && gameOver.winner ? `Winner: ${gameOver.winner}` : `Next player: ${(isXNext ? 'X' : 'O')}` }
                </div>
                
                <ol>
                    {history.map((_step, move) => {

                        let status = 'inactive-move';
                        if(stepNumber && stepNumber === move) {
                            status = 'active-move';
                        }

                        return (
                            <li key={move}>
                                <button className={status} onClick={() => jumpTo(move)}>
                                    {!move ? 
                                        "Go to start" : 
                                        `Go to move #${move} (${history[move].localizacao[0]}, ${history[move].localizacao[1]})`}
                                </button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

const calculateGameOver = (squares) => {
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
            return { winner: squares[a], positions: [a, b, c] };
        }
    }
    
    return null;
}

export default Game