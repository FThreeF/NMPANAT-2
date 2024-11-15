import MainButton from '../../components/mainButtton/MainButton';
import background from '../../assets/backgrounds/HomeHeroBackground.png';
import s from './HomeHero.module.scss';


const HomeHero = () => {
    return (
        <section className={s.homeHero}>
            <img className={s.background} src={background} />
            <div className={`${s.container} container`}>
                <p className={s.inscription}>Posted on <span className={s.inscriptionImportant}>startup</span></p>
                <h2 className={s.title}>Step-by-step guide to choosing <br /> great font pairs</h2>
                <p className={s.date}>By <span className={s.important}>James West</span>  |  May 23, 2022 </p>
                <p className={s.text}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <MainButton className={s.button}>{'Read More >'}</MainButton>
            </div>
        </section>
    )
}

export default HomeHero;