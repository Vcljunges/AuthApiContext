'use client'

import { redirect } from "next/navigation"
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (email === "admin@snapbite.com" && password === "admin123") {
        redirect('/admin')
    }
    else if (email === "vcljunges@gmail.com" && password === "123456") {
        redirect('/user')
    }
    else{
        alert("Email ou senha incorretos!");
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-white dark:bg-white border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm p-8 gap-6 max-w-md">
          <input onChange={(e) => setEmail(e.target.value)} className="border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm p-4 text-black" type="text" placeholder="Email" />
          <input onChange={(e) => setPassword(e.target.value)} className="border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm p-4 text-black" type="password" placeholder="Password" />
          <button onClick={handleLogin} className="border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm p-4 cursor-pointer dark:bg-blue-400 text-white transition-all hover:dark:bg-blue-500 hover:scale-105 active:scale-95 active:duration-150">Login</button>
        </div>
      </div>
    </div>
  );
}
