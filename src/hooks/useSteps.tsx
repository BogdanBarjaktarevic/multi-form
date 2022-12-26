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

  const totalSteps = Object.keys(steps).length;

  return { steps, totalSteps };
};

export default useSteps;
