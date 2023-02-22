import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


export const cardAdaptor = createEntityAdapter();
const initialState = cardAdaptor.getInitialState();

export const cardSelectors = cardAdaptor.getSelectors((state: any)=> state.cards);

const cardSlice = createSlice({
    name:'cards',
    initialState,
    reducers: {

    },
});


export const {} = cardSlice.actions
export default cardSlice.reducer;
