import { useDispatch, useSelector } from "react-redux";
import useSteps from "../../hooks/useSteps";
import ControlButton from "./controlButton";
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
  const shouldShowGoBack = activeStep > 1;

  return (
    <div className="bg-alabaster text-white flex justify-between items-center p-4 shadow-md font-medium">
      <div>
        {shouldShowGoBack && (
          <p className="text-cool-gray" onClick={() => dispatch(prevStep())}>
            Go Back
          </p>
        )}
      </div>
      <div>
        {lastStep ? (
          <ControlButton onClick={() => dispatch(completeForm())}>
            Confirm
          </ControlButton>
        ) : (
          <ControlButton onClick={() => dispatch(nextStep())}>
            Next Step
          </ControlButton>
        )}
      </div>
    </div>
  );
};

export default FormControls;
