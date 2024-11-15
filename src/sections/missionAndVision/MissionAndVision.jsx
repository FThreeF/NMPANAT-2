import s from "./MissionAndVision.module.scss";

const MissionAndVision = () => {
  return (
    <section className={s.missionAndVision}>
      <div className={`${s.container} container`}>
        <div className="block">
          <p className={s.inscription}>Our mision</p>
          <h3 className={s.title}>
            Creating valuable content for creatives all around the world
          </h3>
          <p className={s.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="block">
          <p className={s.inscription}>Our Vision</p>
          <h3 className={s.title}>
            A platform that empowers individuals to improve
          </h3>
          <p className={s.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
