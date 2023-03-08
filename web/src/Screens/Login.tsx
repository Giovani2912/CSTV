import React from 'react'
import { Input } from "../components/Form/Input";

export const Login = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-16">
      <h1 className="text-6xl text-white font-black mt-2">Login Page</h1>

      <Input type="text" />
      <Input type="text" />
      <button>Submit</button>
    </div>
    )
}

export default Login