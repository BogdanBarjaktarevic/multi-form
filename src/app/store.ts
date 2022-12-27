import controlsReducer from "../components/controls/controlsSlice";
import { configureStore } from "@reduxjs/toolkit";
import stepsReducer from "../components/steps/stepsSlice";

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
    controls: controlsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
