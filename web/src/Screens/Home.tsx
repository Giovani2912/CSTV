import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar isLogged={false} />
      <div className="grid grid-cols-1 gap-6 mt-16 px-64	">
        {/* <Carousel /> */}
        <div className="grid grid-cols-2 gap-12 mt-16 w-100">
          <img
            className="w-100 h-80"
            src="https://portaldogamer.com.br/wp-content/uploads/2023/02/IEM-Brazil-2023.jpg"
            alt=""
          />
          <p className="mb-2 text-2xl font-bold tracking-tight text-white">
            Os campeonatos de eSports são eventos competitivos em que jogadores
            profissionais de videogame se enfrentam em diferentes jogos
            eletrônicos. Essas competições são organizadas em níveis local,
            regional e internacional, abrangendo uma ampla variedade de jogos
            populares, como League of Legends (LoL), Dota 2, Counter-Strike:
            Global Offensive (CS:GO), Overwatch e muitos outros.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 mt-16">
          <p className="mb-2 text-2xl font-bold tracking-tight text-white">
            Existem diferentes formatos de competição utilizados nos campeonatos
            de eSports, como torneios de eliminação simples, eliminação dupla,
            grupos de round-robin e ligas, cada um com suas próprias regras e
            estruturas. A maioria dos campeonatos culmina em fases
            eliminatórias, com quartas de final, semifinais e a grande final,
            onde as melhores equipes competem para determinar o campeão.
          </p>
          <img
            className="w-100 h-80"
            src="https://portaldogamer.com.br/wp-content/uploads/2023/02/IEM-Brazil-2023.jpg"
            alt=""
          />
        </div>

        <div className="grid grid-cols-2 gap-12 mt-16 w-100">
          <img
            className="w-100 h-80"
            src="https://portaldogamer.com.br/wp-content/uploads/2023/02/IEM-Brazil-2023.jpg"
            alt=""
          />
          <p className="mb-2 text-2xl font-bold tracking-tight text-white">
              Os campeonatos de eSports são
            eventos competitivos em que jogadores profissionais de videogame se
            enfrentam em diferentes jogos eletrônicos. Essas competições são
            organizadas em níveis local, regional e internacional, abrangendo
            uma ampla variedade de jogos populares, como League of Legends
            (LoL), Dota 2, Counter-Strike: Global Offensive (CS:GO), Overwatch e
            muitos outros. Os campeonatos de eSports são caracterizados por
            reunir as melhores equipes e jogadores do mundo, que competem por
            prêmios em dinheiro, reconhecimento e prestígio. 
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
