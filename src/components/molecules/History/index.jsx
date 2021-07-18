import React, { useState, useContext } from 'react'

import Button from '../../atoms/Button';
import LangContext from '../../../context/LangContext'

const History = (props) => {
    const { currentLangData } = useContext(LangContext);
    
    const [reversed, setReversed] = useState(false);

    const renderHistory = (reversed) => {
        const arrMoves = props.moveHistory.map((_step, move) => {
            return (
                <li key={move}>
                    <Button highlighted={props.stepNumber && props.stepNumber === move} onClickHandler={() => props.jumpTo(move)}>
                        {!move ? 
                            currentLangData.history.start : 
                            `${currentLangData.history.start}${move} (${props.moveHistory[move].localizacao[0]}, ${props.moveHistory[move].localizacao[1]})`}
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
                {currentLangData.history.toggle}
            </Button>
        </>
    )
}

export default History