import { useDispatch, useSelector } from "react-redux";
import {
  selectBillingPlan,
  SelectBillingPlan,
  setBillingPlan,
} from "./stepsSlice";

const ToggleBillingPlan = () => {
  const dispatch = useDispatch();
  const selectedPlan = useSelector(selectBillingPlan);

  const handleChangeBillingPlan = () => {
    selectedPlan === SelectBillingPlan.monthly
      ? dispatch(setBillingPlan(SelectBillingPlan.yearly))
      : dispatch(setBillingPlan(SelectBillingPlan.monthly));
  };

  return (
    <div className="flex items-center justify-center bg-magnolia rounded-md py-3 gap-4 mt-4">
      <p
        className={`text-marine-blue font-medium ${
          selectedPlan === SelectBillingPlan.yearly && "text-light-gray"
        }`}
      >
        Monthly
      </p>
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={handleChangeBillingPlan}
          checked={selectedPlan === SelectBillingPlan.yearly}
          readOnly
        />
        <div className="w-9 h-5 bg-marine-blue peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-marine-blue"></div>
      </label>
      <p
        className={`text-marine-blue font-medium ${
          selectedPlan === SelectBillingPlan.monthly && "text-light-gray"
        }`}
      >
        Yearly
      </p>
    </div>
  );
};

export default ToggleBillingPlan;
