import React from 'react'
import Square from './Square'
import './Board.css'

function Board(props) {
    return (
        <div>
            <div className="board-row">
                <Square value={props.values[0]} onClick={() => props.handleClick(0)} />
                <Square value={props.values[1]} onClick={() => props.handleClick(1)} />
                <Square value={props.values[2]} onClick={() => props.handleClick(2)} />
            </div> 
            <div className="board-row">
                <Square value={props.values[3]} onClick={() => props.handleClick(3)} />
                <Square value={props.values[4]} onClick={() => props.handleClick(4)} />
                <Square value={props.values[5]} onClick={() => props.handleClick(5)} />
            </div>  
            <div className="board-row">
                <Square value={props.values[6]} onClick={() => props.handleClick(6)} />
                <Square value={props.values[7]} onClick={() => props.handleClick(7)} />
                <Square value={props.values[8]} onClick={() => props.handleClick(8)} />
            </div>   
        </div>  
    )
}

export default Board