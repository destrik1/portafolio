import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  colorCard: String;
  mt?: String;
  texto1?: String;
  texto2?: String;
};

function Card({ icon,  colorCard, texto1, texto2, mt }: Props) {
  return (
    <>
      <div className={`hover:cursor-pointer hover:scale-[1.1]  transition-transform duration-300  ${colorCard}`}>
        <div className={`${mt} flex justify-center`}>
        <div className="w-36 h-36 flex items-center justify-center border shadow-xl rounded-full bg-white">
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
