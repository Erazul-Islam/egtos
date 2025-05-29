import { Label } from "../ui/label";

type input = {
  type?: string;
  className?: string;
  placeholder?: string;
  label?: string;
};

export function EgtosInput({ type, className, placeholder,label }: input) {
  return (
    <>
      <Label className="text-[#344054] my-1 font-normal text-base">{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        className={` ${className} placeholder:text-[#98A2B3] border mt-2 rounded-[12px] py-2 px-4 text-[#101828] shadow border-[#F2F4F7] focus:outline-none focus:border-[#00A099]`}
      />
    </>
  );
}
