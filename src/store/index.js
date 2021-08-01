import { configureStore } from "@reduxjs/toolkit";

import gameReducer from '../reducers/GameSlice'

export default configureStore({
    reducer: {
        game: gameReducer
    }
})