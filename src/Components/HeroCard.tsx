import HeroPhoto from "../assets/img/banner.jpg";

type Props = {};

function HeroImage({}: Props) {
  return (
    <>
      <section className="md:h-[600px]  md:flex md:justify-center ">
        <div className="md:text-left text-center  md:text-4xl text-2xl  md:w-5/12 content-center">
          <p className="text-black-700 font-bold text-justify text-white p-5">
            Hola a todos, soy PAYA, y estoy aquí para compartir mi música y mi
            historia con ustedes.
          </p>
          <br></br>
          <p className="text-base te md:w-10/12 italic text-justify text-white p-5">
            Mi música nace de experiencias, emociones y la vida misma. Creo en
            el poder de la música para unir a las personas, para curar y para
            inspirar. Cada canción es un capítulo de mi viaje, donde exploro el
            amor, la lucha y la esperanza. Estoy emocionado de conectarme con
            cada uno de ustedes a través de mis letras y melodías. ¡Gracias por
            ser parte de este viaje musical!"
          </p>
        </div>

        <img className="md:ml-32 rounded-3xl border p-5" src={HeroPhoto} alt="" />
      </section>
    </>
  );
}

export default HeroImage;
