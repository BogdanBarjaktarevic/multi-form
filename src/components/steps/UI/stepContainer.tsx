interface StepContainerProps {
  children: React.ReactNode;
}

const StepContainer = ({ children }: StepContainerProps) => {
  return <div className="p-6 gap-2 flex flex-col">{children}</div>;
};

export default StepContainer;
