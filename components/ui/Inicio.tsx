import React from 'react';
import Link from 'next/link';

const Inicio: React.FC = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-48 mx-auto">
            <img className="w-full h-96" src="https://hoypyspace.sfo2.cdn.digitaloceanspaces.com/imagenes/2019/07/09003126/captura_de_pantalla_2019-07-18_a_las_22.13.53.jpg" alt=""/>
            <div className="px-6 py-4 flex justify-between">
                <div className="font-bold text-2xl">Plantel de Cerro Porteño</div>
            </div>
            <div className="px-6 py-4">
                <Link href={"Arqueros"}>
                    <button className='bg-red-800 text-white w-20 mb-2'>Arqueros</button><br />
                </Link>
                <Link href={"Defensores"}>
                    <button className='bg-red-800 text-white w-24 mb-2'>Defensores</button><br />
                </Link>
                <Link href={"Mediocampistas"}>
                    <button className='bg-red-800 text-white w-32 mb-2'>Mediocampistas</button><br />
                </Link>
                <Link href={"Delanteros"}>
                    <button className='bg-red-800 text-white w-24'>Delanteros</button>
                </Link>
            </div>
        </div>
    )
}

export default Inicio;
