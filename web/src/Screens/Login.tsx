import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Input } from "../components/Form/Input";
import Header from '../components/Header';

export const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="grid grid-cols-1 gap-6 mt-20">
      <Header />
      <h1 className="text-6xl text-white font-black mt-2">Login Page</h1>

      <Input type="text" placeholder="Email" />
      <Input type="text" placeholder="Senha"/>
      <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded mt-8">Entrar</button>
      <Link to="/register"  className="hover:text-violet-600 text-white font-bold py-2 px-4 rounded text-center">Não tenho conta!</Link>
    </div>
    )
}

export default Login