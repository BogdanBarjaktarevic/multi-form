import { useSelector } from "react-redux";
import useSteps from "../../hooks/useSteps";
import { StepsEnum } from "../steps/stepsSlice";
import { selectActiveStep } from "./controlsSlice";

enum StepNamesEnum {
  personalInfo = "Your Info",
  selectPlan = "Select Plan",
  pickAddons = "Add-ons",
  finishUp = "Summary",
}

const FormNavigation = () => {
  const { totalSteps, stepNames } = useSteps();
  const activeStep = useSelector(selectActiveStep);
  const stepsArray = Array.from({ length: totalSteps }, (_, i) => i + 1);
  const activeStepClasses =
    "text-marine-blue bg-light-blue border-light-blue font-medium";

  return (
    <div className="flex justify-center gap-6 items-center md:flex-col md:items-start md:pl-6">
      {stepsArray.map((step: StepsEnum) => (
        <div key={step} className="md:flex md:items-center md:gap-6">
          <div
            className={`border-2 rounded-full h-10 w-10 flex items-center justify-center text-white ${
              step === activeStep && activeStepClasses
            }`}
          >
            <span>{step}</span>
          </div>
          <div className="hidden md:flex md:flex-col md:uppercase">
            <span className="md:text-light-gray md:text-xs">Step {step}</span>
            <span className="md:text-white md:font-medium md:text-sm">
              {stepNames[step]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormNavigation;
