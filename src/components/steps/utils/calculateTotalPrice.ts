import { PLAN_PRICES, ADDONS_PRICES } from "../constants/prices";
import { CheckedAddons } from "./../finishUp";
import { SelectPlanOption } from "./../types/selectPlan";
import { SelectBillingPlan } from "../stepsSlice";

export const calculateTotalPrice = (
  billingPlan: keyof typeof SelectBillingPlan,
  planOption: keyof typeof SelectPlanOption,
  addons: CheckedAddons[]
): string => {
  const billingStr = billingPlan === SelectBillingPlan.yearly ? "yr" : "mo";
  const onlyNumbersRegex = /\D/g;
  const planOptionPrice = parseInt(
    PLAN_PRICES[billingPlan][planOption].replace(onlyNumbersRegex, "")
  );

  let addonsPrice = 0;
  addons.forEach(([key]) => {
    addonsPrice += parseInt(
      ADDONS_PRICES[billingPlan][key].replace(onlyNumbersRegex, "")
    );
  });

  return `$${planOptionPrice + addonsPrice}/${billingStr}`;
};
