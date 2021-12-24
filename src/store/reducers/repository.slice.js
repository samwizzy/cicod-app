import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const user = process.env.REACT_APP_USER;

export const getReposAsync = createAsyncThunk("repos/all", async () => {
  return await axios.get(`/users/${user}/repos`).then((res) => {
    return res.data;
  });
});

const reposSlice = createSlice({
  name: "repos",
  initialState: {
    loading: false,
    repos: [],
    selectedRepo: null,
  },
  reducers: {
    getRepoById: (state, action) => {
      const repo = state.repos.find((repo) => repo.id === action.payload);
      state.selectedRepo = repo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getReposAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getReposAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.repos = action.payload;
    });
    builder.addCase(getReposAsync.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { getRepoById } = reposSlice.actions;

export default reposSlice.reducer;
