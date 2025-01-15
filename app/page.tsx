import EducationItem from "@/components/ui/EducationItem";
import HeroLabel from "@/components/ui/HeroLabel";
import IconCard from "@/components/ui/IconCard";
import PortfolioCarousel from "@/components/ui/PortfolioCarousel";
import { Label } from "@radix-ui/react-label";
import { Icon } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-background w-screen lg:h-screen">
      <section className="w-screen lg:h-screen lg:flex relative">
        <div className="lg:w-3/5 p-10 lg:p-20">
          <HeroLabel />
        </div>
        <div className="lg:w-2/5">
          <img
            src="/myimage.png"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="w-screen">
        <Label className="text-primary text-4xl font-bold flex justify-center items-center w-screen p-10">
          Education
        </Label>
        <div className="flex w-screen px-10 lg:px-20">
          <div className="bg-card h-full w-full rounded-md">
            <EducationItem
              instituteName="Sri Krishna Institute of Technology"
              role="Student"
              durationFromTo="2019-2023"
              courseName="Bachelor of Computer Science and Engineering"
              description="I have completed my Bachelor's degree in Computer Science and Engineering from Sri Krishna Institute of Technology, Bangalore. I have learned various programming languages and technologies during my academic journey, which have significantly enhanced my knowledge and expertise in various web technologies."
            />
            <div className="w-auto mx-12 h-[0.5] rounded-full bg-accent"></div>
            <EducationItem
              instituteName="Jana Jyoti Higher Secondary School"
              role="Student"
              durationFromTo="2017-2019"
              courseName="Higher Secondary Education"
              description="I have completed my Higher Secondary Education from Jana Jyoti Higher Secondary School. I have learned various subjects during my academic journey, which have significantly enhanced my knowledge and expertise in various subjects."
            />
          </div>
        </div>
      </section>
      <section className="w-screen">
        <Label className="text-primary text-4xl font-bold flex justify-center items-center w-screen p-10">
          Work History
        </Label>
        <div className="flex w-screen px-10 lg:px-20">
          <div className="bg-card h-full w-full rounded-md">
            <EducationItem
              instituteName="ABC Software Services"
              role="Associate Software Engineer"
              durationFromTo="Sept 2023 - Present"
              courseName="Nodejs, Python, Express, MySQL, PostgreSQL, OpenAI, Azure DevOps"
              description="Spearheaded backend infrastructure development for the AIWIZ application, utilizing Node.js, REST APIs, and OpenAI for legacy system modernization. Collaborated with frontend teams to ensure smooth API integration, improving overall user experience and performance. Managed CI/CD pipelines and deployments through Azure DevOps, reducing release cycle times by 15%. Conducted comprehensive code reviews, improving code quality and maintaining industry best practices."
            />
            <div className="w-auto mx-12 h-[0.5] rounded-full bg-accent"></div>
            <EducationItem
              instituteName="Mevi Technologies"
              role="Web Developer"
              durationFromTo="Nov 2023 - Feb 2024"
              courseName="Nextjs, TypeScript, REST APIs"
              description="Developed a high-performance landing page using Next.js and TypeScript, improving load time by 30% and ensuring full SEO optimization. Integrated backend APIs for real-time data fetching, focusing on state management and enhancing responsiveness across devices. Worked closely with backend engineers to optimize data flow and minimize latency, enhancing the overall user experience."
            />
          </div>
        </div>
      </section>
      <section className="w-screen">
        <Label className="text-primary text-4xl font-bold flex justify-center items-center w-screen p-10">
          Skills
        </Label>
        <div className="flex w-screen px-10 lg:px-20">
          <div className="bg-card h-full w-full rounded-md flex items-center flex-col p-8 lg:p-12">
            <IconCard />
          </div>
        </div>
      </section>
      <section className="w-screen">
        <Label className="text-primary text-4xl font-bold flex justify-center items-center w-screen p-10">
          Portfolio
        </Label>
        <div className="flex w-screen px-10 lg:px-20">
          <div className="bg-card h-full w-full rounded-md flex items-center flex-col p-6 px-0 lg:p-12">
            <PortfolioCarousel />
          </div>
        </div>
      </section>
      <footer className="w-screen flex justify-center items-center flex-col" id="contact">
        <Label className="text-primary text-4xl font-bold flex justify-center items-center w-screen p-10">
          Contact
        </Label>
        <div className="flex w-screen justify-center">
          <div className="lg:w-1/2 w-1/4">
            <Label className="text-card-foreground text-2xl font-bold flex justify-end items-center p-4 lg:p-10">
              Get in touch
            </Label>
          </div>
          <div className="lg:w-1/2 w-3/4 flex">
            <div className="flex gap-4 lg:p-10">
              <div className="flex flex-col gap-4">
                <Label className="text-card-foreground text-sm lg:text-lg font-medium">
                  Email
                </Label>
                <Label className="text-card-foreground text-sm lg:text-lg font-medium">
                  Phone
                </Label>
                <Label className="text-card-foreground text-sm lg:text-lg font-medium">
                  Address
                </Label>
              </div>
              <div className="flex flex-col gap-4">
                <Label className="text-card-foreground text-sm lg:text-lg font-light">
                <a href="mailto:ujwalpaswan1214@gmail.com">ujwalpaswan1214@gmail.com</a>
                </Label>
                <Label className="text-card-foreground text-sm lg:text-lg font-light">
                <a href="tel:+918310235365">+91 8310235365</a>
                </Label>
                <Label className="text-card-foreground text-sm lg:text-lg font-light">
                  Bangalore, India
                </Label>
              </div>
            </div>
          </div>
        </div>
        <Label className="text-muted">© 2023 Ujjwal Paswan</Label>
      </footer>
    </div>
  );
}
