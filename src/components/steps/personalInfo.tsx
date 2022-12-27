import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfoData, selectPersonalInfoData } from "./stepsSlice";
import StepContainer from "./UI/stepContainer";
import StepDescription from "./UI/stepDescription";
import StepHeading from "./UI/stepHeading";

interface InputProps {
  name: string;
  value: string;
  placeholder?: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, placeholder, onChange, label }: InputProps) => {
  return (
    <div>
      {label && (
        <label className="capitalize text-marine-blue text-xs">{label}</label>
      )}
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const PersonalInfo = () => {
  const { name, email, phone } = useSelector(selectPersonalInfoData);
  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(
      setPersonalInfoData({
        name: event.target.name,
        value,
      })
    );
  };

  return (
    <StepContainer>
      <StepHeading>Personal info</StepHeading>
      <StepDescription>
        Please provide your name, email, address, and the phone number.
      </StepDescription>
      <Input
        name="name"
        value={name}
        onChange={handleOnChange}
        placeholder="e.g. Stephen King"
        label="Name"
      />
      <Input
        name="email"
        value={email}
        onChange={handleOnChange}
        placeholder="e.g. stephenking@lorem.com"
        label="Email Address"
      />
      <Input
        name="phone"
        value={phone}
        onChange={handleOnChange}
        placeholder="e.g. +1 234 567 890"
        label="Phone Number"
      />
    </StepContainer>
  );
};

export default PersonalInfo;
