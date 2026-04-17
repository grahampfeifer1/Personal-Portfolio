import Image from "next/image"

export default function About() {
  return (
    <div>
      <section className="
        flex justify-between items-center gap-[4em] min-h-[87vh] bg-[#5b6358]
        px-[10em] py-[4em]
        max-[1000px]:px-[5em]
        max-[725px]:flex-col max-[725px]:text-center max-[725px]:gap-6 max-[725px]:h-screen
        max-[575px]:h-[120vh]
        max-[450px]:px-[3em]
      ">
        <div className="flex-[3] text-left max-[725px]:text-center max-[450px]:leading-loose">
          <h1 className="text-[2em] font-bold text-left text-white mb-[1em]">About Me</h1>
          <p className="text-white text-[17px]">
            I'm Graham Pfeifer, a Software Engineer. I am currently working at Sherwin-Williams, on the Collision Core™ suite of applications. Prior to this position, I had positions as a user experience researcher, ServiceNow developer, as well as a Salesforce System Administrator. I have a Bachelor's of Science in Computer Science with a minor in Business Analytics from Ohio University. During my time at Ohio University, I discovered my passion for Analytics, Data Science, Software Development, and Visualizations. Outside of coding, my interests include sports and music.
          </p>
        </div>
        <div className="
          flex-1 flex justify-center items-center h-[25em] overflow-hidden
          max-[725px]:mx-auto
          max-[450px]:relative
        ">
          <Image
            src="/Graham Pfeifer Professional Headshot.JPG"
            width={400}
            height={400}
            alt="Graham Pfeifer"
            className="h-full w-auto rounded-[0.5em] shadow-[-5px_10px_13px_0px_rgba(15,15,15,0.84)] max-[450px]:h-[15vh] max-[450px]:absolute max-[450px]:top-[75px] max-[450px]:translate-x-1/2"
          />
        </div>
      </section>
    </div>
  )
}