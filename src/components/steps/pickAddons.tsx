import { useDispatch, useSelector } from "react-redux";
import { ADDONS_PRICES } from "./constants/prices";
import { checkAddon, selectAddons, selectBillingPlan } from "./stepsSlice";
import { SelectAddons } from "./types/pickAddons";
import StepContainer from "./UI/stepContainer";
import StepDescription from "./UI/stepDescription";
import StepHeading from "./UI/stepHeading";

interface OptionProps {
  optionName: string;
  optionDescription: string;
  price: string;
  selected: boolean;
  name: SelectAddons;
}

const Option = ({
  optionName,
  optionDescription,
  price,
  selected,
  name,
}: OptionProps) => {
  const dispatch = useDispatch();
  const selectedClasses = "border-purplish-blue bg-magnolia";
  const nonSelectedClasses = "border-light-gray";

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as SelectAddons;
    dispatch(checkAddon(name));
  };

  return (
    <div
      className={`flex gap-4 border  p-4 rounded-lg justify-between items-center ${
        selected ? selectedClasses : nonSelectedClasses
      }`}
    >
      <input
        type="checkbox"
        className="w-6 h-6 accent-purplish-blue md:cursor-pointer"
        checked={selected}
        name={name}
        onChange={handleOnChange}
      />
      <div className="flex-1">
        <h3 className="text-marine-blue font-medium">{optionName}</h3>
        <p className="text-cool-gray text-sm">{optionDescription}</p>
      </div>
      <p className="text-sm text-purplish-blue">{price}</p>
    </div>
  );
};

const PickAddons = () => {
  const addons = useSelector(selectAddons);
  const selectedPlan = useSelector(selectBillingPlan);

  return (
    <StepContainer>
      <StepHeading>Pick add-ons</StepHeading>
      <StepDescription>
        Add-ons help enchance your gaming experience.
      </StepDescription>

      <Option
        optionName={addons[SelectAddons.service].addonName}
        optionDescription="Access to multiplayer games"
        price={ADDONS_PRICES[selectedPlan][SelectAddons.service]}
        selected={!!addons[SelectAddons.service].value}
        name={SelectAddons.service}
      />
      <Option
        optionName={addons[SelectAddons.storage].addonName}
        optionDescription="Extra 1TB of cloud save"
        price={ADDONS_PRICES[selectedPlan][SelectAddons.storage]}
        selected={!!addons[SelectAddons.storage].value}
        name={SelectAddons.storage}
      />
      <Option
        optionName={addons[SelectAddons.profile].addonName}
        optionDescription="Custom theme on your profile"
        price={ADDONS_PRICES[selectedPlan][SelectAddons.profile]}
        selected={!!addons[SelectAddons.profile].value}
        name={SelectAddons.profile}
      />
    </StepContainer>
  );
};

export default PickAddons;
