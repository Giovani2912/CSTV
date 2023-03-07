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
    <a href="" className="relative rounded-lg overflow-hidden">
      <div className="w-480 h-60 md:flex bg-zinc-400 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <strong className="font-bold text-white block">{props.timeA}</strong>
        <img
          src={props.imgTimeA}
          alt=""
          className="w-24 h-24 rounded-full mx-auto"
        />
        <strong className="font-bold text-white block">
          {props.placarTimeA}
        </strong>
        <strong>X</strong>
        <strong className="font-bold text-white block">{props.timeB}</strong>
        <img
          src={props.imgTimeB}
          alt=""
          className="w-24 h-24 rounded-full mx-auto"
        />
        <strong className="font-bold text-white block">
          {props.placarTimeB}
        </strong>
      </div>

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <span className="text-zinc-300 text-sm block">{props.newsCount} notícia(s)</span>
          <span className="text-zinc-300 text-sm block">{props.data}</span>
        </div>
    </a>
  );
}
