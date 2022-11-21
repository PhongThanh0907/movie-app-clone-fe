import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../interfaces/Movie";
import movieAPI from "../api/movieAPI";

interface MoviesState {
  data: Movie[];
  isLoading: boolean;
  error: string;
}

const initialState: MoviesState = {
  data: [],
  isLoading: false,
  error: "",
};

export const getMovieList = createAsyncThunk(
  "movies/getMovieList",
  async () => {
    try {
      const data = await movieAPI.getMovieList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieList.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getMovieList.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(getMovieList.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});
export default moviesSlice.reducer;
