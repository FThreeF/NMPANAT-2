import s from "./AuthorBlock.module.scss";
import iconFacebook from "../../assets/icons/IconFacebook.svg"
import icon2 from "../../assets/icons/tviter.svg"
import icon3 from "../../assets/icons/instagram.svg"
import icon4 from "../../assets/icons/linkedId.svg"

const AuthorBlock = ({ name, image }) => {
  return (
    <div className={s.authorBlock}>
      <img className={s.image} src={image} />
      <h3 className={s.title}>{name}</h3>
      <p className={s.text}>Content Writer @Company</p>
      <div className={s.groupIcon}>
        <img className={s.icon} src={iconFacebook} />
        <img className={s.icon} src={icon2} />
        <img className={s.icon} src={icon3} />
        <img className={s.icon} src={icon4} />
      </div>
    </div>
  );
};

export default AuthorBlock;
