interface MatchBannerProps {
  id: string;
  timeA?: string;
  timeB?: string;
  placarTimeA?: string;
  placarTimeB?: string;
  imgTimeA?: string;
  imgTimeB?: string;
  data?: string;
  newsCount?: number;
}

export function MatchBanner(props: MatchBannerProps) {
  return (
    <div className="relative rounded-lg overflow-hidden ">
      <div className="w-480 h-60 bg-zinc-400 rounded-xl  dark:bg-slate-800 flex items-center  hover:bg-violet-600  ">
        <div className=" flex items-center flex-col p-8">
          <strong className="font-bold text-white block">{props.timeA}</strong>
          <img
            src={props.imgTimeA}
            alt=""
            className="w-24 h-24 rounded-full mx-auto"
          />
          <strong className="font-bold text-white block mb-8">
            {props.placarTimeA}
          </strong>
        </div>
          <strong>X</strong>
        <div className=" flex items-center flex-col p-8">
          <strong className="font-bold text-white block">{props.timeB}</strong>
          <img
            src={props.imgTimeB}
            alt=""
            className="w-24 h-24 rounded-full mx-auto"
          />
          <strong className="font-bold text-white block mb-8">
            {props.placarTimeB}
          </strong>
        </div>
      </div>

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute mt-8 bottom-0 left-0 right-0">
        <span className="text-zinc-300 text-sm block">
          {props.newsCount} notícia(s)
        </span>
        <span className="text-zinc-300 text-sm block">{props.data}</span>
      </div>
    </div>
  );
}
