import { SkillCarousel } from "@/components/SkillCarousel"
import Image from "next/image"

const languages = [
  { src: "/argo.png", alt: "Argo CD" },
  { src: "/azure.png", alt: "Azure" },
  { src: "/c++.png", alt: "C++" },
  { src: "/css.png", alt: "CSS" },
  { src: "/docker.svg", alt: "Docker" },
  { src: "/git.png", alt: "Git" },
  { src: "/html.png", alt: "HTML" },
  { src: "/javascript.png", alt: "JavaScript" },
  { src: "/java.png", alt: "Java" },
  { src: "/jx.png", alt: "Jenkins X" },
  { src: "/k8s.png", alt: "Kubernetes" },
  { src: "/linux.png", alt: "Linux" },
  { src: "/nextjs.png", alt: "Next.js" },
  { src: "/python.png", alt: "Python" },
  { src: "/springboot.png", alt: "SpringBoot" },
  { src: "/tekton.png", alt: "Tekton" },
]

export default function Home() {
  return (
    <div>
      <section className="
        flex items-center justify-center text-center
        px-[10em] py-[8em] h-[95vh]
        bg-gradient-to-tr from-[#323b31] to-[#6e8566]
        max-[725px]:px-[5em] max-[725px]:py-[6em] max-[725px]:h-[90vh]
        max-[450px]:px-[3em]
      ">
        <div>
          <h1 className="
            text-white text-[3em] font-normal my-[0.5em]
            max-[725px]:text-[2.5em]
            max-[450px]:text-[2.25em]
          ">
            Hi, I'm <span className="font-extrabold">Graham Pfeifer</span>, a dedicated Software Engineer.
          </h1>
          <p className="
            text-white text-[1.5em] font-normal pt-[2em]
            max-[725px]:text-[1.25em] max-[725px]:pt-[1.5em]
            max-[450px]:pt-[1em]
          ">
            👇 My Skills
          </p>
        </div>
      </section>

      <SkillCarousel />

      <section className="
        bg-[#74936a] text-center
        px-[10em] py-[4em]
        max-[1000px]:px-[5em]
        max-[450px]:px-[3em]
      ">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 items-center justify-items-center">
          {languages.map((lang) => (
            <li key={lang.alt}>
              <Image
                src={lang.src}
                alt={lang.alt}
                width={80}
                height={80}
                className="h-[80px] w-auto object-contain max-[850px]:h-[60px] max-[575px]:h-[45px]"
                title={lang.alt}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}