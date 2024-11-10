import { Outlet } from "react-router-dom"
import Footer from "../../sections/footer/Footer"
import Header from "../../sections/header/Header"


const MainPage = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainPage;