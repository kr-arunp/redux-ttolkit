import { configureStore } from "@reduxjs/toolkit";
import FetchUserSlice from "./features/FetchUserSlice";
export let store =configureStore({
reducer:{
		FetchUsers: FetchUserSlice 
}
})
