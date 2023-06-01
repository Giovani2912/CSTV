import React, { useEffect, useState } from 'react'
import axios from "axios";
import { NewBanner } from '../components/NewBanner';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface New{
  matchId?: string;
  id?: string;
  titulo?: string;
  descricao?: string
}

type NewsParams = {
  id: string;
}

export const News = (props: New) => {
  const params = useParams<NewsParams>();
  const [news, setNews] = useState<New[]>([]);
  const matchId = params.id;

  useEffect(()=> {
    axios(`http://localhost:3030/matches/${matchId}/news`).then((response) => {
      setNews(response.data);
    });
  }, [])

  return (
    <>
    <Navbar isLogged={true} />

    <h1 className="text-6xl text-white font-black mt-20">Notícias</h1>
      <div className="grid grid-cols-1 gap-6 mt-16">
        {news.map((item) => {
          return (
            <NewBanner
              key={item.id}
              titulo={item.titulo}
              descricao={item.descricao}
              id={item.id}
            />
          );
        })}
      </div>
    </>
  )
}

export default News