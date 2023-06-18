import React from 'react';

function About() {
  return (
    <div id="about" className='w-full my-40 bg-[#212529] py-20 px-5 md:p-20'>
        <div className='text-center'>
            <h3 className='text-3xl md:text-5xl text-[#0079FF] font-bold'>A propos de nous</h3>
            <h4 className='tex-lg md:text-xl text-white mt-2 font-light'>Apprenez-en plus a propos d'E-Nurse, notre passé, notre présent et notre futur</h4>
        </div>
        <div className='max-w-[1200px] mx-auto text-center mt-20'>
            <h3 className='text-white text-xl md:text-2xl'>E-Nurse est le premier service de soins a domicile en Algerie</h3>
            <h4 className='text-gray-500 my-4 text-lg'>Notre but est de délivrer les meilleurs services de soins a nos citoyens sans qu'ils n'aient a se deplacer</h4>
            <p className='text-white text-lg md:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur unde ullam doloribus beatae, magni voluptatibus iure at nemo numquam possimus natus in fugiat corporis facere atque assumenda recusandae. Odit, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptates odio eveniet exercitationem vel aliquam sapiente veniam nisi, ratione sunt minus tempora nam omnis provident libero! Tenetur quas dolorem porro!</p>
            <button className='mt-8 bg-[#0079FF] w-[200px] rounded-md text-white text-lg font-bold text-center py-2 cursor-pointer'>En savoir plus</button>
        </div>
        
    </div>
  );
}

export default About;