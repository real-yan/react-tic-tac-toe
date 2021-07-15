import React from 'react'
import Board from './Board'
import './Game.css'

function Game(props) {
    return (
        <div className="game-wrapper">
            <Board />
        </div>
    )
}

export default Game