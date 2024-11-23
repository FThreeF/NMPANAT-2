import s from './PrivacyPolicyHeader.module.scss';

const PrivacyPolicyHeader = () => {
    return (
        <section className={s.privacyPolicyHeader}>
            <div className={`${s.container} container`}>
                <h1 className={s.title}>Privacy Policy</h1>
                <p className={s.text}>Last Updated  on 27th January 2022</p>
            </div>
        </section>
    )
}

export default PrivacyPolicyHeader;