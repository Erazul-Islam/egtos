// components/TabButton.tsx
type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  width: string;
};

const TabButton = ({ label, isActive, onClick, width }: TabButtonProps) => {
  return (
    <button
      className={`${width} rounded-xl shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95 py-3 ${
        isActive ? "bg-[#00A099] text-white" : "bg-[#F7F7F7] text-black"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
