import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MatchBanner } from "../components/MatchBanner";
import Navbar from "../components/Navbar";

interface PlayerProps {
  id?: string;
  username?: string;
  team?: string;
  imgTeam?: string;
  kills?: number;
  country?: string;
  imgCountry?: string;
  age?: number;
  imgPlayer?: string;
}

export const Players = () => {
  const [players, setPlayers] = useState<PlayerProps[]>([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    axios("http://localhost:3030/players").then((response) => {
      setPlayers(response.data);
    });
  }, []);

  return (
    <>
      {isLogged ? (
        <h1 className="text-6xl text-white font-black mt-2 py-16">
          Você não tem acesso
        </h1>
      ) : (
        <>
          <Navbar isLogged={true} />
          <h1 className="text-6xl text-white font-black mt-2 py-16">
            Os{" "}
            <span className="text-transparent bg-nlw-gradient bg-clip-text">
              Jogadores em destaque
            </span>{" "}
            estão aqui.
          </h1>
          <div className="grid grid-cols-2 gap-6 mt-16">
            {players.map((player) => {
              return (
                <figure className="bg-zinc-600 rounded-xl p-8 dark:bg-slate-800">
                  <img
                    className="w-48 h-24 rounded-md mx-auto"
                    src={player.imgPlayer}
                    alt=""
                    width="384"
                    height="512"
                  />
                  <div className=" flex items-center flex-col p-8 space-y-5">
                    <strong className="font-bold text-white block">
                      Nome do jogador: {player.username}
                    </strong>
                    <strong className="font-bold text-white block">
                      Idade do jogador: {player.age} anos
                    </strong>
                    <div className="flex items-center">
                      <strong className="font-bold text-white block">
                        Time: {player.team}
                      </strong>
                      <img
                        src={player.imgTeam}
                        alt=""
                        className="w-10 h-10 rounded-full ml-3"
                      />
                    </div>
                    <div className="flex items-center">
                      <strong className="font-bold text-white block">
                        Nacionalidade: {player.country}
                      </strong>
                      <img
                        src={player.imgCountry}
                        alt=""
                        className="w-10 h-10 rounded-full ml-3"
                      />
                    </div>
                    <strong className="font-bold text-white block mb-8">
                      Média de kills por partida: {player.kills}
                    </strong>
                  </div>
                </figure>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Players;
