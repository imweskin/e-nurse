import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import ContactImg from '../assets/contact.svg';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_szvvq35', 'template_8exc018', form.current, 'bLcNCiO5TNLODo2XQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
  };

  return (
    <div id="contact" className='max-w-[1200px] mx-auto my-40'>
        <div className='text-center'>
            <h3 className='text-4xl md:text-5xl text-[#0079FF] font-bold'>Contact</h3>
            <h4 className='text-lg md:text-xl text-gray-600 mt-2 font-light'>Contactez-nous en utilisant le formulaire ci-dessous en cas de questions</h4>
        </div>
        <div className='grid md:grid-cols-2 items-center mt-16 md:mt-28'>
          {/* image */}
          <img  className='w-3/4 md:w-full mx-auto md:mr-auto' src={ContactImg} alt="contact" />
          {/* grid */}
          <div className="mt-10 md:mt-0 md:ml-10 text-center">
            <h3 className='text-xl font-bold'>Informations de Contact</h3>
            <h4 className='text-gray-500 '>Entrez vos informations afin de nous contacter</h4>
            <form className='mt-8 flex flex-col px-16 gap-4' ref={form} onSubmit={sendEmail}>
                <input className='border border-gray-300 rounded-sm pl-4 py-2 placeholder:text-gray-500 outline-none text-sm' type="text" name="user_name" placeholder='Nom' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='border border-gray-300 rounded-sm pl-4 py-2 placeholder:text-gray-500 outline-none text-sm' type="email" name="user_email" placeholder='Adresse Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='border border-gray-300 rounded-sm pl-4 py-2 placeholder:text-gray-500 outline-none text-sm' type="text" name="subject" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                <textarea className='border border-gray-300 rounded-sm pl-4 py-2 placeholder:text-gray-500 outline-none text-sm resize-none h-32' name="message" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className='bg-[#0079FF] w-full rounded text-lg text-white font-bold text-center py-2 cursor-pointer'>Envoyer un message</button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Contact;