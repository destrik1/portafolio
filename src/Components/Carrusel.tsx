import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos predeterminados del carrusel

type Props = {
  img1: string;
  img2: string;
  img3: string;
  URL: string;
  URL1: string;
  URL2: string;
};

function CarouselComponent({ img1, img2, img3, URL,URL1,URL2 }: Props) {
  // Función para manejar la redirección al hacer clic
  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div style={styles.carouselContainer} className="hover:cursor-pointer">
      <Carousel
        showArrows={true} // Muestra las flechas para cambiar de imagen
        autoPlay={true} // Activa el auto-play
        infiniteLoop={true} // Hace que el carrusel se repita infinitamente
        showThumbs={false} // Oculta los pequeños thumbnails debajo del carrusel
        showStatus={false} // Oculta el contador de imágenes
        interval={10000} // Tiempo entre cada cambio de imagen (8 segundos)
        stopOnHover={true} // Detiene el auto-play cuando el mouse está sobre el carrusel
      >
        {/* Imagen 1 - Redirección a Spotify */}
        <div
          onClick={() =>
            handleRedirect(
             `${URL}`
            )
          }
        >
          <img src={img1} alt="Imagen 1" style={styles.image} />
        </div>

        {/* Imagen 2 - Redirección a Spotify */}
        <div
          onClick={() =>
            handleRedirect(
              `${URL1}`
            )
          }
        >
          <img src={img2} alt="Imagen 2" style={styles.image} />
        </div>

        {/* Imagen 3 - Redirección a Spotify */}
        <div
          onClick={() =>
            handleRedirect(
              `${URL2}`
            )
          }
        >
          <img src={img3} alt="Imagen 3" style={styles.image} />
        </div>
      </Carousel>
    </div>
  );
}

const styles = {
  carouselContainer: {
    maxWidth: "1000px", // Ajusta el ancho del carrusel según sea necesario
    margin: "0 auto", // Centra el carrusel en la página
    marginTop: "0px",
  },
  image: {
    width: "100%", // Hacemos que la imagen ocupe todo el ancho disponible del carrusel
    height: "auto", // Mantiene la proporción de la imagen
    objectFit: "cover" as "cover", // Asegura que la imagen cubra el área sin distorsionarse
  },
};

export default CarouselComponent;
