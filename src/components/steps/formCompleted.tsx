import { useDispatch } from "react-redux";
import ThankYouIcon from "../../assets/icon-thank-you.svg";
import ControlButton from "../controls/controlButton";
import { resetForm } from "../controls/controlsSlice";

const FormCompleted = () => {
  const dispatch = useDispatch();

  return (
    <div className="px-6 py-20 flex flex-col justify-center items-center gap-6">
      <div>
        <img src={ThankYouIcon} alt="Thank you" />
      </div>
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-marine-blue font-bold text-2xl">Thank you!</h2>
        <p className="text-cool-gray text-lg">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
      <ControlButton onClick={() => dispatch(resetForm())}>
        New Plan
      </ControlButton>
    </div>
  );
};

export default FormCompleted;
