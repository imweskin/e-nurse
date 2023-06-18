import React from 'react';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {BsArrowUp, BsBuildingAdd} from 'react-icons/bs';

function Stats() {
  return (
    <div className='max-w-[1240px] mx-auto my-12'>
        <div className='text-center'>
            <h3 className='text-4xl md:text-5xl text-[#0079FF] font-bold'>Statistiques</h3>
            <h4 className='textl-lg md:text-xl text-gray-600 mt-2 font-light'>Ayez un coup d'oeil sur les dernières statistiques concernant nos services</h4>
        </div>
        <div className='flex flex-col md:flex-row mx-auto w-fit items-center gap-12 mt-20'>
            <div className='bg-white border border-[#f4f4f4] shadow-lg rounded-md py-8 px-10 w-full md:w-fit'>
                <div className="flex items-center gap-2">
                    <i className='bg-[#0079FF] p-2 rounded-full'><AiOutlineUserAdd color='white' size={20} /></i>
                    <h4 className='text-2xl'>Infirmiers</h4>
                </div>
                <p className='text-2xl font-bold tracking-wider my-3'>557</p>
                <p className='text-lg'><span className='text-[#0079FF] mr-1'> <BsArrowUp className='inline'/> + 20 </span> dans les 7 derniers jours</p>
            </div>

            <div className='bg-white border border-[#f4f4f4] shadow-lg rounded-md py-8 px-10 w-full md:w-fit'>
                <div className="flex items-center gap-2">
                    <i className='bg-[#0079FF] p-2 rounded-full'><AiOutlineUserAdd color='white' size={20} /></i>
                    <h4 className='text-2xl'>Clients</h4>
                </div>
                <p className='text-2xl font-bold tracking-wider my-3'>1,252</p>
                <p className='text-lg'><span className='text-[#0079FF] mr-1'> <BsArrowUp className='inline'/> + 54 </span> dans les 7 derniers jours</p>
            </div>

            <div className='bg-white border border-[#f4f4f4] shadow-lg rounded-md py-8 px-10 w-full md:w-fit'>
                <div className="flex items-center gap-2">
                    <i className='bg-[#0079FF] p-2 rounded-full'><BsBuildingAdd color='white' size={20} /></i>
                    <h4 className='text-2xl'>Wilayas</h4>
                </div>
                <p className='text-2xl font-bold tracking-wider my-3'>31</p>
                <p className='text-lg'><span className='text-[#0079FF] mr-1'> <BsArrowUp className='inline'/> + 3 </span> dans le dernier mois</p>
            </div>
        </div>
    </div>
  );
}

export default Stats;