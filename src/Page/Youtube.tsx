import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CarouselComponent from "../Components/Carrusel";
import Carta from "../Components/Carta";

import img1 from "../assets/img/BannerY.jpg";
import img2 from "../assets/img/BannerY.jpg";
import img3 from "../assets/img/BannerI.jpg";
type Props = {};

function Youtube({}: Props) {
  return (
    <div className="bg-gradient-to-b bg-black from-red-600" >
      <NavBar />
      <CarouselComponent img1={img1} img2={img2} img3={img3} />
      <br/>
      <Carta/>
      <br />
      <Footer />
    </div>
  );
}

export default Youtube;
