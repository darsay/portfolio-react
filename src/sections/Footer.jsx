const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">
  
        <a href="https://github.com/darsay" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-3">
                <div className="social-icon hover:scale-110 transition-transform duration-300">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </div>
            </div>
        </a>

        <a href="https://www.linkedin.com/in/ignacio-molina-gamedev/" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-3">
                <div className="social-icon hover:scale-110 transition-transform duration-300">
                    <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
                </div>
            </div>
        </a>

        <a href="https://darsay.itch.io/" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-3">
                <div className="social-icon hover:scale-110 transition-transform duration-300">
                    <img src="/assets/itchio.svg" alt="itchio" className="w-1/2 h-1/2" />
                </div>
            </div>
        </a>

      </footer>
    );
  };
  
  export default Footer;