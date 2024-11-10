import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg"
import s from "./Header.module.scss"


const Header = () => {
    return (
        <header className={s.header}>
            <div className={`${s.container} container`}>

                <img src={logo} className={s.logo} />
                <div className={s.group}>
                    <nav className={s.menu}>
                        <ul className={s.list}>
                            <li className={s.item}><NavLink to={"/"} className={s.link}>Home</NavLink></li>
                            <li className={s.item}><NavLink to={"/blog"}className={s.link}>Blog</NavLink></li>
                            <li className={s.item}><NavLink to={"/aboutUs"}className={s.link}>About Us</NavLink></li>
                            <li className={s.item}><NavLink to={"/contactUs"}className={s.link}>Contact us</NavLink></li>
                        </ul>
                    </nav>
                    <button className={s.button}>Subscribe</button>
                </div>
            </div>
        </header>
    )
}

export default Header;