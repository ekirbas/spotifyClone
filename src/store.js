import { configureStore } from '@reduxjs/toolkit'
import CardsDataReducer from './store/CardsDataSlice'

export default configureStore({
    reducer: {
        cardsData: CardsDataReducer
    },
})