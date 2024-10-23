import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CarouselComponent from "../Components/Carrusel";

import img1 from "../assets/img/img2.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img2.jpg";

type Props = {};

function Youtube({}: Props) {
  return (
    <>
      <NavBar />
      <CarouselComponent img1={img1} img2={img2} img3={img3} />
      <Footer />
    </>
  );
}

export default Youtube;
