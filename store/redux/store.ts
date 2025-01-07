import { configureStore } from "@reduxjs/toolkit";
import { favouriteReducer } from "./favourite";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    favouriteSliceReducer: favouriteReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
