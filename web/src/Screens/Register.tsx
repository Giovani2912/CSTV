import React from 'react'
import { Link } from 'react-router-dom';
import { Input } from "../components/Form/Input";
import Header from '../components/Header';

export const Register = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-16">
      <Header />
      <h1 className="text-6xl text-white font-black mt-2">Register Page</h1>

      <Input type="text" placeholder='Nome de usuário'/>
      <Input type="text" placeholder='Seu melhor Email'/>
      <Input type="text" placeholder='Senha'/>
      <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded mt-8">Registrar</button>
      <Link to="/login"  className="hover:text-violet-600 text-white font-bold py-2 px-4 rounded text-center">Já tenho uma conta!</Link>

    </div>
    )
}

export default Register