import { useState } from "react";
import s from "./ListOfAuthors.module.scss";
import AuthorBlock from "../../components/authorBlock/AuthorBlock";
import imageFloydMiles from "../../assets/images/ImageFloydMiles.png";
import imageDianneRussell from "../../assets/images/ImageDianneRussell.png";
import imageJennyWilson from "../../assets/images/ImageJennyWilson.png";
import imageLeslieAlexander from "../../assets/images/ImageLeslieAlexander.png";
import imageGuyHawkins from "../../assets/images/ImageGuyHawkins.png";
import imageEleanorPena from "../../assets/images/ImageEleanorPena.png";
import imageRobertFox from "../../assets/images/ImageRobertFox.png";
import imageJacobJones from "../../assets/images/ImageJacobJones.png";



const ListOfAuthors = () => {
  const [authors, setAuthors] = useState([
    {
      name: "Floyd Miles",
      image: imageFloydMiles,
    },
    {
      name: "Dianne Russell",
      image: imageDianneRussell,
    },
    {
      name: "Jenny Wilson",
      image: imageJennyWilson,
    },
    {
      name: "Leslie Alexander",
      image: imageLeslieAlexander,
    },
    {
      name: "Guy Hawkins",
      image: imageGuyHawkins,
    },
    {
      name: "Eleanor Pena",
      image: imageEleanorPena,
    },
    {
      name: "Robert Fox",
      image: imageRobertFox,
    },
    {
      name: "Jacob Jones",
      image: imageJacobJones,
    },
  ]);

  return (
    <section className={s.listOfAuthors}>
      <div className={`${s.container} container`}>
        <h2 className={s.title}>List of Authors</h2>
        <div className={s.group}>
          {authors.map((author) => (
            <AuthorBlock name={author.name} image={author.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListOfAuthors;
