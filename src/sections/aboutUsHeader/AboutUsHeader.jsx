import s from "./AboutUsHeader.module.scss";
import image from "../../assets/images/AboutUsHeaderImage.png";

const AboutUsHeader = () => {
  return (
    <section className={s.aboutUsHeader}>
      <div className={`${s.container} container`}>
        <div className={s.group}>
          <div className={s.block}>
            <div className={s.inscription}>ABOUT US</div>
            <h1 className={s.title}>
              We are a team of content writers who share their learnings
            </h1>
          </div>
          <p className={s.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <img className={s.img} src={image} />
    </section>
  );
};

export default AboutUsHeader;
