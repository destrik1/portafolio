import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="bg-black border-gray-200  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="flex flex-col text-black-700 font-semibold">
              <span className="text-2xl whitespace-nowrap text-white">Paya web </span>
              <span className="text-white">Paya</span>
            </div>
          </a>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-black-700 rounded md:p-0 text-white "
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
              <Link
                to={"/Youtube"}
                className="block py-2 px-3 text-black-700 rounded md:p-0 text-white hover:text-red-500"
              >
                Youtube
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
