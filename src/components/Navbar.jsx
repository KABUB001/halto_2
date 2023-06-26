import { useState } from "react"
import "./navbar.css"
import logo from '../assets/halto.png'
function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = ()=>{
        active === "nav__menu"
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu")
    }
    return(
        <nav className="nav">
            <a href="#" className="nav__brand"><img src={logo} alt="" /></a>
            <ul className={active}>
                <li className="nav__item"><a href="" className="nav">Home</a></li>
                <li className="nav__item"><a href="" className="nav">About</a></li>
                <li className="nav__item"><a href="" className="nav">Home</a></li>
                <li className="nav__item"><a href="" className="nav">CONNEXION</a></li>
                <li className="nav__item"><a href="" className="nav">INSCRIPTION</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar