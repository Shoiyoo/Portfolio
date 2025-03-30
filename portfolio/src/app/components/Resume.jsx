const Resume = () => {
    return (
        <section id="resume" className="container mx-auto flex flex-col justify-start min-h-screen">
        <div className="text-center">
            <h1 className="text-6xl font-bold font-retro text-[#ffffffeb]">Resume & Experience</h1>
            <div className="mt-7 space-y-3">
              <details className="rounded-lg p-3">
                <summary className="rounded-md bg-purple-500 py-2 mx-12 cursor-pointer text-[#212529] text-xl">Level 1</summary>
                <div className="grid grid-cols-3 -mb-50 grid-rows-2 pt-6 px-6 place-items-center">
                  <details className="-mt-6 rounded-lg p-3 box-border w-[286px] h-[166px]">
                    <summary className="py-1 mx-9 rounded-xl bg-blue-500 cursor-pointer text-[#212529] text-lg">University</summary>
                    <p className="mt-2 text-white">Lille 3</p>
                  </details>
                  <details className="-mt-6 rounded-lg p-3 box-border w-[286px] h-[166px]">
                    <summary className="py-1 mx-9 rounded-xl bg-[#D43D8A] cursor-pointer text-[#212529] text-lg">Study</summary>
                    <p className="mt-2 text-white">LLCER Japonais</p>
                  </details>
                  <details className="-mt-6 rounded-lg p-3 box-border w-[286px] h-[166px]">
                    <summary className="py-1 mx-9 rounded-xl bg-[#68ACA3] cursor-pointer text-[#212529] text-lg">Skills</summary>
                    <p className="mt-2 text-white">Japonais B1</p>
                    <p className="mt-2 text-white">Anglais C1</p>
                    <p className="mt-2 text-white">Espagnol A2</p>
                  </details>
                </div>
              </details>
            </div>
            <div className="mt-17 space-y-3">
              <details className="rounded-lg p-3">
                <summary className="rounded-md bg-[#e339fa] py-2 mx-12 cursor-pointer text-[#212529] text-xl">Level 2</summary>
                <div className="grid grid-cols-3 -mb-30 grid-rows-2 pt-6 px-6 place-items-center">
                <details className="-mt-6 rounded-lg p-3 box-border w-[286px] h-[166px]">
                    <summary className="py-1 mx-9 rounded-xl bg-blue-500 cursor-pointer text-[#212529] text-lg">University</summary>
                    <p className="mt-2 text-white">Rocket School</p>
                  </details>
                  <details className="-mt-6 rounded-lg p-3 box-border w-[286px] h-[166px]">
                    <summary className="py-1 mx-9 rounded-xl bg-[#D43D8A] cursor-pointer text-[#212529] text-lg">Study</summary>
                    <p className="mt-2 text-white">Business Developer</p>
                  </details>
                  <details className="-mt-6 rounded-lg p-3 box-border w-[286px] h-[166px]">
                    <summary className="py-1 mx-9 rounded-xl bg-[#68ACA3] cursor-pointer text-[#212529] text-lg">Skills</summary>
                    <p className="mt-2 text-white">Travailler en équipe</p>
                    <p className="mt-2 text-white">Compléter des objectifs</p>
                    <p className="mt-2 text-white">S'adapter à de nouvelles techniques</p>
                    <p className="mt-2 text-white">Apprendre différentes approches</p>
                  </details>
                </div>
              </details>
            </div>
            <div className="mt-17 space-y-3">
              <details className="rounded-lg p-3">
                <summary className="rounded-md bg-[#48d5dc] py-2 mx-12 cursor-pointer text-[#212529] text-xl">Level 3</summary>
                <div className="grid grid-cols-3 -mb-30 grid-rows-2 pt-6 px-6 place-items-center">
                <details className="-mt-6 rounded-lg p-3 box-border w-[286px] h-[166px]">
                    <summary className="py-1 mx-9 rounded-xl bg-blue-500 cursor-pointer text-[#212529] text-lg">University</summary>
                    <p className="mt-2 text-white">Epitech</p>
                  </details>
                  <details className="-mt-6 rounded-lg p-3 box-border w-[286px] h-[166px]">
                    <summary className="py-1 mx-9 rounded-xl bg-[#D43D8A] cursor-pointer text-[#212529] text-lg">Study</summary>
                    <p className="mt-2 text-white">Bac+2 Web Developer</p>
                  </details>
                  <details className="transition-all duration-300 ease-in-out -mt-6 rounded-lg p-3 box-border w-[286px] h-[166px]">
                    <summary className="py-1 mx-9 rounded-xl bg-[#68ACA3] cursor-pointer text-[#212529] text-lg">Skills</summary>
                    <p className="mt-2 text-white">De nombreuses technos</p>
                    <p className="mt-2 text-white">Time management</p>
                    <p className="mt-2 text-white">Gestion de projet</p>
                    <p className="mt-2 text-white">Much more ...</p>
                  </details>
                </div>
              </details>
            </div>
          </div>
        </section>
    );
  };
  
  export default Resume;  