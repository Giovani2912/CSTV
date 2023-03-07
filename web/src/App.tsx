import { useEffect, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBanner } from "./components/GameBanner";

import './styles/main.css';

import logoImg from './assets/image-9.svg';
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";
import { MatchBanner } from "./components/MatchBanner";


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

interface Match {
  id?: string;
  timeA?: string;
  timeB?: string;
  placarTimeA?: string;
  placarTimeB?: string;
  imgTimeA?: string;
  imgTimeB?: string;
  data?: string;
  _count?: {
    News?: number
  }

}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);


  useEffect(() => {
    axios('http://localhost:3030/games').then(response => {
      setGames(response.data);
    });
  }, []);

  useEffect(() => {
    axios('http://localhost:3030/matches').then(response => {
      setMatches(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" width={400}/>

      <h1 className="text-6xl text-white font-black mt-20">
        Suas <span className="text-transparent bg-nlw-gradient bg-clip-text">atualizações</span> estão aqui.
      </h1>
      {/* <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}
      </div> */}
      <div className="grid grid-cols-3 gap-6 mt-16">
        {matches.map(match => {
          return (
            <MatchBanner
              key={match.id}
              timeA={match.timeA}
              imgTimeA={match.imgTimeA}
              placarTimeA={match.placarTimeA}              
              timeB={match.timeB}
              imgTimeB={match.imgTimeB}
              placarTimeB={match.placarTimeB}
              newsCount={match._count?.News}
              data={match.data}
              id={""}
            />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
