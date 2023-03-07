/** @format */
import { configureStore } from "@reduxjs/toolkit";
import UserInfoSlice  from "./features/UserNote";

export const store = configureStore({
  reducer: {
    Users: UserInfoSlice,
  },
});
