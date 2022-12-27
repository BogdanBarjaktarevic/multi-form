interface StepHeadingProps {
  children: string;
}

const StepHeading = ({ children }: StepHeadingProps) => {
  return <h2 className="text-marine-blue font-bold text-2xl">{children}</h2>;
};

export default StepHeading;
