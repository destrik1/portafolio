import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  colorCard: String;
  texto1: String;
  texto2: String;
};

function Card({ icon,  colorCard, texto1, texto2 }: Props) {
  return (
    <>
      <div className={`hover:cursor-pointer hover:scale-[1.1]  transition-transform duration-300 mb-6 px-6  w-[400px] max-h-[360px] h-[360px] max-md:mx-2  shadow-lg rounded-xl border ${colorCard}`}>
        <div className="flex justify-center">
          <div className="w-36 border shadow-xl items-center mt-7 rounded-full bg-white p-8">
            {icon}
          </div>
        </div>
        <div className="text-center mt-12 font-medium text-white">
          <p>{texto1}</p>
          <div className="mt-5 flex  justify-center items-center gap-1 text-white">
            <p>{texto2}</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Card;
