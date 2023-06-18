import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
  } from 'react-icons/fa';
  
  function Footer() {
    return (
      <div className='w-full bg-[#212529] text-center'>
        <div className="py-16 max-w-[1240px] mx-auto px-4 pb-16 grid lg:grid-cols-3 gap-20 text-white">
          <div>
            <h1 className='w-full text-3xl font-bold text-[#0079FF]'>E-Nurse</h1>
            <p className='pt-4 pb-2'>Le premier service de soins a domicile en Algerie</p>
            <p className='pb-4'>Faites appel aux services de nos meilleurs infirmiers pour des soins à domicile</p>
            <div className='mx-auto flex justify-center md:justify-between gap-10 md:gap-0 md:w-[33%] my-4 '>
              <FaFacebookSquare size={30} className='cursor-pointer'/>
              <FaInstagram size={30} className='cursor-pointer'/>
              <FaTwitterSquare size={30} className='cursor-pointer'/>
            </div>
          </div>
          <div>
              <h6 className='text-xl mb-4 text-[#0079FF] font-bold'>Liens Utiles</h6>
              <ul>
                <a href="/"><li className='py-2'>Accueil</li></a>
                <a href="#services"><li className='py-2'>Services</li></a>
                <a href="#about"><li className='py-2'>A propos</li></a>
                <a href="#contact"><li className='py-2'>Contact</li></a>
              </ul>
          </div>
          <div>
          <h6 className='text-xl mb-4 text-[#0079FF] font-bold'>Comment nous contacter</h6>
              <ul>
                <li className='py-2'>+213558823669</li>
                <li className='py-2'>e.nurse.dz@gmail.com</li>
                <li className='py-2'>Heures de travaille: 08:00 - 23:00</li>
              </ul>
          </div>
        </div>
        <div className="border-t border-t-[#777] py-8 text-center text-lg text-white">
          <p>&copy; 2023 - Tous les droits sont réservés</p>
        </div>
      </div>
    );
  }
  
  export default Footer;