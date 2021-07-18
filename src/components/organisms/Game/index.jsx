import React, { useState, useContext } from 'react'

import LangContext from '../../../context/LangContext'

import TextInput from '../../atoms/TextInput'
import GameStatus from '../../atoms/GameStatus'

import Board from '../../molecules/Board'
import History from '../../molecules/History'

import './styles.css'

function Game() {
    const { currentLangData } = useContext(LangContext);
    
    const [values, setValues] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [history, setHistory] = useState([{values, localizacao: []}]);
    const [stepNumber, setStepNumber] = useState(0);
    const [player1, setPlayer1] = useState('X');
    const [player2, setPlayer2] = useState('O');

    const gameOver = calculateGameOver(history[stepNumber].values, stepNumber, player1, player2);
    
    const handleClick = (pos, col, row) => {      
        const currentHistory = history.slice(0, stepNumber + 1);
        const currentValue = currentHistory[currentHistory.length - 1].values.slice(); 

        if(!!gameOver || !!currentValue[pos]) {
            return;
        }
        
        currentValue[pos] = isXNext ? 'X' : 'O';

        setValues(currentValue);
        setIsXNext(!isXNext);
        setHistory(currentHistory.concat([{values: currentValue, localizacao: [col, row]}]));
        setStepNumber(currentHistory.length);
    }

    const handleInputChange = (event) => {
        if(event.target.id === 'player1') {
            setPlayer1(event.target.value);
        } else {
            setPlayer2(event.target.value);   
        }
    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setIsXNext(step % 2 === 0);
    }

    return (
        <div className="game-wrapper">
            <div className="players">
                <TextInput 
                    name="player1"
                    label={currentLangData.playerSelection.player1} 
                    placeholder={currentLangData.playerSelection.playerPlaceHolder
                        .replace('#HOLDER#', currentLangData.playerSelection.player1)} 
                    inputChangeHandler={handleInputChange} />
                <TextInput 
                    name="player2" 
                    label={currentLangData.playerSelection.player2} 
                    placeholder={currentLangData.playerSelection.playerPlaceHolder
                        .replace('#HOLDER#', currentLangData.playerSelection.player2)} 
                    inputChangeHandler={handleInputChange} />
            </div>

            <div className="game-board">
                <Board 
                    values={history[stepNumber].values} 
                    onClickHandler={handleClick} 
                    highlightWinner={gameOver && gameOver.positions} />
            </div>
            
            <div className="game-history">
                <GameStatus isXNext={isXNext} gameOver={gameOver} players={{player1, player2}} />
                <History
                    moveHistory={history}
                    stepNumber={stepNumber}
                    jumpTo={jumpTo}
                    gameOver={gameOver} />   
            </div>
        </div>
    )
}

const calculateGameOver = (squares, stepNumber, player1, player2) => {
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
            return { winner: (squares[a] === 'X' ? player1 : player2), positions: [a, b, c] };
        }
    }

    if(stepNumber === 9) {
        return { winner: null };
    }
    
    return null;
}

export default Game