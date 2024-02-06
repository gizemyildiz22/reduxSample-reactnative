import { createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0,
    
}

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        raisedByNumber:(state,action)=>{
            state.value += Number(action.payload)
        }
    }
})

export const {increment,decrement,raisedByNumber}=counterSlice.actions
export default counterSlice.reducer