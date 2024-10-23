import { FaSpotify } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaCommentMedical } from "react-icons/fa";

import Card from "../Components/Card";
import { Link } from "react-router-dom";
type Props = {};

function CardSection({}: Props) {
  return (
    <>
      <section className="lg:flex gap-20 justify-center grid ">
        <Link to={"/Spotify"}>
          <Card
            colorCard={"bg-gradient-to-b bg-emerald-500 from-black/50 "}
            icon={<FaSpotify className="h-20 w-20 text-emerald-500" />}
            texto2={"Revisa aquí"}
          texto1={"Explora las opciones alimenticias para una vida saludable"}
          />
        </Link>
        <Link to={"/Youtube"}>
          <Card
            colorCard={"bg-gradient-to-b bg-red-500 from-red-700 "}
            texto2={"Revisa aquí"}
            texto1={"Explora las opciones alimenticias para una vida saludable"}
            icon={<FaYoutube className="h-20 w-20 text-red-700" />}
          />
        </Link>
        <Link to={"/Youtube"}>
          <Card
            colorCard={"bg-gradient-to-b bg-amber-400 from-purple-600 "}
            icon={<FaCommentMedical className="h-20 w-20 text-blue-700" />}
            texto2={"Revisa aquí"}
          texto1={"Explora las opciones alimenticias para una vida saludable"}
          />
        </Link>
      </section>
    </>
  );
}

export default CardSection;
