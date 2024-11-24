import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars, faClose, faTerminal} from "@fortawesome/free-solid-svg-icons"
import {useState} from "react"
import { navLinks } from "../constants/index.js";


function NavItems() {
    return (
        <div>
            <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key = {id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => {}}> 
                        {name}
                    </a>
                </li>
            ))}
            </ul>
        </div>
    );
}

function Navbar({classname = ""}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className={classname}>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faTerminal}/> Nacho
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
                        <FontAwesomeIcon icon={isOpen ? faClose : faBars} alt = "toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar