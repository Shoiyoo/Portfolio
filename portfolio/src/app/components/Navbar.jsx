const Navbar = () => {
    return (
      <nav className="bg-beige fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-around items-center p-4">
          <a
            className="text-[#eeeeeec0] bg-black/60 text-3xl font-bold font-retro hover:text-gray-300 hover:bg-black/100"
            href="#profil"
          >
            Pierre Decaudin
          </a>
          <button
            id="navbar-toggler-button"
            className="lg:hidden text-[#eeeeee87] focus:outline-none"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div className="hidden lg:flex space-x-5" id="navbarNav">
            <a
              className="text-[#eeeeeec0] text-xl hover:text-gray-300"
              href="#profil"
            >
              Profil
            </a>
            <a
              className="text-[#eeeeeec0] text-xl hover:text-gray-300"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-[#eeeeeec0] text-xl hover:text-gray-300"
              href="#resume"
            >
              Resume and Experience
            </a>
            <a
              className="text-[#eeeeeec0] text-xl hover:text-gray-300"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-[#eeeeeec0] text-xl hover:text-gray-300"
              href="#form"
            >
              Contact me
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;  