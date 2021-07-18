import React from 'react'

const GameStatus = (props) => {
    return (
        <span>
            { props.gameOver ? 
                props.gameOver.winner ? `Winner: ${props.gameOver.winner}` : 'It is a tie' :
                `Next player: ${(props.isXNext ? props.players.player1 : props.players.player2)}` }
        </span>
    )
}

export default GameStatus