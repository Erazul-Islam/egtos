import Image from "next/image";
import { ReactNode } from "react";
import HeadingDetails from "./heading-details";
import { MoveUpRight } from "lucide-react";

type ImageCardOverlayProps = {
  overlaySrc: string;
  title: string;
  description: string;
  icon?: ReactNode;
};

const ImageCardOverlay = ({
  overlaySrc,
  title,
  description,
}: //   icon,
ImageCardOverlayProps) => {
  return (
    <div className="relative w-full max-w-[418px]">
      <Image
        className="object-cover"
        src={"/home/Subtract.png"}
        width={418}
        height={292}
        alt="background"
      />
      <Image
        className="absolute top-8  left-3 md:top-8 md:left-6"
        src={overlaySrc}
        width={40}
        height={40}
        alt="overlay"
      />
      <h1 className="md:text-2xl text-base absolute left-3 top-24 md:top-24 md:left-6 font-semibold text-[#1A1A1A]">
        {title}
      </h1>
      <HeadingDetails
        className="max-w-[400px] absolute top-32 left-3 md:left-6 md:top-32"
        value={description}
      />

      <div className="md:w-14 w-12 h-12 md:h-14 absolute right-0 top-2 border border-[#D0D5DD] flex justify-center items-center rounded-full bg-[#FBFBFB]">
        <MoveUpRight color="#1A1A1A" />
      </div>
    </div>
  );
};

export default ImageCardOverlay;
