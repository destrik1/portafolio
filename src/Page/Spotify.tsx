import NavBar from "../Components/NavBar";
import Playlist from "../Components/AudioPlayer";
import Footer from "../Components/Footer";
import CarouselComponent from "../Components/Carrusel";
import Carta from "../Components/Carta";

import img1 from "../assets/img/BannerS.jpg";
import img2 from "../assets/img/BannerY.jpg";
import img3 from "../assets/img/BannerI.jpg";

type Props = {};
function Spotify({}: Props) {
  return (
    <>
      <div className="bg-gradient-to-b bg-teal-400 from-black">
        <NavBar />
      </div>
      <div className="bg-gradient-to-b bg-black from-teal-400">
        <CarouselComponent
          img1={img1}
          URL="https://open.spotify.com/intl-es/artist/37EytgomE1ofIndtrOGoy2?si=MC2MktG4T8ObO2PmcZGhBQ"
          img2={img2}
          URL1="/youtube"
          img3={img3}
          URL2="https://www.instagram.com/paya.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        />
        <br />
        <Playlist />
        <br />
        <Carta />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Spotify;
