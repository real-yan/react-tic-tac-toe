import React from 'react'
import Square from './Square'
import './Board.css'

function Board(props) {

    const renderBoard = (col, row) => {
        const cols = Array(col).fill(1);
        const rows = Array(row).fill(1);

        return (
            <div> 
                { cols.map((_c, col) => {                
                    return (
                        <div key={col} className="board-row">
                            { renderRow(col, rows) }
                        </div>
                    )    
                }) }
            </div>
        ) 
    }

    const renderRow = (col, rows) => {
        return(
            rows.map((_r, row) => {                           
                let pos = col * rows.length + row;
                let winnerSquare = props.highlightWinner && props.highlightWinner.indexOf(pos) > -1;

                return (
                    <Square key={pos} 
                        value={props.values[pos]}
                        highlightWinner={winnerSquare} 
                        onClick={() => props.handleClick(pos)} />
                )
            }) 
        )
    }

    return (
        <> 
            { renderBoard(3, 3) }
        </>
    )
}

export default Board