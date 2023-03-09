import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MatchBanner } from "../components/MatchBanner";

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
    News?: number;
  };
}

export const Matches = () => {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    axios("http://localhost:3030/matches").then((response) => {
      setMatches(response.data);
    });
  }, []);

  return (
    <>
    <h1 className="text-6xl text-white font-black mt-2 py-16">
        Suas{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          atualizações
        </span>{" "}
        estão aqui.
      </h1>
      <div className="grid grid-cols-3 gap-6 mt-16">
        {matches.map((match) => {
          return (
            <Link to={`/matches/${match.id}/news`} >
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
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Matches;
