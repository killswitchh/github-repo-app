import userInfoReducer from "./features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    user: userInfoReducer,
  },
});
