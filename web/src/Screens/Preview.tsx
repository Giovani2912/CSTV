import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import logoImg from "../assets/image-9.svg";
import { Link } from "react-router-dom";

export const Preview = () => {

  return (
    <>
    <Navbar isLogged={true} />
    <div className="grid grid-cols-2 gap-6 mt-16 px-64	">
    <Link to="/players">
      <div className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity hover:">
        <div className="w-full h-72 bg-zinc-400 rounded-xl dark:bg-slate-800 flex items-center">
          <div className=" flex items-center flex-col">
            <img
              src="https://www.fdcomunicacao.com.br/wp-content/uploads/2020/06/coldzera-e1591027209932_Easy-Resize.com_.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute mt-8 bottom-0 left-0 right-0">
          <span className="text-zinc-300 text-2xl block text-center font-bold">
            Jogadores
          </span>
        </div>
      </div>
      </Link>

      <Link to="/matches">
      <div className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
        <div className="w-full h-72 bg-zinc-400 rounded-xl dark:bg-slate-800 flex items-center hover:bg-violet-600  ">
          <div className=" flex items-center flex-col">
            <img
              src="https://portaldogamer.com.br/wp-content/uploads/2022/12/csgo-pic.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute mt-8 bottom-0 left-0 right-0">
          <span className="text-zinc-300 text-2xl block text-center  font-bold">
            Partidas
          </span>
        </div>
      </div>
      </Link>
    </div>

    <Footer />

    </>
    )
}

export default Preview
