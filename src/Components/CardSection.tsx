import { FaSpotify } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

import Card from "../Components/Card";
import { Link } from "react-router-dom";

type Props = {};

function CardSection({}: Props) {
  return (
    <>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:gap-10 justify-center px-4">
        <Link to={"/Spotify"} className="flex justify-center">
          <Card
            colorCard={
              "bg-gradient-to-b bg-emerald-500 from-black/50 mb-6 px-6 w-full max-w-[400px] h-[360px] shadow-lg rounded-xl border"
            }
            mt={"mt-8"}
            icon={
              <FaSpotify className="h-16 w-16 md:h-20 md:w-20 text-emerald-500" />
            }
            texto2={"Revisa aquí"}
            texto1={"Explora las opciones alimenticias para una vida saludable"}
          />
        </Link>

        <Link to={"/Youtube"} className="flex justify-center">
          <Card
            colorCard={
              "bg-gradient-to-b bg-red-500 from-red-700 mb-6 px-6 w-full max-w-[400px] h-[360px] shadow-lg rounded-xl border"
            }
            mt={"mt-8"}
            texto2={"Revisa aquí"}
            texto1={"Explora las opciones alimenticias para una vida saludable"}
            icon={
              <FaYoutube className="h-16 w-16 md:h-20 md:w-20 text-red-700" />
            }
          />
        </Link>

        <a
          href="https://www.instagram.com/paya.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== "
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <Card
            colorCard={
              "bg-gradient-to-b bg-amber-400 from-purple-600 mb-6 px-6 w-full max-w-[400px] h-[360px] shadow-lg rounded-xl border"
            }
            mt={"mt-8"}
            icon={
              <RiInstagramFill className="h-16 w-16 md:h-20 md:w-20 text-purple-800" />
            }
            texto2={"Revisa aquí"}
            texto1={"Explora las opciones alimenticias para una vida saludable"}
          />
        </a>
                <Link to={"/Youtube"} className="flex justify-center">
          <Card
            colorCard={
              "bg-gradient-to-b bg-white from-black to-white mb-6 px-6 w-full max-w-[400px] h-[360px] shadow-lg rounded-xl border"
            }
            mt={"mt-8"}
            texto2={"Revisa aquí"}
            texto1={"Explora las opciones alimenticias para una vida saludable"}
            icon={
              <FaTiktok  className="h-16 w-16 md:h-20 md:w-20 text-black" />
            }
          />
        </Link>
      </section>
    </>
  );
}

export default CardSection;
