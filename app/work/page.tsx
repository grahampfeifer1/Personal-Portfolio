import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    name: "Collision Core™",
    logo: "/collisioncore.png",
    description:
      "Collision Core™ is an enterprise application suite designed to streamline automotive body repair shop management. In my current role, I contribute to developing and modernizing its microservices architecture using Java SpringBoot with RESTful API endpoints as well as building front-end features with the Next.js framework. I am also responsible for managing our cloud-native CI/CD pipelines which are currently using Jenkins X and are being modernized to Tekton for CI and Argo CD for CD. These all run in an Azure Kubernetes Service (AKS) cluster.",
    link: "https://industrial.sherwin-williams.com/na/us/en/automotive/customer-programs/collision-core.html",
    linkLabel: "Learn More",
  },
  {
    name: "Moneyballers",
    logo: "/moneyballers.png",
    description:
      "Moneyballers was my senior capstone project at Ohio University — an NBA betting prediction website that used machine learning and historical game data to generate win probability predictions. The site allowed users to browse upcoming matchups and view model-generated insights to inform their picks.",
    link: "https://moneyballers.web.app",
    linkLabel: "View Site",
  },
]

export default function Projects() {
  return (
    <main>
      <section className="min-h-[87vh] bg-[#5b6358] text-white px-[10em] py-[4em] max-[1000px]:px-[5em] max-[450px]:px-[3em]">
        <h1 className="text-[2em] font-bold text-left mb-[1em]">My Work</h1>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex gap-6 bg-[#74936a] text-black rounded-[1em] p-[1.5em] shadow-[-5px_10px_13px_0px_rgba(15,15,15,0.84)] max-[725px]:flex-col"
            >
              {/* Logo */}
              <div className="flex items-center justify-center min-w-[160px]">
                <div className="w-[120px] h-[120px] relative">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    fill
                    className="object-contain rounded-[0.5em]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between gap-4 text-left">
                <div>
                  <h2 className="text-[1.5em] font-bold mb-[0.5em]">{project.name}</h2>
                  <p className="text-[1em] leading-relaxed">{project.description}</p>
                </div>
                <div>
                  <Link href={project.link} target="_blank" rel="noreferrer noopener">
                    <button className="font-semibold py-[0.75em] px-[2em] rounded-[1em] border-none bg-[#2c3b29] text-white hover:opacity-80 cursor-pointer transition-opacity">
                      {project.linkLabel}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}