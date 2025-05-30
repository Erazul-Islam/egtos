import { Progress, ProgressButton } from "../../components/progress";

export function CompanyProgress() {
  return (
    <div className="flex mt-4 md:flex-row flex-col items-center">
      <Progress value={"Profile Type"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
      <ProgressButton value={"Basic Information"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Verification"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Company Details"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Location"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Profile & Cover"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Subscription"} />
    </div>
  );
}
export function ConsultantProgress() {
  return (
    <div className="flex mt-4 md:flex-row flex-col items-center">
      <Progress value={"Profile Type"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
      <ProgressButton value={"Basic Information"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Verification"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Company Details"} />
    </div>
  );
}

export function IndependentProgress() {
  return (
    <div className="flex mt-4 md:flex-row flex-col items-center">
      <Progress value={"Profile Type"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
      <ProgressButton value={"Basic Information"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Verification"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Profile & Cover"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Select Profession"} />
      <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
      <ProgressButton value={"Certificate"} />
      
    </div>
  );
}