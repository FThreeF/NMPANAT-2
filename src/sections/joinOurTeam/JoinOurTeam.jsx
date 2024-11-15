import MainButton from '../../components/mainButtton/MainButton';
import s from './JoinOurTeam.module.scss';

const JoinOurTeam = () => {
    return (
        <section className={s.joinOurTeam}>
            <div className={`${s.container} container`}>
                <h2 className={s.title}>Join our team to be a part of our story</h2>
                <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <MainButton>Join Now</MainButton>
            </div>
        </section>
    )
}

export default JoinOurTeam;