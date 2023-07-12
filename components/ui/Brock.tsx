import React from 'react';

const Brock: React.FC = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-48 mx-auto">
            <img className="w-full h-96" src="https://esportenewsmundo.com.br/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-23-at-17.46.27.jpeg" alt=""/>
            <div className="px-6 py-4 flex justify-between">
                <div className="font-bold text-3xl">Eduardo Brock</div>
                <img className='w-12 h-9' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/200px-Flag_of_Brazil.svg.png" alt="" />
            </div>
            <div className="px-6 py-4">
                <div className="">26 de Octubre de 1995</div>
            </div>
        </div>
    );
};

export default Brock;
