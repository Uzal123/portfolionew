import React, { ReactNode } from "react";
import { Label } from "./label";
import {
  FaReact,
  FaJava,
  FaAngular,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { VscAzureDevops } from "react-icons/vsc";
import { GrAction } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiApollographql,
  SiMongodb,
  SiSwagger,
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiOpenai,
  SiPython,
  SiLinux,
  SiDocker,
  SiShadcnui 
} from "react-icons/si";

const IconCard = () => {
  return (
    <div className="flex flex-col items-center gap-3 text-card-foreground">
      <Label className="flex justify-center text-2xl text-accent">FrontEnd</Label>
      <div className="flex justify-center flex-wrap lg:flex-nowrap gap-2">
        <IconCardItems icon={<FaReact />} title="React.js" />
        <IconCardItems icon={<RiNextjsLine />} title="Next.js" />
        <IconCardItems icon={<FaAngular />} title="Angular" />
        <IconCardItems icon={<SiJavascript />} title="Javascript" />
        <IconCardItems icon={<SiTypescript />} title="Typescript" />
        <IconCardItems icon={<SiTailwindcss />} title="TailwindCSS" />
        <IconCardItems icon={<SiShadcnui />} title="Shadcn" />
        <IconCardItems icon={<SiBootstrap />} title="Bootstrap" />
        <IconCardItems icon={<SiRedux />} title="Zustand" />
      </div>
      <Label className="flex justify-center text-2xl text-accent">BackEnd</Label>
      <div className="flex justify-center flex-wrap lg:flex-nowrap gap-2">
        <IconCardItems icon={<SiNodedotjs />} title="Node.js" />
        <IconCardItems icon={<SiExpress />} title="Express.js" />
        <IconCardItems icon={<SiNestjs />} title="Nest.js" />
        <IconCardItems icon={<SiGraphql />} title="GraphQL" />
        <IconCardItems icon={<SiMongodb />} title="MongoDB" />
        <IconCardItems icon={<SiSwagger />} title="Swagger" />
        <IconCardItems icon={<SiSpring />} title="Spring Boot" />
        <IconCardItems icon={<FaJava />} title="Java" />
        <IconCardItems icon={<SiPython />} title="Python" />
        <IconCardItems icon={<SiPostgresql />} title="PostgreSQL" />
        <IconCardItems icon={<SiMysql />} title="MySQL" />
        <IconCardItems icon={<SiApollographql />} title="Apollo GraphQL" />
      </div>
      <Label className="flex justify-center text-2xl text-accent">DevOps and Tools</Label>

      <div className="flex justify-center flex-wrap lg:flex-nowrap gap-2">
        <IconCardItems icon={<FaGitAlt />} title="Git" />
        <IconCardItems icon={<FaGithub />} title="Github" />
        <IconCardItems icon={<FaDocker />} title="Docker" />
        <IconCardItems icon={<FaAws />} title="AWS" />
        <IconCardItems icon={<GrAction />} title="CI/CD" />
        <IconCardItems icon={<VscAzureDevops />} title="Azure DevOps" />
      </div>
      <Label className="flex justify-center text-center text-2xl text-accent">Other Technologies</Label>
      <div className="flex justify-center flex-wrap lg:flex-nowrap gap-2">
        <IconCardItems icon={<SiOpenai />} title="OpenAI" />
        <IconCardItems icon={<SiDocker />} title="Docker" />
        <IconCardItems icon={<SiLinux />} title="Linux" />
        <IconCardItems icon={<TbSeo />} title="SEO Optimization" />
        <IconCardItems icon={<FaGithub />} title="Github Actions" />
        <IconCardItems icon={<SiRedux />} title="State Management" />
      </div>
    </div>
  );
};

export default IconCard;

const IconCardItems = ({ icon, title }: { icon: ReactNode; title: string }) => {
  return (
    <div className="w-20 h-20 flex flex-col justify-center items-center">
      <div className="w-14 h-14 rounded-full border-2 border-border p-4 flex text-2xl items-center justify-center hover:scale-110">
        {icon}
      </div>
      <Label className="text-sm text-center h-6 text-card-foreground font-light">{title}</Label>
    </div>
  );
};
