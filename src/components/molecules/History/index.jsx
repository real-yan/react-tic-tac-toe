import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'

import Button from '../../atoms/Button';
import LangContext from '../../../context/LangContext'

const History = ({ stepNumber, jumpTo }) => {
    const { currentLangData } = useContext(LangContext);

    const moveHistory = useSelector(state => state.game.moveNumbers.map((_step, move) => {
        return ({
            values: state.game.moves[move].board,
            location: state.game.moves[move].location    
        })
    }))
    
    const [reversed, setReversed] = useState(false);

    const renderHistory = (reversed) => {
        const arrMoves = moveHistory.map((_step, move) => {
            return (
                <li key={move}>
                    <Button 
                        highlighted={stepNumber && stepNumber === move} 
                        onClickHandler={() => jumpTo(move)}>
                        { !move ? 
                            currentLangData.history.start : 
                            `${currentLangData.history.move}${move} (${moveHistory[move].location.col}, ${moveHistory[move].location.row})` }
                    </Button>
                </li>
            )
        })

        return !reversed ? arrMoves : arrMoves.reverse();
    }
    
    return (
        <>
            <ol reversed={reversed}>
                { renderHistory(reversed) }
            </ol>

            <Button onClickHandler={() => setReversed(!reversed)}>
                { currentLangData.history.toggle }
            </Button>
        </>
    )
}

export default History