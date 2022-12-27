interface StepDescriptionProps {
  children: string;
}

const StepDescription = ({ children }: StepDescriptionProps) => {
  return <p className="text-cool-gray">{children}</p>;
};

export default StepDescription;
