"use client"

import { DarkModeRounded } from "@mui/icons-material";
import { LightModeRounded } from "@mui/icons-material";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function Navbar(){
    const [open, setOpen] = useState(false);
    const [isDark, setIsDark] = useState(false)

    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    };


    return(
        <>
        <nav className="flex justify-around dark:bg-gray-900 bg-white  max-md:justify-between items-center p-5 border-b border-gray-200 dark:border-gray-900 sticky top-0">
            <div>
                <h1 className="text-red-500 text-2xl font-bold">Ngoding.id</h1>
            </div>
            <div className="text-lg flex gap-4 max-md:hidden items-center">
                <Link href={'/'} className="hover:underline hover:text-red-500 transition-all font-semibold text-red-400">Home</Link>
                <Link href={'/'} className="hover:underline hover:text-red-500 transition-all font-semibold text-red-400">About</Link>
                <Link href={'/'} className="hover:underline hover:text-red-500 transition-all font-semibold text-red-400">Projects</Link>
                <Link href={'/'} className="hover:underline hover:text-red-500 transition-all font-semibold text-red-400">Github</Link>
                <IconButton className="flex" onClick={toggleDarkMode}>
                    {isDark ? <LightModeRounded className="text-yellow-200"/> : <DarkModeRounded className="text-gray-600"/>}
                </IconButton>
            </div>
            <div className="hidden max-md:flex">
                 <IconButton className="flex" onClick={toggleDarkMode}>
                    {isDark ? <LightModeRounded className="text-yellow-200"/> : <DarkModeRounded className="text-gray-600"/>}
                </IconButton>
                <IconButton onClick={() => setOpen(!open)}>
                    {open ? <CloseIcon className="text-gray-200"/> : <MenuIcon className="text-gray-200"/>}
                </IconButton>
            </div>
        </nav>
        <div className={`${open ? "flex-col" : "hidden"} flex p-5 border-b bg-white dark:bg-gray-900 w-full h-full border-gray-100 text-2xl fixed z-50 md:hidden`}>
                <Link href={'/'} className="hover:underline hover:text-red-500 text-red-600 transition-all">Home</Link>
                <Link href={'/'} className="hover:underline hover:text-red-500 text-red-600 transition-all">About</Link>
                <Link href={'/'} className="hover:underline hover:text-red-500 text-red-600 transition-all">Projects</Link>
                <Link href={'/'} className="hover:underline hover:text-red-500 text-red-600 transition-all">Github</Link>
            </div>
        </>
    )
}