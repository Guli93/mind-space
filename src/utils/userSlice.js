import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
       logged: false
    },

    reducers: {
        addUser: (state, action) => {
            state.logged = action.payload; 
        }
    }
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
