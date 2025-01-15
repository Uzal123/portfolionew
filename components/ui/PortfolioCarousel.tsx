import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@radix-ui/react-label";
import { Button } from "./button";

const PortfolioCarousel = () => {
  return (
    <div className="w-full px-12">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/2">
            <PortfolioCarouselItem
              projectName="MotoGhar"
              imgUrl="/motoghar.png"
              description="Vehicle Rental & Selling Platform
              A cutting-edge platform developed with Next.js, NestJS, and GraphQL, tailored for seamless vehicle rental and sales. It features secure file storage via AWS S3, ensuring data safety and reliability. The platform delivers an intuitive user experience with optimized data handling and responsive interfaces, boosting user engagement by 20%. Whether renting or buying, users enjoy a smooth and efficient experience designed to meet their needs."
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <PortfolioCarouselItem
              projectName="AiWiz"
              imgUrl="/aiwiz.png"
              description="
              Tool for Legacy Application Modernization
               Led the development of AIWIZ, a transformative tool utilizing ReactJS, Node.js, and OpenAI to automate the
              modernization of outdated systems.
               Successfully adopted by multiple corporate clients, reducing manual effort by up to 40% and accelerating the digital
              transformation process."
            />
          </CarouselItem>
          <CarouselItem className="basis-1/2">
            <PortfolioCarouselItem
              projectName="NammaSkit"
              imgUrl="/nammaskit.png"
              description="Vehicle Rental & Selling Platform
                A cutting-edge platform developed with Next.js, NestJS, and GraphQL, tailored for seamless vehicle rental and sales. It features secure file storage via AWS S3, ensuring data safety and reliability. The platform delivers an intuitive user experience with optimized data handling and responsive interfaces, boosting user engagement by 20%. Whether renting or buying, users enjoy a smooth and efficient experience designed to meet their needs."
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PortfolioCarousel;

const PortfolioCarouselItem = ({
  projectName,
  description,
  imgUrl,
}: {
  projectName: string;
  description: string;
  imgUrl: string;
}) => {
  return (
    <div className="w-full h-full bg-card flex flex-col">
      <div>
        <img
          src={imgUrl}
          alt="project"
          className="object-cover aspect-video border border-border"
        />
      </div>
      <div className="flex flex-col h-full p-6 gap-2 border border-border border-t-0 relative pb-16">
        <Label className="text-2xl font-semibold text-card-foreground">
          {projectName}
        </Label>
        <Label className="text-sm text-card-foreground font-light">{description}</Label>
        <Button className="mt-4 absolute bottom-4">Learn More</Button>
      </div>
    </div>
  );
};
