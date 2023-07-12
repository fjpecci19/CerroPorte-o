import React from 'react';

const Churín: React.FC = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-48 mx-auto">
            <img className="w-full h-96" src="https://versuspy2.fra1.cdn.digitaloceanspaces.com/versus/wp-content/uploads/2023/02/12105134/0af21d97-2d7d-4e99-8dc9-92c02bb4a42d.jpeg" alt=""/>
            <div className="px-6 py-4 flex justify-between">
                <div className="font-bold text-3xl">Diego Churín</div>
                <img className='w-12 h-9' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png" alt="" />
            </div>
            <div className="px-6 py-4">
                <div className="">1 de diciembre de 1989</div>
            </div>
        </div>
    );
};

export default Churín;
