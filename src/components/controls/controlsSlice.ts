import { ActiveStep, StepsEnum } from "../steps/stepsSlice";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ControlsSlice {
  activeStep: ActiveStep;
  formCompleted: boolean;
}

const initialState: ControlsSlice = {
  activeStep: StepsEnum.personalInfo,
  formCompleted: false,
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.activeStep += 1;
    },
    prevStep: (state) => {
      state.activeStep -= 1;
    },
    setStep: (state, action: PayloadAction<ActiveStep>) => {
      state.activeStep = action.payload;
    },
    completeForm: (state) => {
      state.formCompleted = true;
    },
  },
});

export const { nextStep, prevStep, setStep, completeForm } =
  controlsSlice.actions;

export const selectActiveStep = (state: RootState): ActiveStep =>
  state.controls.activeStep;

export const selectFormStatus = (state: RootState): boolean =>
  state.controls.formCompleted;

export default controlsSlice.reducer;
