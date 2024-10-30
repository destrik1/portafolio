import { FaSpotify } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import Card from "../Components/Card";
import { Link } from "react-router-dom";
type Props = {};

function CardSection({}: Props) {
  return (
    <>
      <section className="lg:flex gap-20 justify-center grid ">
        <Link to={"/Spotify"}>
          <Card
            colorCard={
              "bg-gradient-to-b bg-emerald-500 from-black/50 mb-6 px-6  w-[400px] max-h-[360px] h-[360px] max-md:mx-2  shadow-lg rounded-xl border"
            }
            icon={<FaSpotify className="h-20 w-20 text-emerald-500" />}
            texto2={"Revisa aquí"}
            texto1={"Explora las opciones alimenticias para una vida saludable"}
          />
        </Link>
        <Link to={"/Youtube"}>
          <Card
            colorCard={
              "bg-gradient-to-b bg-red-500 from-red-700 mb-6 px-6  w-[400px] max-h-[360px] h-[360px] max-md:mx-2  shadow-lg rounded-xl border "
            }
            texto2={"Revisa aquí"}
            texto1={"Explora las opciones alimenticias para una vida saludable"}
            icon={<FaYoutube className="h-20 w-20 text-red-700" />}
          />
        </Link>
        <a
          href="https://www.instagram.com/paya.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== "
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            colorCard={
              "bg-gradient-to-b bg-amber-400 from-purple-600 mb-6 px-6  w-[400px] max-h-[360px] h-[360px] max-md:mx-2  shadow-lg rounded-xl border "
            }
            icon={<FiInstagram className="h-20 w-20 text-purple-800" />}
            texto2={"Revisa aquí"}
            texto1={"Explora las opciones alimenticias para una vida saludable"}
          />
        </a>
      </section>
    </>
  );
}

export default CardSection;
