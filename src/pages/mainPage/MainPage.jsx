import { Outlet } from "react-router-dom"
import Footer from "../../sections/footer/Footer"
import Header from "../../sections/header/Header"
import s from "./MainPage.module.scss"

const MainPage = () => {
    return (
        <>
            <Header />
            <main className={s.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainPage;