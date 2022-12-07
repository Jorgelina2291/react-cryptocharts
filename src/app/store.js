import {configureStore} from "@reduxjs/toolkit"
import cryptoReducer from "../features/CryptoSlice"
import freqReducer from "../features/FreqSlice"

export default configureStore ({
    reducer: {
        crypto: cryptoReducer, 
        freq: freqReducer,
    }
})