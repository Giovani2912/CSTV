import React from "react";
import axios from "axios";
import { GameBanner } from "../components/GameBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdBanner } from "../components/CreateAdBanner";
import { CreateAdModal } from "../components/CreateAdModal";
import { Link } from "react-router-dom";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export const Games = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3030/games").then((response) => {
      setGames(response.data);
    });
  }, []);
  return (
    <>
      <h1 className="text-6xl text-white font-black mt-20">Jogos disponíveis na plataforma</h1>
      <Link to="/preview">
        <div className="grid grid-cols-1 gap-6 mt-16">
          <GameBanner
            key="id"
            title="Counter Strike CS:GO"
            bannerUrl="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg"
          />
        </div>
      </Link>
    </>
  );
};

export default Games;
