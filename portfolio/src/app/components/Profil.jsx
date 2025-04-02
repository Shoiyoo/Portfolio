import Image from 'next/image';

const Profil = () => {
    return (
      <section id="profil" className="mt-40 container mx-auto flex flex-col items-center justify-around h-screen">
                      <div className="text-center">
                        <h1 className="text-6xl font-bold font-retro text-[#ffffffeb] -mt15">Profil</h1>
                        <div className="grid grid-cols-6 gap-1 pt-15 px-9">
                          <div className="col-span-2 flex flex-col items-center -mt-9">
                            <Image
                              src="https://discord.com/channels/@me/1107524618450911375/1357030930413391893" 
                              alt="Photo Pierre Decaudin"
                              width={300}
                              height={300}
                              className="max-w-none rounded img-fluid img-thumbnail ring-4 ring-white"
                            />
                            <div className="flex space-x-4 mt-4">
                              <p className="ring-2 hover:bg-white hover:text-black rounded-lg btn btn-outline-warning p-1 text-l text-white">
                                Linux User
                              </p>
                              <p className="ring-2 hover:bg-[#17A2B8] hover:text-white rounded-lg btn btn-outline-warning p-1 text-l text-[#17A2B8]">
                                Web Developer
                              </p>
                            </div>
                          <p className="mt-4 -ml-9 ring-2 hover:bg-[#6C757D] hover:text-white rounded-lg btn btn-outline-warning p-1 text-l text-[#6C757D]">
                              Curious
                          </p>
                          </div>
                          <div className='text-xl text-[#ffffffeb] col-start-3 col-end-5'>
                            <h2 className="text-3xl">À propos de moi :</h2> 
                            <p className="mt-2"> Je suis Pierre Decaudin, 24 ans, Étudiant en WebAcademie à Epitech.</p> 
                            <h2 className="text-3xl mt-5">Mes centres d'intérêt :</h2>
                            <ul className='list-disc text-left mt-2 ml-11'>
                              <li>Apprendre de nouvelles technos</li>
                              <li>Langues étrangères</li>
                              <li>Jeux de gestion et stratégie</li>
                              <li>Voyage</li>
                            </ul>
                          </div>  
                          <div className='mt-27 ml-21'>
                            <a className="ring-2 hover:bg-[#ffC107] hover:text-white  rounded-lg btn btn-outline-warning p-3 button btn-lg text-xl text-[#ffC107]" href="dev_webdev_Pierre_Decaudin.pdf" download>CV</a>
                          </div>
                        </div>
                      </div>
                    </section>
    );
  };
  
  export default Profil;  