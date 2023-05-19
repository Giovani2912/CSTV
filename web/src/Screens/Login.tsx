import React, { FormEvent, useContext , useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "../components/Form/Input";
import Header from '../components/Header';
import axios from 'axios';
import AuthContext from '../context/AuthProvider';

export const Login = () => {
  const { setAuth } : any = useContext(AuthContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  async function handleLogin(event: FormEvent) {
    event.preventDefault()
    try {
      const response = await axios.post(`http://localhost:3030/login`,{ email, password });
      const accessToken = response.data.token;
      setAuth({email, password, accessToken});
      alert(accessToken)
      navigate('/games')
    } catch (err) {
      alert('Falha no login, tente novamente')
      console.log(err)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 mt-20">
      <Header />
      <h1 className="text-6xl text-white font-black mt-2">Login Page</h1>
      <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-4">
        <Input name="email" id="email" type="email" placeholder='Seu melhor Email' onChange={(e) => setEmail(e.target.value)} />
        <Input name="password" id="password" type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}  />
        <button type='submit' className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded mt-8" >
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