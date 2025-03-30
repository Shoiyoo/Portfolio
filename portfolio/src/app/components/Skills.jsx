import Image from 'next/image';

const Skills = () => {
    return (
      
                    <section id="skills" className="container mx-auto flex flex-col justify-between h-screen">
                      <div className="text-center">
                        <h1 className="text-6xl font-bold font-retro text-[#ffffffeb]">Skills</h1>
                        <div className="grid grid-cols-3 grid-rows-2 gap-6 pt-10 px-9 place-items-center">
                          <div className="box-border w-[286px] h-[166px] p-6 bg-transparent hover:bg-purple-500/50 transition duration-900 ease-in-out text-center hover:scale-115">
                            <p className="text-2xl text-white">
                              Laravel
                            </p>
                            <Image 
                              src="/images/laravel.png"
                              alt="Logo Laravel" 
                              width={70} 
                              height={30} 
                              className="mx-auto mt-4" 
                            />
                          </div>
                          <div className="box-border w-[286px] h-[166px] p-6 bg-transparent hover:bg-purple-500/50 transition duration-900 ease-in-out text-center hover:scale-115">
                            <p className="text-2xl text-white">
                              Docker
                            </p>
                            <Image 
                              src="/images/docker.png" 
                              alt="Logo Docker" 
                              width={70} 
                              height={30} 
                              className="mx-auto mt-4" 
                            />
                          </div>
                          <div className="box-border w-[286px] h-[166px] p-6 bg-transparent hover:bg-purple-500/50 transition duration-900 ease-in-out text-center hover:scale-115">
                            <p className="text-2xl text-white">
                              Next.js
                            </p>
                            <Image 
                              src="/images/nextjs.png" 
                              alt="Logo Next.js" 
                              width={70} 
                              height={30} 
                              className="mx-auto mt-4" 
                            />
                          </div>
                          <div className="box-border w-[286px] h-[166px] p-6 bg-transparent hover:bg-purple-500/50 transition duration-900 ease-out text-center hover:scale-115">
                            <p className="text-2xl text-white">
                              MongoDB
                            </p>
                            <Image 
                              src="/images/mangodb.png" 
                              alt="Logo MongoDB" 
                              width={70} 
                              height={30} 
                              className="mx-auto mt-4" 
                            />
                          </div>
                          <div className="box-border w-[286px] h-[166px] p-6 bg-transparent hover:bg-purple-500/50 transition duration-900 ease-in-out text-center hover:scale-115">
                            <p className="text-2xl text-white">
                              Node.js
                            </p>
                            <Image 
                              src="/images/nodejs.png" 
                              alt="Logo Node.js"
                              width={70} 
                              height={30} 
                              className="mx-auto mt-4" 
                            />
                          </div>
                          <div className="box-border w-[286px] h-[166px] p-6 bg-transparent hover:bg-purple-500/50 transition duration-900 ease-in-out text-center hover:scale-115">
                            <p className="text-2xl text-white">
                              Tailwind
                            </p>
                            <Image 
                              src="/images/tailwind.png" 
                              alt="Logo Tailwind" 
                              width={70} 
                              height={30} 
                              className="mx-auto mt-4" 
                            />
                          </div>
                        </div>
                      </div>
                    </section>
    );
  };
  
  export default Skills;  