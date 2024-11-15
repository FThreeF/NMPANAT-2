import AboutOurTeam from '../sections/aboutOurTeam/AboutOurTeam';
import AboutUsHeader from '../sections/aboutUsHeader/AboutUsHeader';
import JoinOurTeam from '../sections/joinOurTeam/JoinOurTeam';
import ListOfAuthors from '../sections/listOfAuthors/ListOfAuthors';
import MissionAndVision from '../sections/missionAndVision/MissionAndVision';

const AboutUsPage = () => {
    return (
        <>
            <AboutUsHeader />
            <MissionAndVision />
            <AboutOurTeam />
            <ListOfAuthors />
            <JoinOurTeam />
        </>
    ) 
}

export default AboutUsPage;