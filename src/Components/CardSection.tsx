import { FaSpotify } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

import Card from "../Components/Card";
import { Link } from "react-router-dom";

type Props = {};

function CardSection({}: Props) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:gap-10 justify-center px-4">
      <Link to={"/Spotify"} className="flex justify-center w-full max-w-[400px]">
        <Card
          colorCard={
            "bg-gradient-to-b bg-emerald-500 from-black/50 mb-6 px-6 w-full h-[360px] shadow-lg rounded-xl border"
          }
          mt={"mt-8"}
          icon={<FaSpotify className="h-16 w-16 md:h-20 md:w-20 text-emerald-500" />}
          texto1={"Descubre más de mis canciones en Spotify"}
          texto2={"Descúbrelo aquí"}
        />
      </Link>

      <Link to={"/Youtube"} className="flex justify-center w-full max-w-[400px]">
        <Card
          colorCard={
            "bg-gradient-to-b bg-red-500 from-red-700 mb-6 px-6 w-full h-[360px] shadow-lg rounded-xl border"
          }
          mt={"mt-8"}
          texto1={"Mira mis videos en YouTube"}
          texto2={"Descúbrelo aquí"}
          icon={<FaYoutube className="h-16 w-16 md:h-20 md:w-20 text-red-700" />}
        />
      </Link>

      <a
        href="https://www.instagram.com/paya.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== "
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center w-full max-w-[400px]"
      >
        <Card
          colorCard={
            "bg-gradient-to-b bg-amber-400 from-purple-600 mb-6 px-6 w-full h-[360px] shadow-lg rounded-xl border"
          }
          mt={"mt-8"}
          icon={<RiInstagramFill className="h-16 w-16 md:h-20 md:w-20 text-purple-800" />}
          texto1={"Sígueme en Instagram"}
          texto2={"Descúbrelo aquí"}
        />
      </a>

      <Link
        to={"https://www.tiktok.com/@paya.cl?_t=8rraJIjcgh6&_r=1"}
        className="flex justify-center w-full max-w-[400px]"
      >
        <Card
          colorCard={
            "bg-gradient-to-b bg-white from-black to-white mb-6 px-6 w-full h-[360px] shadow-lg rounded-xl border"
          }
          mt={"mt-8"}
          texto1={"Ve mis videos directamente en TikTok"}
          texto2={"Descúbrelo aquí"}
          icon={<FaTiktok className="h-16 w-16 md:h-20 md:w-20 text-black" />}
        />
      </Link>
    </section>
  );
}

export default CardSection;
