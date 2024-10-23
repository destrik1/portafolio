import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"; // Importa los iconos que necesites

const Footer = () => {
  return (
    <footer className="bg-black px-10 py-3 text-center text-white">
      <div className="inline-flex justify-between max-w-[1000px] m-0 flex-wrap">
        <div className="flex-1 p-1 min-w-[200px] ">
          <h4 className="bg-black px-5 py-1 text-center my-4 text-white text-2xl">
            Sobre Nosotros
          </h4>
          <p className="text-justify">
            Somos una compañía dedicada a la música y a compartir las mejores
            playlists con el mundo.
          </p>
        </div>

        <div className="flex-1 min-w-[100/30px] ">
          <ul className="text-xs mb-2">
            <li></li>
          </ul>
        </div>

        <div className="flex-1 min-w-[100px] ">
          <h4 className="flex text-center mb-[20px] ">Síguenos</h4>
          <ul className="">
            <li className="theme.listStyleType :">
              <a className="flex  mb-[1px]"
                href="https://open.spotify.com/intl-es/artist/37EytgomE1ofIndtrOGoy2?si=MC2MktG4T8ObO2PmcZGhBQ"
              
              >
                <FaFacebook className="mr-2" /> Spotify
              </a>
              <br></br>
            </li>
            <li className="flex  bottom-[1px]">
              <a
                href="https://www.instagram.com/paya.cl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="flex  mb-[1px]"
              > 
                <FaInstagram className="mr-2" /> Instagram
              </a>
              <br/>
            </li>
            <br/>
            <li className="flex items-center bottom-[1px]">
              <a href="https://twitter.com" className="flex text-center mb-[1px]">
                <FaYoutube className="mr-2" /> Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-[20px] p-[10px]">
        <p>
          &copy; {new Date().getFullYear()} Mi App Musical. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};


export default Footer;
