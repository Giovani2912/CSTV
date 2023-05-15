import React, { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Input } from "../components/Form/Input";
import Header from '../components/Header';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const handleSubmit = () => {
  //   if(email === "gi@gmail.com" && password === "1234"){
  //     setIsLogged(true)
  //     alert("Tudo certo")
  //   } else {
  //     alert("Usuário não encontrado")
  //   }
  // }

  
  useEffect(() => {
    axios('http://localhost:3030/users').then(response => {
     
    });
  }, []);

  async function handleSignUser(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.get(`http://localhost:3030/users`, {
        params: {
          email: data.email,
          password: data.password
        }
      });
      alert(response)
    } catch (err) {
      console.log(err);
      alert('Erro ao logar usuário!');
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 mt-20">
      <Header />
      <h1 className="text-6xl text-white font-black mt-2">Login Page</h1>
      <form onSubmit={handleSignUser} className="mt-8 flex flex-col gap-4">
        <Input name="email" id="email" type="email" placeholder='Seu melhor Email' />
        <Input name="password" id="password" type="password" placeholder='Senha' />
        <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded mt-8" >
          {/* <Link to="/games" > */}
            Entrar
          {/* </Link>   */}
        </button>
       </form>

      <Link to="/register"  className="hover:text-violet-600 text-white font-bold py-2 px-4 rounded text-center">Não tenho conta!</Link>
    </div>
    )
}

export default Login