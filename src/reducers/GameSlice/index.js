import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    board: Array(9).fill(null),
    isXNext: true,
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
            const { currentBoardState, boardPosition } = action.payload
            currentBoardState[boardPosition] = state.isXNext ? 'X' : 'O'
            
            state.boardValues = currentBoardState 
            state.isXNext = !state.isXNext
        },
        nextPlayerChanged: (state, action) => {
            const stepNumber = action.payload
            state.isXNext = stepNumber % 2 === 0
        }
    }
}) 

export const { playerNameChanged, moveMade, nextPlayerChanged } = gameSlice.actions

export default gameSlice.reducer