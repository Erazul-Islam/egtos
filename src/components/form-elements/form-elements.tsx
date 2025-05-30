import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type input = {
  type?: string;
  className?: string;
  placeholder?: string;
  label?: string;
};

export function EgtosInput({ type, className, placeholder, label }: input) {
  return (
    <>
      <Label className="text-[#344054] my-1 font-normal text-base">
        {label}
      </Label>
      <input
        type={type}
        placeholder={placeholder}
        className={` ${className} placeholder:text-[#98A2B3] border mt-2 rounded-[12px] py-2 px-4 text-[#1A1A1A] shadow border-[#F2F4F7] focus:outline-none focus:border-[#00A099]`}
      />
    </>
  );
}

type EgtosSelectProps = {
  label: string;
  options: string[];
  className?: string;
  placeholder?: string;
};

export function EgtosSelect({
  label,
  options,
  className,
  placeholder,
}: EgtosSelectProps) {
  return (
    <div className={className}>
      <Label className="text-[#344054] my-1 font-normal text-base">
        {label}
      </Label>
      <Select>
        <SelectTrigger
          className={`mt-2 w-full rounded-[12px] border border-[#F2F4F7] py-2 px-4 text-[#101828] shadow focus:border-[#00A099] focus:outline-none`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white rounded-md shadow-lg border border-[#F2F4F7]">
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
