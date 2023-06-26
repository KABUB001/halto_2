import { useState } from "react"
import "./navbar.css"
function Navbar() {
    const [active, setActive] = useState("nav__menu");
    cconst [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = ()=>{
        active === "nav__menu"
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu")
    }
    return(
        <nav className="nav">
            <a href="#" className="nav__brand">Halto</a>
            <ul className={active}>
                <li className="nav__item"><a href="" className="nav">Home</a></li>
                <li className="nav__item"><a href="" className="nav">About</a></li>
                <li className="nav__item"><a href="" className="nav">Home</a></li>
                <li className="nav__item"><a href="" className="nav">Home</a></li>
                <li className="nav__item"><a href="" className="nav">Home</a></li>
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