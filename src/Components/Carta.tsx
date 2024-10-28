import { FaSpotify } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import Card from "../Components/Card";
import { Link } from "react-router-dom";
type Props = {};
function carta({}: Props) {
  return (
    <>
      <section className="lg:flex gap-20 justify-center grid">
        <a
          href="https://open.spotify.com/intl-es/artist/37EytgomE1ofIndtrOGoy2?si=MC2MktG4T8ObO2PmcZGhBQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            colorCard={
              "bg-gradient-to-b from-emerald-700 to-emerald-500 shadow-lg rounded-full border border-emerald-500 w-60 h-60 flex items-center justify-center"
            }
            icon={<FaSpotify className="h-20 w-20 text-emerald-500" />}
            texto2={""}
            texto1={""}
          />
        </a>
        <a
          href="https://www.instagram.com/paya.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            colorCard={
              "bg-gradient-to-b from-red-700 to-red-500 shadow-lg rounded-full border border-red-700 w-60 h-60 flex items-center justify-center"
            }
            icon={<FaYoutube className="h-20 w-20 text-red-700" />}
            texto2={""}
            texto1={""}
          />
        </a>
        <a
          href="https://www.instagram.com/paya.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== "
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            colorCard={
              "bg-gradient-to-b from-purple-600 to-amber-400 shadow-lg rounded-full border border-purple-600 w-60 h-60 flex items-center justify-center"
            }
            icon={<FiInstagram className="h-20 w-20 text-purple-800" />}
            texto2={""}
            texto1={""}
          />
        </a>
       
      </section>
    </>
  );
}

export default carta;
