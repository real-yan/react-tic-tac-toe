import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    moveNumbers: [0],
    moves: {
        0: {
            board: Array(9).fill(null),
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
            state.moveNumbers.push(moveNumber)
            
            const newBoard = previousBoard.slice()
            newBoard[movePosition] = isXNext ? 'X' : 'O'

            state.moves[moveNumber] = {}
            state.moves[moveNumber].board = newBoard
            state.moves[moveNumber].isXNext = !isXNext        
        },
        nextPlayerChanged: (state, action) => {
            const stepNumber = action.payload
            state.isXNext = stepNumber % 2 === 0
        }
    }
}) 

export const { playerNameChanged, moveMade, nextPlayerChanged } = gameSlice.actions

export default gameSlice.reducer