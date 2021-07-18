import React, { useState, useContext } from 'react'

import Button from '../../atoms/Button';
import LangContext from '../../../context/LangContext'

import './styles.css'

const History = (props) => {
    const [historyOrder, setHistoryOrder] = useState({reversed: false});

    const { currentLangData } = useContext(LangContext);

    const renderHistory = (reveresed) => {
        const arrMoves = props.moveHistory.map((_step, move) => {

            let status = 'inactive-move';
            if(props.stepNumber && props.stepNumber === move) {
                status = 'active-move';
            }
            console.log(status);
            return (
                <li key={move}>
                    <Button className={status} onClickHandler={() => props.jumpTo(move)}>
                        {!move ? 
                            currentLangData.history.start : 
                            `${currentLangData.history.start}${move} (${props.moveHistory[move].localizacao[0]}, ${props.moveHistory[move].localizacao[1]})`}
                    </Button>
                </li>
            )
        })

        return !reveresed ? arrMoves : arrMoves.reverse();
    }
    
    return (
        <>
            <ol {...historyOrder}>
                { 
                    renderHistory(historyOrder.reversed) 
                }
            </ol>

            <Button onClickHandler={() => setHistoryOrder({reversed: !historyOrder.reversed})}>
                {currentLangData.history.toggle}
            </Button>
        </>
    )
}

export default History