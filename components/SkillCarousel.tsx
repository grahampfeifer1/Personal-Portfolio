import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const skills = [
  {
    title: "Front-End Development",
    image: "/front-end.png",
    description:
      "Experience designing and creating web applications with HTML, CSS, and JavaScript, using frameworks like React with Next.js.",
  },
  {
    title: "Back-End Development",
    image: "/back-end.png",
    description:
      "Experience creating and modernizing Java SpringBoot microservices with RESTful API endpoints, Object-Oriented Programming in C++, and Predictive Analytics and scripting using Python.",
  },
  {
    title: "DevOps and Cloud Engineering",
    image: "/devops.png",
    description:
      "Experience building and maintaining CI/CD pipelines with Jenkins X, managing Kubernetes workloads in Azure Kubernetes Service (AKS), and supporting cloud infrastructure including Azure SQL and Azure Data Factory. Contributed to developing a test cluster using Tekton and Argo CD to support modern CI/CD workflows.",
  },
]

export function SkillCarousel() {
  return (
    <section
      className="
        bg-[#5b6358] text-center
        px-[10em] py-[4em]
        max-[1000px]:px-[5em] max-[450px]:px-[3em]
      "
    >
        <Carousel
            opts={{ loop: true }}
            className="w-full max-w-6xl mx-auto"
        >
            <CarouselContent>
                {skills.map((skill, index) => (
                <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 flex"
                >
                    <div className="p-2 w-full">
                    <Card className="h-full flex flex-col bg-[#74936a] rounded-[1em]">
                        <CardContent className="p-[2em] flex flex-col flex-grow">
                        
                        <div className="block w-[2.5em] mx-auto mb-[1em]">
                            <Image
                            src={skill.image}
                            alt={skill.title}
                            width={40}
                            height={40}
                            className="block w-full"
                            />
                        </div>

                        <p className="font-bold text-[1.2em] mb-[0.5em] text-center">
                            {skill.title}
                        </p>

                        <p className="text-[0.9em] flex-grow text-center">
                            {skill.description}
                        </p>

                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </section>
  )
}