import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    muti: "muti"
}
const mutiSlice = createSlice({
    name:'muti',
    initialState,
    reducers:{
        reset:(state)=>{
            state.muti = "dfsfdsafds"
        }
    }
})
export const {reset} = mutiSlice.actions
export const selectMutis = (state) => state.mutis;
export default  mutiSlice.reducer;