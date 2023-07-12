import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className='w-full fixed top-0 left-0'>
            <div className='md:flex h-28 justify-between bg-red-800 py-4 md:px-10 px-7'>
                <div className='text-2xl cursor-pointer flex items-center text-white font-[Arial]'>
                    <Link href={"/"}>
                        <Image src='https://cdn.worldvectorlogo.com/logos/cerro-porteno.svg' alt='logo' width={90} height={90} className="h-full relative" />
                    </Link>
                </div>
                <div className='text-2xl cursor-pointer flex items-center text-white font-[Arial] hover:text-blue-500'>
                    <Link href={"Arqueros"}>Arqueros</Link>
                </div>
                <div className='text-2xl cursor-pointer flex items-center text-white font-[Arial] hover:text-blue-500'>
                    <Link href={"Defensores"}>Defensores</Link>
                </div>
                <div className='text-2xl cursor-pointer flex items-center text-white font-[Arial] hover:text-blue-500'>
                    <Link href={"Mediocampistas"}>Mediocampistas</Link>
                </div>
                <div className='text-2xl cursor-pointer flex items-center text-white font-[Arial] hover:text-blue-500'>
                    <Link href={"Delanteros"}>Delanteros</Link>
                </div>
            </div>
        </header>
    )
}
