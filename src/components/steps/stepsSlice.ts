import { SelectAddons } from "./types/pickAddons";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  PersonalInfoDataKeys,
  PersonalInfoData,
  PersonalInfoActionPayload,
} from "./types/personalInfo";
import { SelectPlanOption } from "./types/selectPlan";

export enum SelectBillingPlan {
  monthly = "monthly",
  yearly = "yearly",
}

export enum StepsEnum {
  personalInfo = 1,
  selectPlan,
  pickAddons,
  finishUp,
}

export interface StepsState {
  activeStep: keyof typeof initialState.steps;
  billingPlan: SelectBillingPlan;
  formCompleted: boolean;
  steps: {
    [StepsEnum.personalInfo]: {
      data: { name: string; email: string; phone: string };
    };
    [StepsEnum.selectPlan]: {
      data: { option: SelectPlanOption };
    };
    [StepsEnum.pickAddons]: {
      data: {
        [key in keyof typeof SelectAddons]: {
          addonName: string;
          value: boolean;
        };
      };
    };
  };
}

const initialState: StepsState = {
  activeStep: StepsEnum.personalInfo,
  billingPlan: SelectBillingPlan.monthly,
  formCompleted: false,
  steps: {
    [StepsEnum.personalInfo]: { data: { name: "", email: "", phone: "" } },
    [StepsEnum.selectPlan]: {
      data: {
        option: SelectPlanOption.arcade,
      },
    },
    [StepsEnum.pickAddons]: {
      data: {
        [SelectAddons.service]: { addonName: "Online service", value: false },
        [SelectAddons.profile]: {
          addonName: "Customizable profile",
          value: false,
        },
        [SelectAddons.storage]: { addonName: "Larger storage", value: false },
      },
    },
  },
};

export const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.activeStep += 1;
    },
    prevStep: (state) => {
      state.activeStep -= 1;
    },
    setPersonalInfoData: (
      state,
      action: PayloadAction<PersonalInfoActionPayload>
    ) => {
      const key = action.payload.name as PersonalInfoDataKeys;
      state.steps[StepsEnum.personalInfo].data[key] = action.payload.value;
    },
    setPlanOption: (state, action: PayloadAction<SelectPlanOption>) => {
      state.steps[StepsEnum.selectPlan].data.option = action.payload;
    },
    setBillingPlan: (state, action: PayloadAction<SelectBillingPlan>) => {
      state.billingPlan = action.payload;
    },
    checkAddon: (state, action: PayloadAction<SelectAddons>) => {
      const key = action.payload as keyof typeof SelectAddons;
      state.steps[StepsEnum.pickAddons].data[key].value =
        !state.steps[StepsEnum.pickAddons].data[key].value;
    },
    setStep: (
      state,
      action: PayloadAction<keyof typeof initialState.steps>
    ) => {
      state.activeStep = action.payload;
    },
    completeForm: (state) => {
      state.formCompleted = true;
    },
  },
});

export const {
  nextStep,
  prevStep,
  setPersonalInfoData,
  setPlanOption,
  setBillingPlan,
  checkAddon,
  setStep,
  completeForm,
} = stepsSlice.actions;

export const selectPersonalInfoData = (state: RootState): PersonalInfoData =>
  state.steps.steps[StepsEnum.personalInfo].data;

export const selectPlanOption = (state: RootState): SelectPlanOption =>
  state.steps.steps[StepsEnum.selectPlan].data.option;

export const selectBillingPlan = (state: RootState): SelectBillingPlan =>
  state.steps.billingPlan;

export const selectAddons = (state: RootState) =>
  state.steps.steps[StepsEnum.pickAddons].data;

export const selectCheckedAddons = (state: RootState) => {
  return Object.entries(state.steps.steps[StepsEnum.pickAddons].data).filter(
    ([, addon]) => addon.value
  );
};

export const selectActiveStep = (
  state: RootState
): keyof typeof initialState.steps => state.steps.activeStep;

export const selectFormStatus = (state: RootState): boolean =>
  state.steps.formCompleted;

export default stepsSlice.reducer;
