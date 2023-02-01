import React from "react";
import { useSelector } from "react-redux";
import {
  selectActiveStep,
  selectFormStatus,
} from "./components/controls/controlsSlice";
import FormControls from "./components/controls/formControls";
import FormNavigation from "./components/controls/formNavigation";
import FormCompleted from "./components/steps/formCompleted";
import useSteps from "./hooks/useSteps";

const App = () => {
  const activeStep = useSelector(selectActiveStep);
  const isFormCompleted = useSelector(selectFormStatus);
  const { steps } = useSteps();

  const StepComponent = steps[activeStep];

  return (
    <div className="md:flex md:justify-center md:items-center md:min-h-screen md:bg-magnolia">
      <div className="flex flex-col min-h-screen md:flex-row md:min-h-0 md:container md:bg-white md:p-4 md:rounded-lg md:h-[600px] md:max-w-5xl">
        <div className="bg-side-bar-mobile bg-cover bg-no-repeat h-[172px] pt-10 md:bg-side-bar-desktop md:h-auto md:w-[274px] md:bg-cover md:rounded-md">
          <FormNavigation />
        </div>
        <main className="bg-magnolia flex-1 flex flex-col md:bg-white">
          <div className="bg-alabaster shadow-lg rounded-lg -translate-y-16 md:translate-y-0 m-4 md:bg-white md:shadow-none">
            {isFormCompleted ? <FormCompleted /> : <StepComponent />}
          </div>
          <div className="flex flex-col justify-end flex-1">
            {isFormCompleted ? null : <FormControls />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
