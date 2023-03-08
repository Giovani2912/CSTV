interface NewBannerProps {
  id?: string;
  titulo?: string;
  descricao?: string;
}

export function NewBanner(props: NewBannerProps) {
  return (
    <div className="w-480 h-60 bg-zinc-400 rounded-xl  dark:bg-slate-800 flex items-center  hover:bg-violet-600  ">
      <div className=" flex items-center flex-col p-8">
        <strong className="font-bold text-white block">{props.titulo}</strong>

        <strong className="font-bold text-white block">
          {props.descricao}
        </strong>
      </div>
    </div>
  );
}
