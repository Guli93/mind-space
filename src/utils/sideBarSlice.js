import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice=createSlice({
    name:"sidebar",
    initialState:false,

    reducers:{
        addSideBar:(state,action)=>{
            return action.payload;
        }
    }
})

export const {addSideBar}=sideBarSlice.actions;

export default sideBarSlice.reducer;