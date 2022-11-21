import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cinema } from "../interfaces/Cinema";
import cinemaAPI from "../api/cinemaAPI";

interface CinemasState {
  data: Cinema[];
  isLoading: boolean;
  error: string;
}

const initialState: CinemasState = {
  data: [],
  isLoading: false,
  error: "",
};

export const getCinemaList = createAsyncThunk(
  "cinemas/getCinemaList",
  async () => {
    try {
      const data = await cinemaAPI.getCinemaList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const cinemasSlice = createSlice({
  name: "cinemas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCinemaList.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getCinemaList.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(getCinemaList.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error1: error.message as string };
    });
  },
});

export default cinemasSlice.reducer;
