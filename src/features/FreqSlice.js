import {createSlice} from "@reduxjs/toolkit";

// se crea esta otra capa "FreqSlice" para poder utilizar los mismos botones del price chart en volume chart con 
//"const [freq, SetFreq] = useState ('7d')" de price en volume


export const freqSlice = createSlice({
    name: "freq",
    initialState: {
        freq: "24h",
    },
    reducers: {
        // funcion flecha que escucha cualquier cambio y se lo pasa al estado inicial
        SET_FREQ: (state, action) =>{
            state.freq = action.payload;
        }
    }
})

//EXPORTAMOS POR SEPARADOS EL SET Y EL SELECT

export const {SET_FREQ} = freqSlice.actions;
export const selectFreq = (state) => state.freq.freq;

export default freqSlice.reducer;