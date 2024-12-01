import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CarouselComponent from "../Components/Carrusel";
import Carta from "../Components/Carta";
import VideoCard from "../Components/VideoCard";

import video1 from "../assets/Video/esa_droga.mp4";
import video2 from "../assets/Video/video2.mp4";
import video3 from "../assets/Video/Llamame.mp4";
import video4 from "../assets/Video/El Momento.mp4";
import img1 from "../assets/img/BannerY.jpg";
import img2 from "../assets/img/BannerS.jpg";
import img3 from "../assets/img/BannerI.jpg";
type Props = {};

function Youtube({}: Props) {
  return (
    <>
      <div className="bg-gradient-to-b bg-red-600 from-black">
        <NavBar />
      </div>
      <div className="bg-gradient-to-b bg-black from-red-600">
        <CarouselComponent
          img1={img1}
          URL="/youtube"
          img2={img2}
          URL1="https://open.spotify.com/intl-es/artist/37EytgomE1ofIndtrOGoy2?si=MC2MktG4T8ObO2PmcZGhBQ"
          img3={img3}
          URL2="https://www.instagram.com/paya.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        />
        <br />
        <div className="flex flex-wrap justify-center gap-6 p-8">
          <VideoCard
            videoSrc={video1}
            title="Esa Droga"
            Youtube="https://www.youtube.com/watch?v=Z17LOZi4tCw"
          />
          <VideoCard
            videoSrc={video2}
            title="Pegao Pegao"
            Youtube="https://www.youtube.com/watch?v=Z17LOZi4tCw"
          />
          <VideoCard
            videoSrc={video3}
            title="Llamame"
            Youtube="https://www.youtube.com/watch?v=OLmFZAgRcfs"
          />
          <VideoCard
            videoSrc={video4}
            title="El Momento"
            Youtube="https://www.youtube.com/watch?v=NVuc4C25WmY"
          />
        </div>
        <Carta />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Youtube;
