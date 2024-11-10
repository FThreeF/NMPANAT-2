import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg"
import s from "./Footer.module.scss"
import icon1 from "../../assets/icons/facebook.svg"
import icon2 from "../../assets/icons/tviter.svg"
import icon3 from "../../assets/icons/instagram.svg"
import icon4 from "../../assets/icons/linkedId.svg"
const Footer = () => {
    return (
        <footer className={s.footer}>

            <div className={`${s.container} container`}>
                <div className={s.group}>
                    <img src={logo} className={s.logo} />
                    <nav className={s.menu}>
                        <ul className={s.list}>
                        <li className={s.item}><NavLink to={"/"} className={s.link}>Home</NavLink></li>
                            <li className={s.item}><NavLink to={"/blog"}className={s.link}>Blog</NavLink></li>
                            <li className={s.item}><NavLink to={"/aboutUs"}className={s.link}>About Us</NavLink></li>
                            <li className={s.item}><NavLink to={"/contactUs"}className={s.link}>Contact us</NavLink></li>
                            <li className={s.item}><NavLink to={"/privacyPolicy"} className={s.link}>Privacy Policy</NavLink></li>
                        </ul>
                    </nav>
                </div>


                <form className={s.form}>
                    <h2 className={s.title}>Subscribe to our news letter to get latest updates and news</h2>
                        <div className={s.block}>
                            <input className={s.input} placeholder="Enter Your Email" />
                            <button className={s.button}>Subscribe</button>
                        </div>
                </form>

                <div className={s.group}>
                    <div className={s.groupText}>
                       <p className={s.text}>Finstreet 118 2561 Fintown</p>
                       <p className={s.text}>Hello@finsweet.com  020 7993 2905</p>
                    </div>
                    <div className={s.groupIcon}>
                        <img className={s.icon} src={icon1} />
                        <img className={s.icon} src={icon2} />
                        <img className={s.icon} src={icon3} />
                        <img className={s.icon} src={icon4} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer