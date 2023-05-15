import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MatchBanner } from "../components/MatchBanner";

interface PlayerProps {
  id?: string;
  username?: string;
  team?: string;
  imgTeam?: string;
  kills?: number;
  country?: string;
  imgCountry?: string;
  age?: number
}

export const Players = () => {
  const [players, setPlayers] = useState<PlayerProps[]>([]);

  useEffect(() => {
    axios("http://localhost:3030/players").then((response) => {
      setPlayers(response.data);
    });
  }, []);

  return (
    <>
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
            <div className="relative rounded-lg overflow-hidden ">
              <div className="w-480 h-60 bg-zinc-400 rounded-xl  dark:bg-slate-800 flex items-center  hover:bg-violet-600  ">
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
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Players;
