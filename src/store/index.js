import { configureStore } from "@reduxjs/toolkit";
import repositorySlice from "./reducers/repository.slice";
import profileSlice from "./reducers/profile.slice";

const store = configureStore({
  reducer: {
    repository: repositorySlice,
    profile: profileSlice,
  },
});

export default store;
