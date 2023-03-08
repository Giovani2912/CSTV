import React from "react";
import axios from "axios";
import { GameBanner } from "../components/GameBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdBanner } from "../components/CreateAdBanner";
import { CreateAdModal } from "../components/CreateAdModal";

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
      <h1 className="text-6xl text-white font-black mt-2">Jogos futuros</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </>
  );
};

export default Games;
