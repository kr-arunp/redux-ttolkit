/** @format */
import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../UserData";
export const UserInfoSlice = createSlice({
  name: "UserNote",
  initialState: { value: UserData },
  reducers: {
    AddUser: (state, action) => {
       state.value.unshift(action.payload);
    },
    DeleteUser: (state, action) => {
     state.value=state.value.filter((user) => user.id!==action.payload.id)
    },
    UpdateUserName: (state, action) => {
      state.value.map((user) => {
        if (user.id==action.payload.id) {
          user.userName=action.payload.userName;
        }
      })
    },
    UpdateUserList:(state,action)=>{
      console.log("🚀 ~ file: UserNote.jsx:24 ~ action.payload.value:", action.payload)
    
      state.value=action.payload;
    }
  },
});
export default UserInfoSlice.reducer;
