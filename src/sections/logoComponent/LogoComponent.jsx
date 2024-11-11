import s from './LogoComponent.module.scss';

const LogoComponent = () => {
    return (
        <section className={s.logoComponent}>
            <div className={`${s.container} container`}>
                LogoComponent
            </div>
        </section>
    )
}

export default LogoComponent;