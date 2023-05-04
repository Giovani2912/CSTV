import React, { useEffect, useState, FormEvent } from 'react'
import { Link } from 'react-router-dom';
import { Input } from "../components/Form/Input";
import Header from '../components/Header';
import axios from 'axios';

export const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    axios('http://localhost:3030/users').then(response => {
      setUsername(response.data.username);
      setEmail(response.data.email);
      setPassword(response.data.password);
    });
  }, []);

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post(`http://localhost:3030/users`, {
        username: data.username,
        email: data.email,
        password: data.password,
      });

      alert('Usuário criado com sucesso!');
    } catch (err) {
      console.log(err);
      alert('Erro ao criar usuário!');
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 mt-16">
      <Header />
      <h1 className="text-6xl text-white font-black mt-2">Register Page</h1>
      <form onSubmit={handleCreateUser} className="mt-8 flex flex-col gap-4">
        <Input name="username" id="username" type="text" placeholder='Nome de usuário' />
        <Input name="email" id="email" type="email" placeholder='Seu melhor Email' />
        <Input name="password" id="password" type="password" placeholder='Senha' />
        <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded mt-8" type='submit'>Registrar</button>
      </form>
      <Link to="/login"  className="hover:text-violet-600 text-white font-bold py-2 px-4 rounded text-center">Já tenho uma conta!</Link>

    </div>
    )
}

export default Register