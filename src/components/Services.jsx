import React from 'react';
import { BsCheck } from "react-icons/bs"
import ServicesImg from '../assets/services.svg';

function Services() {
  return (
    <div id="services" className='max-w-[1200px] mx-auto my-40'>
        <div className='text-center'>
            <h3 className=' text-5xl text-[#0079FF] font-bold'>Services</h3>
            <h4 className='textl-lg md:text-xl text-gray-600 mt-2 font-light'>Découverez l'ensemble des services que nos infirmiers proposent</h4>
        </div>
        <div className='grid md:grid-cols-2 items-center gap-10 md:gap-10 mt-16 md:mt-28'>
          {/* image */}
          <img  className='w-3/4 mx-auto md:mr-auto' src={ServicesImg} alt="doctor" />
          {/* grid */}
          <div className="grid md:grid-cols-2 md:grid-rows-3 gap-4 md:h-60">
            <div className="benefit bg-white flex items-center px-6 gap-3 h-16">
              <div className="bg-[#0079FF] p-1">
                <BsCheck size={20} color='#FFF'/> 
              </div>
              <p className='text-lg font-semibold text-[#323232]'>Soins généraux</p>
            </div>
            <div className="benefit bg-white flex items-center px-6 gap-3 h-16">
              <div className="bg-[#0079FF] p-1">
                <BsCheck size={20} color='#FFF'/> 
              </div>
              <p className='text-lg font-semibold text-[#323232]'>Pansements Simples</p>
            </div>
            <div className="benefit bg-white flex items-center px-6 gap-3 h-16">
              <div className="bg-[#0079FF] p-1">
                <BsCheck size={20} color='#FFF'/> 
              </div>
              <p className='text-lg font-semibold text-[#323232]'>Injections</p>
            </div>
            <div className="benefit bg-white flex items-center px-6 gap-3 h-16">
              <div className="bg-[#0079FF] p-1">
                <BsCheck size={20} color='#FFF'/> 
              </div>
              <p className='text-lg font-semibold text-[#323232]'>Prélèvements Sanguins</p>
            </div>
            <div className="benefit bg-white flex items-center px-6 gap-3 h-16">
              <div className="bg-[#0079FF] p-1">
                <BsCheck size={20} color='#FFF'/> 
              </div>
              <p className='text-lg font-semibold text-[#323232]'>Médecine Alternative - Hijama </p>
            </div>
            <div className="benefit bg-white flex items-center px-6 gap-3 h-16">
              <div className="bg-[#0079FF] p-1">
                <BsCheck size={20} color='#FFF'/> 
              </div>
              <p className='text-lg font-semibold text-[#323232]'>Kinésithérapie</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Services;