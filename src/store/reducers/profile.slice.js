import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const user = process.env.REACT_APP_USER;

export const getUserAsync = createAsyncThunk("user/id", async () => {
  return await axios.get(`/users/${user}`).then((res) => {
    return res.data;
  });
});

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getUserAsync.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { updateUser } = profileSlice.actions;

export const updateProfile = (data) => async (dispatch) => {
  await axios
    .patch(`/user`, data, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
    .then((res) => {
      console.log(res.data, "res.data");
      dispatch(updateUser(res.data));
    });
};

export default profileSlice.reducer;
