import React, { useContext } from 'react'
import LangContext from '../../../context/LangContext'

const GameStatus = (props) => {
    const { currentLangData } = useContext(LangContext);
    const nextPlayer = props.isXNext ? props.players.player1 : props.players.player2;
    return (
        <span>
            { props.gameOver ? 
                props.gameOver.winner ? 
                `${currentLangData.gameStatus.winner} ${props.gameOver.winner}` : 
                currentLangData.gameStatus.tie : 
            `${currentLangData.gameStatus.nextPlayer} ${nextPlayer}` }
        </span>
    )
}

export default GameStatus