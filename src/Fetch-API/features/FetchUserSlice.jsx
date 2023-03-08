/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState=
{
  users: [],
  loading: false,
  error: null,
}
export let getUserData = createAsyncThunk(
  "Posts", async()=>{
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    return data;
  }
);

export let FetchUserSlice = createSlice({
  name: "UsersInfo",
  initialState,
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.loading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUserData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default FetchUserSlice.reducer;
