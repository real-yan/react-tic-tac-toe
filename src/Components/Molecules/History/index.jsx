import React, { useState } from 'react'

const History = (props) => {
    const [historyOrder, setHistoryOrder] = useState({reversed: false});

    const renderHistory = (reveresed) => {
        const arrMoves = props.moveHistory.map((_step, move) => {

            let status = 'inactive-move';
            if(props.stepNumber && props.stepNumber === move) {
                status = 'active-move';
            }

            return (
                <li key={move}>
                    <button className={status} onClick={() => props.jumpTo(move)}>
                        {!move ? 
                            "Go to start" : 
                            `Go to move #${move} (${props.moveHistory[move].localizacao[0]}, ${props.moveHistory[move].localizacao[1]})`}
                    </button>
                </li>
            )
        })

        return !reveresed ? arrMoves : arrMoves.reverse();
    }
    
    return (
        <>
            <ol {...props.historyOrder}>
                { 
                    renderHistory(historyOrder.reversed) 
                }
            </ol>

            <button onClick={() => setHistoryOrder({reversed: !historyOrder.reversed})}>Toggle</button>
        </>
    )
}

export default History