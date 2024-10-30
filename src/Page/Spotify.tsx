import NavBar from "../Components/NavBar";
import Playlist from "../Components/AudioPlayer";
import Footer from "../Components/Footer";
import CarouselComponent from "../Components/Carrusel";
import Carta from "../Components/Carta";

import img1 from "../assets/img/img2.jpg";
import img2 from "../assets/img/img3.jpg";
import img3 from "../assets/img/img2.jpg";

type Props = {};
function Spotify({}: Props) {
  return (
    <>
      <NavBar />
      <CarouselComponent img1={img1} img2={img2} img3={img3} />
      <Playlist />
      <Carta/>
      <br/> 
      <Footer />
    </>
  );
}

export default Spotify;
