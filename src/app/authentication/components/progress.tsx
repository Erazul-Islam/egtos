import { Check, ChevronDown } from "lucide-react";

type value = {
  value: string;
};

export function Progress({ value }: value) {
  return (
    <div className="bg-[#F5FEFD]  flex items-center rounded-full border border-[#51F7E4]">
      <div className="bg-[#00A099] rounded-full items-center flex justify-center w-[32px] h-[32px]">
        <ChevronDown color="#FFFFFF" />
      </div>
      <p className="text-[14px] px-2 font-normal text-[#667085]">{value}</p>
    </div>
  );
}

export function Completed() {
  return (
    <div className="bg-[#32D583] border border-[#6CE9A6] rounded-full items-center flex justify-center w-[32px] h-[32px]">
      <Check color="#FFFFFF" />
    </div>
  );
}
export function ProgressButton({ value }: value) {
  return (
    <div className="bg-[#F5FEFD] h-[32px] px-3 flex items-center rounded-full border border-[#EAECF0]">
      <p className="text-[14px] font-normal text-[#667085]">{value}</p>
    </div>
  );
}
