import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import logoImg from "../assets/image-9.svg";

export const About = () => {

  return (
    <>
    <Navbar />
    <div className="grid grid-cols-1 gap-6 mt-16 px-64">
      <div className="grid grid-cols-2 gap-12 mt-16 w-100">
      <div className="w-100 h-80 p-6 rounded-lg mt-40">
        <img src={logoImg} alt="" width={1500} />
      </div>
      <div>
        <h1 className="mb-8 text-5xl font-bold tracking-tight text-center text-white">Sobre nós</h1>
        <div className="w-100 h-100 bg-slate-500 p-6 rounded-lg">
            <p className="mb-2 text-xl font-bold tracking-tight text-white">Somos um grupo do 6* Semestre de ADS na Fatec Indaiatuba.
                Todos Apaixonados pelos E-Sports com focos nos jogos de FPS. Desde a criação desse grupo, 
                todos os Projetos Interdisciplinares foram realizados com focos em jogos FPS (no caso, o CSGO)
                Nosso grupo é composto por 5 integrantes com diversas frentes de trabalho, sendo eles:
                <br/>
                <br/>
                André: Analista de infraestrutura (CPFL)
                <br/>
                David: Operador Multifuncional III (Toyota)
                <br/>
                Giovani: Software Developer (CI&T)
                <br/>
                Ryago: Analista de Suporte (AT&M)
                <br/>
                Vitor J: Software Developer (Instituto de Pesquisas Eldorado)
            </p>
        </div>
        </div>
      </div>
    </div>

    <Footer />

    </>
    )
}

export default About;