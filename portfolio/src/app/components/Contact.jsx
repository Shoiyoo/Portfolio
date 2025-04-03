import Image from 'next/image';

const Contact = () => {
  return (
    <footer id="profil" className="mt-40 container mx-auto flex flex-col items-center justify-around h-screen">
      <h1 className="text-6xl -mt-8 font-bold font-retro text-[#ffffffeb]">Contact me</h1>
      <div>
        <div className="container mt-5">
          <h2 className="text-center mb-4">Contactez-moi</h2>
          <form action="#" method="post" id="form">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="nom" className="block mb-1">Nom</label>
                <input type="text" className="w-full p-2 border rounded" id="nom" name="nom" required />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="prenom" className="block mb-1">Prénom</label>
                <input type="text" className="w-full p-2 border rounded" id="prenom" name="prenom" required />
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" className="w-full p-2 border rounded" id="email" name="email" required />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="telephone" className="block mb-1">Numéro de téléphone</label>
                <input 
                  type="tel" 
                  className="w-full p-2 border rounded" 
                  id="telephone" 
                  name="telephone" 
                  pattern="[0-9]{10}" 
                  required 
                />
                <small className="text-gray-500 mt-1 block">Entrez un numéro de téléphone (ex. 0625374156).</small>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea 
                className="w-full p-2 border rounded" 
                id="message" 
                name="message" 
                rows="4" 
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex justify-center mt-4 space-x-4">
          <li>
            <a 
              href="https://i.postimg.cc/rF0MTT5n/linkedin.webp" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Linkedin"
            >
              <i className="fa-brands fa-linkedin fa-2x" style={{color: "#1153ee"}}></i>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/shoiyoo" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub"
            >
              <i className="fa-brands fa-square-github fa-2x" style={{color: "#bc1ec8"}}></i>
            </a>
          </li>
        </ul>
        <a
          href="https://i.postimg.cc/rF0MTT5n/linkedin.webp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
            src="/images/linkedin.webp" 
            alt="LinkedIn Profile" 
            width={100} 
            height={100} 
            className="rounded-full mt-5" 
          />
        </a>
      </div>
    </footer>
  );
};

export default Contact;