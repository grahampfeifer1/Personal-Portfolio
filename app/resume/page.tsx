export default function Resume() {
    return (
      <main>
        <section className="
          flex flex-col items-center bg-[#5b6358] w-full
          px-[10em] py-[4em]
          max-[1000px]:px-[5em]
          max-[450px]:px-[3em]
        ">
          <div className="flex justify-center items-center mb-[2em] max-[450px]:mb-[1.5em]">
            <h1 className="text-[2em] text-white mr-[6em] max-[450px]:text-[2em] max-[450px]:mr-[1em]">
              Resume
            </h1>
            <a href="/Graham Pfeifer Resume Spring 2026.pdf" download="graham-pfeifer-resume">
              <button className="
                py-[1em] px-[2em] text-[20px] font-semibold
                rounded-[1em] border-none
                bg-[#74936a] text-white opacity-75
                hover:opacity-100 hover:cursor-pointer
                max-[450px]:py-[0.75em] max-[450px]:px-[1.5em] max-[450px]:text-[16px] max-[450px]:opacity-100
              ">
                Download
              </button>
            </a>
          </div>
          <iframe
            src="/Graham Pfeifer Resume Spring 2026.pdf#toolbar=0"
            className="
              w-[60%] h-[110vh] rounded-[0.5em]
              max-[1000px]:h-[90vh]
              max-[850px]:h-[70vh]
              max-[725px]:h-[60vh]
              max-[575px]:w-[90%]
              max-[450px]:w-[80%]
            "
          />
        </section>
      </main>
    )
  }