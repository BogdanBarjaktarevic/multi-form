import FinishUp from "../components/steps/finishUp";
import PersonalInfo from "../components/steps/personalInfo";
import PickAddons from "../components/steps/pickAddons";
import SelectPlan from "../components/steps/selectPlan";
import { StepsEnum } from "../components/steps/stepsSlice";

const useSteps = () => {
  const steps = {
    [StepsEnum.personalInfo]: PersonalInfo,
    [StepsEnum.selectPlan]: SelectPlan,
    [StepsEnum.pickAddons]: PickAddons,
    [StepsEnum.finishUp]: FinishUp,
  };

  const stepNames = {
    [StepsEnum.personalInfo]: "Your Info",
    [StepsEnum.selectPlan]: "Select Plan",
    [StepsEnum.pickAddons]: "Add-ons",
    [StepsEnum.finishUp]: "Summary",
  };

  const totalSteps = Object.keys(steps).length;

  return { steps, totalSteps, stepNames };
};

export default useSteps;
