import { configureStore } from "@reduxjs/toolkit";
import movies from "./redux/movies";
import cinema from "./redux/cinema";


const store = configureStore({
  reducer: {
    movies,
    cinema
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

