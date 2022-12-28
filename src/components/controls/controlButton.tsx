interface ControlButtonProps {
  onClick: () => void;
  children: string;
}

const ControlButton = ({ onClick, children }: ControlButtonProps) => {
  return (
    <button
      className="px-4 py-3 bg-marine-blue rounded-md text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ControlButton;
