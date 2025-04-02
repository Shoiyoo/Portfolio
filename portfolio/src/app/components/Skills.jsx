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
                              src="https://discord.com/channels/@me/1107524618450911375/1357030988357701753"
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
                              src="https://discord.com/channels/@me/1107524618450911375/1357030967000436807" 
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
                              src="https://discord.com/channels/@me/1107524618450911375/1357031051775447251" 
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
                              src="https://discord.com/channels/@me/1107524618450911375/1357031024139178005" 
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
                              src="https://discord.com/channels/@me/1107524618450911375/1357031065994264759" 
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
                              src="https://discord.com/channels/@me/1107524618450911375/1357031079432945865" 
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