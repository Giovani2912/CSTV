import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export const Home = () => {

  return (
    <>
    <Navbar isLogged={false} />
    <div className="grid grid-cols-1 gap-6 mt-16 px-64	">
      {/* <Carousel /> */}
      <div className="grid grid-cols-2 gap-12 mt-16 w-100">
        <img className="w-100 h-80" src="https://portaldogamer.com.br/wp-content/uploads/2023/02/IEM-Brazil-2023.jpg" alt="" />
        <p className="mb-2 text-2xl font-bold tracking-tight text-white">A maior plataforma de CS:GO do Brasil, detalhes... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquam fuga voluptatum et id blanditiis, veritatis debitis fugiat dignissimos sunt non cum, neque dolores molestias animi quam fugit rerum nemo! </p>
      </div>
      <div className="grid grid-cols-2 gap-12 mt-16">
      <p className="mb-2 text-2xl font-bold tracking-tight text-white">A maior plataforma de CS:GO do Brasil, detalhes... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias est nostrum dolore maxime perspiciatis neque quos sit ipsa. Laboriosam architecto reiciendis accusantium perspiciatis a quibusdam, nesciunt amet illum veritatis autem? </p>
        <img className="w-100 h-80" src="https://portaldogamer.com.br/wp-content/uploads/2023/02/IEM-Brazil-2023.jpg" alt="" />
        </div>
    </div>

    <Footer />

    </>
    )
}

export default Home