import React from 'react';
import HeroImg from '../assets/hero.svg';
import {FiSearch} from 'react-icons/fi';

function Hero() {
  return (
    <div className='w-full py-10 md:py-20'>
      <div className='max-w-[1100px] mx-auto grid md:grid-cols-2 px-4 items-center text-center md:text-left'>
        {/* text */}
        <div className="flex flex-col gap-3 max-w-[450px] order-2 md:order-1 mt-10 md:mt-0">
          <p className='text-[#0079FF] font-bold text-2xl md:text-3xl uppercase'>Bievenue à E-Nurse !</p>
          <p className='text-2xl md:text-4xl font-bold'>Faites appel aux services de nos meilleurs infirmiers pour des soins à domicile</p>
          <p className='mt-6 text-gray-700 font-light'>Confiance, rapidité et sécurité</p>
          <button className="bg-[#0079FF] w-[200px] rounded-full text-xl text-white font-bold text-center py-2 cursor-pointer mx-auto md:mx-0">Commencer</button>
          <p className='text-sm text-gray-600 border-b w-fit cursor-pointer hover:text-[#0079FF] hover:border-[#0079FF] font-light mx-auto md:mx-0'>En savoir plus sur la procédure</p>
        </div>
        {/* image */}
          <img  className='w-full ml-auto order-1 md:order-2' src={HeroImg} alt="doctor" />
      </div>
      <div className='verify bg-white shadow-lg border rounded w-[800px] max-w-full mx-auto mt-20 text-center py-10'>
        <h3 className='text-2xl font-bold mb-4'>Verifiez si notre service est disponible en votre wilaya</h3>
        <form className='flex flex-col md:flex-row w-full md:w-fit px-10 md:px-0 mx-auto items-center gap-4'>
          <select className='py-2 px-4 text-xl capitalize bg-white border rounded w-full md:w-[200px]'>
            <option value="/">wilaya</option>
            <option value="setif">Setif</option>
            <option value="batna">Batna</option>
            <option value="constantine">Constantine</option>
          </select>
          <select className='py-2 px-4 text-xl capitalize bg-white border rounded w-full md:w-[200px]'>
            <option value="/">daira</option>
            <option value="setif">Setif</option>
            <option value="ain arnat">Ain arnat</option>
            <option value="bougaa">Bougaa</option>
          </select>
          <button className='bg-[#0079FF] py-3 px-4 rounded flex items-center justify-center w-full md:w-fit'><FiSearch size={20} color='white'/></button>
        </form>
      </div>
    </div>
  );
}

export default Hero;