'use client'
import { redirect } from "next/navigation";

export default function Admin() {

    const handleLogout = () => {
        redirect('/login')
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold text-zinc-500 dark:text-white">Admin</h1>
            <button className="border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm p-4 cursor-pointer dark:bg-blue-400 text-white transition-all hover:dark:bg-blue-500 hover:scale-105 active:scale-95 active:duration-150" onClick={handleLogout}>Logout</button>
        </div>
    )
}
