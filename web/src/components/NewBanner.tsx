interface NewBannerProps {
  id?: string;
  titulo?: string;
  descricao?: string;
}

export function NewBanner(props: NewBannerProps) {
  return (
    <div className="h-30 bg-zinc-400 rounded-xl  dark:bg-slate-800 flex items-center hover:bg-violet-600 hover:scale-125 transition delay-150 duration-300 ease-in-out w-full ">
      <div className=" flex items-center flex-col p-8 w-full ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{props.titulo}</h5>

      <p className="font-normal text-gray-700 dark:text-gray-400">   
        {props.descricao}
      </p>
    </div>
    </div>

  );
}
