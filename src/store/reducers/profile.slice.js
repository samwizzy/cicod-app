import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const user = process.env.REACT_APP_USER;

export const updateUserAsync = createAsyncThunk("user/update", async (data) => {
  return await axios
    .patch(`/user`, data, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
    .then((res) => {
      return res.data;
    });
});

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    user: null,
    status: { message: "", code: null },
  },
  reducers: {
    getUserDetails: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserAsync.pending, (state) => {
      state.loading = true;
      state.status.code = null;
    });
    builder.addCase(updateUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.status.code = true;
      state.status.message = "Profile updated successfully";
    });
    builder.addCase(updateUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.status.code = false;
      state.status.message = "Profile update failed";
    });
  },
});

export const { getUserDetails } = profileSlice.actions;

export const getUserProfile = (data) => async (dispatch) => {
  await axios.get(`/users/${user}`, data).then((res) => {
    dispatch(getUserDetails(res.data));
  });
};

export default profileSlice.reducer;
