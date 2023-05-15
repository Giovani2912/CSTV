interface GameBannerProps {
  bannerUrl?: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="/matches" className="w-64 h-96 relative rounded-lg overflow-hidden">
      <img src="https://wallpapers.com/images/featured/xb9ovth229qs5qud.jpg" alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">{props.adsCount} campeonato(s)</span>
      </div>
    </a>
  );
}
