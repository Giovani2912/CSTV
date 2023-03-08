import React, { useEffect, useState } from 'react'
import axios from "axios";
import { NewBanner } from '../components/NewBanner';

interface New{
  id?: string;
  titulo?: string;
  descricao?: string
}

export const News = () => {

  const [news, setNews] = useState<New[]>([]);

  useEffect(()=> {
    axios("http://localhost:3030/matches/a5c0de90-34f4-45a9-9a36-15eef96b70e4/news").then((response) => {
      setNews(response.data);
    });
  }, [])

  return (
    <>
    <h1 className="text-6xl text-white font-black mt-20">Notícias</h1>
      <div className="grid grid-cols-1 gap-6 mt-16">
        {news.map((item) => {
          return (
            <NewBanner
              key={item.id}
              titulo={item.titulo}
              descricao={item.descricao}
              id={""}
            />
          );
        })}
      </div>
    </>
  )
}

export default News