import { MoveLeft } from "lucide-react";
import Link from "next/link";

interface link {
  href: string;
  onClick?: () => void;
}

export function BackButton({ href, onClick }: link) {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className="py-2 cursor-pointer rounded-[12px] text-[#98A2B3] px-8 border flex items-center gap-4 border-[#D0D5DD] bg-[#FFFFFF]"
      >
        <MoveLeft color="#98A2B3" /> Back
      </button>
    </Link>
  );
}
