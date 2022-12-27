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
    <div className="flex flex-col min-h-screen">
      <div className="bg-side-bar-mobile bg-cover bg-no-repeat h-[172px] pt-10">
        <FormNavigation />
      </div>
      <main className="bg-magnolia flex-1 p-4">
        <div className="bg-alabaster shadow-lg rounded-lg -translate-y-16">
          {isFormCompleted ? <FormCompleted /> : <StepComponent />}
        </div>
      </main>
      <div>{isFormCompleted ? null : <FormControls />}</div>
    </div>
  );
};

export default App;
