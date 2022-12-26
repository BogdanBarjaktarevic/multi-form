import { useDispatch, useSelector } from "react-redux";
import ArcadeLogo from "../../assets/icon-arcade.svg";
import AdvancedLogo from "../../assets/icon-advanced.svg";
import ProLogo from "../../assets/icon-pro.svg";
import { SelectPlanOption } from "./types/selectPlan";
import {
  SelectBillingPlan,
  selectBillingPlan,
  selectPlanOption,
  setPlanOption,
} from "./stepsSlice";
import ToggleBillingPlan from "./toggleBillingPlan";

interface OptionProps {
  icon: string;
  price: string;
  optionName: string;
  onClick: () => void;
  selected: boolean;
  plan: SelectBillingPlan;
}

const Option = ({
  icon,
  price,
  optionName,
  selected,
  onClick,
  plan,
}: OptionProps) => {
  const selectedClasses = "border-purplish-blue bg-magnolia";
  const nonSelectedClasses = "border-light-gray";
  const shouldShowFreeMonths = plan === SelectBillingPlan.yearly;

  return (
    <div
      className={`flex gap-4 border  p-4 rounded-lg ${
        selected ? selectedClasses : nonSelectedClasses
      }`}
      onClick={onClick}
    >
      <div>
        <img src={icon} alt="Arcade" />
      </div>
      <div>
        <h3 className="text-marine-blue font-medium">{optionName}</h3>
        <p className="text-cool-gray text-sm">{price}</p>

        {shouldShowFreeMonths && (
          <p className="text-marine-blue text-sm">2 months free</p>
        )}
      </div>
    </div>
  );
};

const SelectPlan = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(selectPlanOption);
  const selectedPlan = useSelector(selectBillingPlan);

  const PRICES = {
    monthly: {
      arcade: "$9/mo",
      advanced: "$12/mo",
      pro: "$15/mo",
    },
    yearly: {
      arcade: "$90/yr",
      advanced: "$120/yr",
      pro: "$150/yr",
    },
  };

  return (
    <div className="p-6 gap-2 flex flex-col">
      <h2 className="text-marine-blue font-bold text-2xl">Select your plan</h2>
      <p className="text-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <Option
        icon={ArcadeLogo}
        optionName="Arcade"
        price={PRICES[selectedPlan][SelectPlanOption.arcade]}
        onClick={() => dispatch(setPlanOption(SelectPlanOption.arcade))}
        selected={selectedOption === SelectPlanOption.arcade}
        plan={selectedPlan}
      />
      <Option
        icon={AdvancedLogo}
        optionName="Advanced"
        price={PRICES[selectedPlan][SelectPlanOption.advanced]}
        onClick={() => dispatch(setPlanOption(SelectPlanOption.advanced))}
        selected={selectedOption === SelectPlanOption.advanced}
        plan={selectedPlan}
      />
      <Option
        icon={ProLogo}
        optionName="Pro"
        price={PRICES[selectedPlan][SelectPlanOption.pro]}
        onClick={() => dispatch(setPlanOption(SelectPlanOption.pro))}
        selected={selectedOption === SelectPlanOption.pro}
        plan={selectedPlan}
      />
      <ToggleBillingPlan />
    </div>
  );
};

export default SelectPlan;
