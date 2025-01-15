import React from "react";
import { Label } from "./label";

const EducationItem = ({
  instituteName,
  role,
  durationFromTo,
  courseName,
  description,
}: {
  instituteName: string;
  role: string;
  durationFromTo: string;
  courseName: string;
  description: string;
}) => {
  return (
    <div className="w-full lg:flex p-6 lg:p-12 text-card-foreground">
      <div className="lg:w-2/5 flex flex-col gap-6 pb-6 lg:pb-0">
        <Label className="text-lg font-medium text-card-foreground">
          {instituteName}
        </Label>

        <div className="flex items-center gap-2">
          <Label className="font-light text-card-foreground">{role}</Label>
          <div className="flex justify-start w-full">
            <Label className="bg-accent px-2 flex justify-center items-center text-accent-foreground text-xs lg:text-sm rounded-md">
              {durationFromTo}
            </Label>
          </div>
        </div>
      </div>
      <div className="lg:w-3/5 flex flex-col gap-6">
        <Label className="text-lg font-medium text-card-foreground">
          {courseName}
        </Label>
        <Label className="text-card-foreground font-light">{description}</Label>
      </div>
    </div>
  );
};

export default EducationItem;
