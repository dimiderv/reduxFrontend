import { createSlice } from "@reduxjs/toolkit"
const initialState =[
    {id:'0',name:'Dude lebowski'},
    {id:'1',name:'Robert Switch'},
    {id:'2',name:'Car Jones'},
];

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})


export const selectAllUsers = (state)=>state.users;

export default usersSlice.reducer;