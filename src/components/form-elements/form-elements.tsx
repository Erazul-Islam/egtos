type input = {
  type?: string;
  className?: string;
};

export function EgtosInput({ type, className }: input) {
  return (
    <input
      type={type}
      className={` ${className} border mt-2 rounded-[12px] py-2 px-4 text-[#101828] shadow border-[#F2F4F7] focus:outline-none focus:border-[#00A099]`}
    />
  );
}
