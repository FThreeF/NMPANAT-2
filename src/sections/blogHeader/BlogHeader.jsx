import MainButton from "../../components/mainButtton/MainButton";
import s from "./BlogHeader.module.scss";
import Image from "../../assets/images/AboutUsHeaderImage.png";

const BlogHeader = () => {
  return (
    <section className={s.blogHeader}>
      <div className={`${s.container} container`}>
        <div className={s.group}>
          <p className={s.inscription}>Featured Post</p>
          <h2 className={s.title}>
            Step-by-step guide to choosing great font pairs
          </h2>
          <p className={s.date}>By <span className={s.dateImportant}>John Doe</span> l May 23, 2022 </p>
          <p className={s.text}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <MainButton>{'Read More >'}</MainButton>
        </div>
        <img src={Image} />
      </div>
    </section>
  );
};

export default BlogHeader;
