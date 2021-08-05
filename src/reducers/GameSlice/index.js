import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    moveNumbers: [0],
    moves: {
        0: {
            board: Array(9).fill(null),
            location: {col: null, row: null},
            isXNext: true,  
        }
    },
    player1: 'X', 
    player2: 'O'   
}

const gameSlice = createSlice({
    name: 'Game',
    initialState,
    reducers: {
        playerNameChanged: (state, action) => {
            const { playerNumber, name } = action.payload
            state[playerNumber] = !!name ? name : initialState[playerNumber]
        },
        moveMade: (state, action) => {
            const { previousBoard, isXNext, moveNumber, movePosition } = action.payload
            
            if(state.moveNumbers.indexOf(moveNumber) > -1) {
                state.moveNumbers.forEach(move => move > moveNumber && delete state.moves[move]); 
                state.moveNumbers = state.moveNumbers.slice(0, moveNumber) 
            }       
            
            state.moveNumbers.push(moveNumber)
            
            const newBoard = previousBoard.slice()
            newBoard[movePosition.pos] = isXNext ? 'X' : 'O'

            state.moves[moveNumber] = {}
            state.moves[moveNumber].board = newBoard
            state.moves[moveNumber].isXNext = !isXNext   
            state.moves[moveNumber].location = {col: movePosition.col, row: movePosition.row}    
        },
        nextPlayerChanged: (state, action) => {
            const stepNumber = action.payload
            state.isXNext = stepNumber % 2 === 0
        }
    }
}) 

export const { playerNameChanged, moveMade, nextPlayerChanged } = gameSlice.actions

export default gameSlice.reducer