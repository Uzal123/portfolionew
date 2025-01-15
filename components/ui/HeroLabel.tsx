"use client"
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Button } from "./button";

const HeroLabel = () => {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Label className="text-5xl font-bold">I&apos;m Ujjwal Paswan</Label>
      <Label className="text-5xl font-bold">
        <span className="text-primary">Web </span>Developer
      </Label>
      <Label className="pt-4">
        Software Engineer with 2+ years of experience in developing scalable web
        applications and backend services. Skilled in Node.js, React, and AWS,
        with a focus on improving performance and user experience. Proven
        ability to drive innovation through collaboration and modern tech
        solutions, including OpenAI and CI/CD pipelines. Seeking to contribute
        expertise to cutting-edge software projects.
      </Label>
      <div className="flex items-center mt-4">
        <Button className="mt-4" onClick={() => handleContactClick()}>
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default HeroLabel;
