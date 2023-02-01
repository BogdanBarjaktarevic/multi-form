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
import { resetForm } from "../controls/controlsSlice";

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

export type ActiveStep = keyof typeof initialState.steps;

export interface StepsState {
  billingPlan: SelectBillingPlan;
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
    [StepsEnum.finishUp]: {};
  };
}

const initialState: StepsState = {
  billingPlan: SelectBillingPlan.monthly,
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
    [StepsEnum.finishUp]: {},
  },
};

export const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
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
  },
  extraReducers(builder) {
    builder.addCase(resetForm, () => initialState);
  },
});

export const {
  setPersonalInfoData,
  setPlanOption,
  setBillingPlan,
  checkAddon,
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

export default stepsSlice.reducer;
