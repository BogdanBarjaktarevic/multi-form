import { useSelector } from "react-redux";
import useSteps from "../hooks/useSteps";
import { selectActiveStep } from "./steps/stepsSlice";

const FormNavigation = () => {
  const { totalSteps } = useSteps();
  const activeStep = useSelector(selectActiveStep);
  const stepsArray = Array.from({ length: totalSteps }, (_, i) => i + 1);
  const activeStepClasses =
    "text-marine-blue bg-light-blue border-light-blue font-medium";

  return (
    <div className="flex justify-center gap-6 items-center">
      {stepsArray.map((step) => (
        <div
          key={step}
          className={`border-2 rounded-full h-10 w-10 flex items-center justify-center text-white ${
            step === activeStep && activeStepClasses
          }`}
        >
          <span>{step}</span>
        </div>
      ))}

      {/* <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center text-marine-blue bg-light-blue border-light-blue font-medium">
        <span>1</span>
      </div>
      <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center text-white">
        <span>2</span>
      </div>
      <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center text-white">
        <span>3</span>
      </div>
      <div className="border-2 rounded-full h-10 w-10 flex items-center justify-center text-white">
        <span>4</span>
      </div> */}
    </div>
  );
};

export default FormNavigation;
