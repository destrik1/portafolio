import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos predeterminados del carrusel

type Props = {
  img1: string;
  img2: string;
  img3: string;
};

function CarouselComponent({ img1, img2, img3 }: Props) {
  return (
    <div style={styles.carouselContainer}>
      <Carousel
        showArrows={true} // Muestra las flechas para cambiar de imagen
        autoPlay={true} // Activa el auto-play
        infiniteLoop={true} // Hace que el carrusel se repita infinitamente
        showThumbs={false} // Oculta los pequeños thumbnails debajo del carrusel
        showStatus={false} // Oculta el contador de imágenes
        interval={8000} // Tiempo entre cada cambio de imagen (3 segundos)
        stopOnHover={true} // Detiene el auto-play cuando el mouse está sobre el carrusel
      >
        <div>
          <img src={img1} alt="Imagen 1" style={styles.image} />
        </div>
        <div>
          <img src={img2} alt="Imagen 2" style={styles.image} />
        </div>
        <div>
          <img src={img3} alt="Imagen 3" style={styles.image} />
        </div>
      </Carousel>
    </div>
  );
}

const styles = {
  carouselContainer: {
    maxWidth: "800px", // Ajusta el ancho del carrusel según sea necesario
    margin: "0 auto", // Centra el carrusel en la página
    marginTop: "20px",
  },
  image: {
    maxWidth: "800px", // Ajusta el ancho del carrusel según sea necesario
    objectFit: "cover" as "cover", // Define correctamente el tipo de objectFit
  },
};

export default CarouselComponent;
