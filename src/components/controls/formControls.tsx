import { useDispatch, useSelector } from "react-redux";
import useSteps from "../../hooks/useSteps";
import {
  selectActiveStep,
  prevStep,
  completeForm,
  nextStep,
} from "./controlsSlice";

const FormControls = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector(selectActiveStep);
  const { totalSteps } = useSteps();
  const lastStep = activeStep === totalSteps;

  return (
    <div className="bg-alabaster text-white flex justify-between items-center p-4 shadow-md font-medium">
      <div>
        {activeStep > 1 && (
          <p className="text-cool-gray" onClick={() => dispatch(prevStep())}>
            Go Back
          </p>
        )}
      </div>
      <div>
        {lastStep ? (
          <button
            className="px-4 py-3 bg-marine-blue rounded-md"
            onClick={() => dispatch(completeForm())}
          >
            Confirm
          </button>
        ) : (
          <button
            className="px-4 py-3 bg-marine-blue rounded-md"
            onClick={() => dispatch(nextStep())}
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
};

export default FormControls;
