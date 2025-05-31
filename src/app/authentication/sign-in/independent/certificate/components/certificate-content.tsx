"use client";
import AuthButton from "@/app/authentication/components/auth-button";
import { Completed, Progress } from "@/app/authentication/components/progress";
import SignInHeading from "@/app/authentication/components/sign-in-heading";
import { BackButton } from "@/components/custom/back-button";
import HeadingDetails from "@/components/custom/heading-details";
import {
  EgtosDatePicker,
  EgtosSelect,
} from "@/components/form-elements/form-elements";
import { MoveLeft, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

type CertificateEntry = {
  name: string;
  startDate: string;
  endDate: string;
  coverImage?: string | null;
};

const CertificateContent = () => {
  const router = useRouter();
  const coverInputRef = useRef<HTMLInputElement>(null);
  const [certificateName, setCertificateName] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [certificates, setCertificates] = useState<CertificateEntry[]>([]);

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleAddCertificate = () => {
    if (!certificateName || !startDate || !endDate) return;
    const newCert = { name: certificateName, startDate, endDate, coverImage };
    setCertificates((prev) => [...prev, newCert]);
    setCertificateName("");
    setStartDate("");
    setEndDate("");
  };

  const handleDelete = (index: number) => {
    setCertificates((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="md:order-2 flex flex-col order-1">
      <div className=" px-4 py-4">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>
      <div className="flex px-4  lg:px-16 xl:px-32 2xl:px-64 flex-col justify-center items-center">
        <SignInHeading
          className="text-3xl text-center"
          value="Upload Certificate"
        />
        <HeadingDetails
          className="text-center"
          value="Set Up Your Credentials"
        />
        <div className="flex mt-4 md:flex-row flex-col justify-center items-center">
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Progress value={"Certificate"} />
        </div>
        <EgtosSelect
          className="md:w-[600px] w-full"
          placeholder="Select Job"
          options={[
            "UI UX Designer",
            "FrontEnd Developer",
            "Backend Developer",
          ]}
          value={certificateName}
          label="Certificate Names"
          onChange={(value) => setCertificateName(value)}
        />
        <div className="flex md:w-[600px] mt-3 w-full gap-4">
          <EgtosDatePicker
            className="md:w-[300px] w-full"
            placeholder="Select Start Date"
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
          />
          <EgtosDatePicker
            className="md:w-[300px] w-full"
            placeholder="Select End Date"
            label="End Date"
            onChange={setEndDate}
            value={endDate}
          />
        </div>
        <div
          onClick={() => coverInputRef.current?.click()}
          className="bg-[#F9F9F9] flex flex-col md:w-[600px] mt-8 w-full border-dotted border-2 border-[#00A099] justify-center items-center rounded-2xl h-[200px] relative cursor-pointer"
        >
          {coverImage ? (
            <Image
              src={coverImage}
              alt="cover"
              fill
              className="object-cover rounded-xl"
            />
          ) : (
            <>
              <Image
                src="/company/CameraPlus.svg"
                width={40}
                height={40}
                alt=""
              />
              <p className="text-[#292D32] text-center font-normal text-[14px]">
                Choose a file or drag & drop it here
              </p>
              <p className="text-[#667085] font-normal text-[14px]">
                JPEG, PNG formats, up to 50MB
              </p>
            </>
          )}

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={coverInputRef}
            onChange={handleCoverChange}
          />
        </div>
        <button
          onClick={handleAddCertificate}
          className="py-2 mt-4 w-full text-center justify-center md:mt-8 cursor-pointer rounded-[12px] text-[#667085] px-8 border font-semibold flex items-center gap-2 border-[#D0D5DD] bg-[#F2F4F7]"
        >
          {" "}
          <MoveLeft /> Add
        </button>
        <div className="mt-6 w-full md:w-[600px] grid grid-cols-2 gap-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="border border-[#D0D5DD] bg-[#F9F9F9] p-4 rounded-lg"
            >
              <div className="flex w-full justify-between">
                <div className="flex gap-2">
                  <Image
                    src={cert.coverImage ?? "select image"}
                    alt="Certificate Cover"
                    className="rounded-md"
                    width={40}
                    height={40}
                  />
                  <p className="text-[#101828] font-semibold">{cert.name}</p>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500"
                >
                  <Trash2 className="cursor-pointer" size={20} />
                </button>
              </div>
              <p className="py-2 font-semibold text-[#1A1A1A]">Duration</p>
              <p className="text-sm text-[#667085]">
                {cert.startDate} → {cert.endDate}
              </p>
            </div>
          ))}
        </div>
        <div className="flex py-4 max-w-[600px] w-full md:py-8 gap-4">
          <BackButton href="/authentication/sign-in/independent/profile-cover" />
          <AuthButton
            onClick={() => router.push("/authentication/success")}
            className="w-full"
            value="Continue"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateContent;
