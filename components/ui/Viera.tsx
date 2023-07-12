import React from 'react';

const Viera: React.FC = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-48 mx-auto">
            <img className="w-full h-96" src="https://www.abc.com.py/resizer/ZIjQR5HsHaPAl56-QIIMWYSzDl8=/fit-in/770x495/filters:format(webp):focal(679x420:1018x630)/cloudfront-us-east-1.images.arcpublishing.com/abccolor/SANZ7CRU3FC6HGTB67LZ3W3PIE.jpg" alt=""/>
            <div className="px-6 py-4 flex justify-between">
                <div className="font-bold text-3xl">Wilder Viera</div>
                <img className='w-12 h-9' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/200px-Flag_of_Paraguay.svg.png" alt="" />
            </div>
            <div className="px-6 py-4">
                <div className="">4 de marzo de 2002</div>
            </div>
        </div>
    );
};

export default Viera;
