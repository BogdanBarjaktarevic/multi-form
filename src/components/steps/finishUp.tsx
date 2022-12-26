import { useDispatch, useSelector } from "react-redux";
import { ADDONS_PRICES, PLAN_PRICES } from "./constants/prices";
import {
  SelectBillingPlan,
  selectBillingPlan,
  selectCheckedAddons,
  selectPlanOption,
  setStep,
} from "./stepsSlice";
import { SelectAddons } from "./types/pickAddons";
import { calculateTotalPrice } from "./utils/calculateTotalPrice";

export type CheckedAddons = [
  keyof typeof SelectAddons,
  { addonName: string; value: boolean }
];

const FinishUp = () => {
  const checkedAddons = useSelector(selectCheckedAddons) as CheckedAddons[];
  const dispatch = useDispatch();
  const selectedPlan = useSelector(
    selectBillingPlan
  ) as keyof typeof SelectBillingPlan;
  const planOption = useSelector(selectPlanOption);
  const totalPrice = calculateTotalPrice(
    selectedPlan,
    planOption,
    checkedAddons
  );
  const billingStr =
    selectedPlan === SelectBillingPlan.yearly ? "year" : "month";

  return (
    <div className="p-6 gap-2 flex flex-col">
      <h2 className="text-marine-blue font-bold text-2xl">Finishing up</h2>
      <p className="text-cool-gray">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-magnolia p-6 rounded-lg gap-4 flex flex-col mt-4">
        <div className="border-b border-b-light-gray">
          <div className="flex justify-between font-bold text-marine-blue">
            <h3 className="capitalize">
              {planOption} <span className="capitalize">({selectedPlan})</span>
            </h3>
            <p>{PLAN_PRICES[selectedPlan][planOption]}</p>
          </div>
          <div
            className="text-cool-gray mb-2 underline"
            onClick={() => dispatch(setStep(2))}
          >
            Change
          </div>
        </div>

        {checkedAddons.map(([key, addon]) => (
          <div className="flex justify-between" key={key}>
            <p className="text-cool-gray">{addon.addonName}</p>
            <p className="text-marine-blue">
              {ADDONS_PRICES[selectedPlan][key]}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between p-6">
        <p className="text-cool-gray">Total (per {billingStr})</p>
        <p className="text-purplish-blue font-bold">{totalPrice}</p>
      </div>
    </div>
  );
};

export default FinishUp;
