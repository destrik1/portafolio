import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="flex flex-col text-black-700 font-semibold">
              <span className="text-2xl whitespace-nowrap text-white">Paya web</span>
              <span className="text-white">Paya</span>
            </div>
          </a>
          <div className="hidden w-full md:block md:w-auto p-5">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-black-700 rounded md:p-0 text-white"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to={"/Spotify"}
                  className="block py-2 px-3 text-black-700 rounded md:p-0 text-white hover:text-emerald-500"
                >
                  Spotify
                </Link>
              </li>
              <li>
                <Link
                  to={"/Youtube"}
                  className="block py-2 px-3 text-black-700 rounded md:p-0 text-white hover:text-red-500"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={toggleNavBar}
            className="flex xl:hidden text-white items-center ml-auto mr-10 font-bold text-3xl transition-all duration-6000 cursor-pointer"
          >
            {isOpen ? "X" : "="}
          </div>
        </div>

        {/* Menú lateral superpuesto */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-800 bg-opacity-95 text-white">
            <ul className="flex flex-col font-medium space-y-6 text-center text-xl">
              <li>
                <Link
                  to={"/"}
                  onClick={toggleNavBar}
                  className="block py-2 px-3 rounded"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to={"/Spotify"}
                  onClick={toggleNavBar}
                  className="block py-2 px-3 rounded"
                >
                  Spotify
                </Link>
              </li>
              <li>
                <Link
                  to={"/Youtube"}
                  onClick={toggleNavBar}
                  className="block py-2 px-3 rounded"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
