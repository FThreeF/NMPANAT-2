import ChooseCatagory from "../sections/chooseCatagory/ChooseCatagory";
import FeaturedPosts from "../sections/featuredPosts/FeaturedPosts";
import HomeHero from "../sections/homeHero/HomeHero";
import JoinOurTeam from "../sections/joinOurTeam/JoinOurTeam";
import ListOfAuthors from "../sections/listOfAuthors/ListOfAuthors";
import LogoComponent from "../sections/logoComponent/LogoComponent";
import SpecialPost from "../sections/specialPost/SpecialPost";
import Testimonials from "../sections/testimonials/Testimonials";

const HomePage = () => {
    return (
        <>
            <HomeHero />
            <FeaturedPosts />
            <ChooseCatagory />
            <SpecialPost />
            <ListOfAuthors />
            <LogoComponent />
            <Testimonials />
            <JoinOurTeam />
        </>
    )
}

export default HomePage;