import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/post/postSlice'
import mutiReducer from '../features/mutis/mutiSlice'
import usersReducer  from '../features/users/usersSlice'
export const store = configureStore({
    reducer:{
        posts: postsReducer,
        mutis: mutiReducer,
        users: usersReducer
    }
})