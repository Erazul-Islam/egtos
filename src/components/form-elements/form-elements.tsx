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
  value?: string;
  onChange?: (value:string) => void;
};

export function EgtosInput({
  type,
  className,
  placeholder,
  label,
  value,
  onChange,
}: input) {
  return (
    <>
      <Label className="text-[#344054] my-1 font-normal text-base">
        {label}
      </Label>
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        type={type}
        placeholder={placeholder}
        className={` ${className} placeholder:text-[#98A2B3] border mt-2 rounded-[12px] py-2 px-4 text-[#1A1A1A] shadow border-[#F2F4F7] focus:outline-none focus:border-[#00A099]`}
      />
    </>
  );
}


import { Label } from "@/components/ui/label";

interface EgtosSelectProps {
  label: string;
  options: string[];
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function EgtosSelect({
  label,
  options,
  className,
  placeholder,
  value,
  onChange,
}: EgtosSelectProps) {
  return (
    <div className={className}>
      <Label className="text-[#344054] my-1 font-normal text-base">
        {label}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className="mt-2 w-full rounded-[12px] border border-[#F2F4F7] py-2 px-4 text-[#101828] shadow focus:border-[#00A099] focus:outline-none"
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


type EgtosDatePickerProps = {
  label: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function EgtosDatePicker({
  label,
  className,
  placeholder,
  value,
  onChange,
}: EgtosDatePickerProps) {
  return (
    <div className={className}>
      <label className="text-[#344054] my-1 font-normal text-base block">
        {label}
      </label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-[12px] border border-[#F2F4F7] py-2 px-4 text-[#101828] shadow focus:border-[#00A099] focus:outline-none"
      />
    </div>
  );
}
