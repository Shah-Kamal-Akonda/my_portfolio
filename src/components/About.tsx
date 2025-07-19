import React from 'react'
import pc from "../assets/pc.png"
import card from "../assets/card.png"
import finance from "../assets/finance.png"
import book from "../assets/book.png"
import Image from 'next/image'



const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id="about">
        <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>
            About <span className='text-orange-400'>Me</span></h1>
        <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>


            <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl      overflow-hidden'>

            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>

               <div className='flex flex-row  p-6'>
                <Image src={book}alt='book' className='w-auto h-[130px]'/>
               <div className='flex flex-col mt-4'>
                 <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                  <p className='text-lg text-white/70 mt-2'> Completed my Graduation from American International University of Banglades-AIUB <br />
                  Department of Computer Science and Engineering <br />
                  Major : Software Engineering </p>
             </div>
            </div>
           </div>



             <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl      overflow-hidden'>

              <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>

               <div className=' flex flex-row p-6'>
                <Image src={pc}alt='pc' className='w-auto h-[130px]'/>
               <div className='flex flex-col mt-4'>
                 <h2 className='text-2xl font-bold text-white/80'>Problem solving</h2>
                  <p className='text-lg text-white/70 mt-2'>Achieving efficient solutions through critical thinking and adaptability.Work	collaboratively	with	team	member	and communication each other.</p>
             </div>
            </div>
           </div>




             <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl      overflow-hidden'>

              <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>

               <div className='flex flex-row p-6'>
                <Image src={card}alt='card' className='w-auto h-[130px]'/>
               <div className='flex flex-col mt-4'>
                 <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
                  <p className='text-lg text-white/70 mt-2'> MERN Stack Developer <br /> 
                  Intern at  Clooud Gen – february 2025 – may 2025

           Collaborate on full-stack development projects utilizing MongoDB, Express.js, React, and Node.js to build and enhance web applications.
          Contribute to creating seamless user experiences by developing dynamic frontend interfaces and scalable backend solutions.
       
             </p>
             </div>
            </div>
           </div>




           
             <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl      overflow-hidden'>

              <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>

               <div className='flex flex-row p-6'>
                <Image src={finance}alt='finance' className='w-auto h-[130px]'/>
               <div className='flex flex-col mt-4'>
                 <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
                  <p className='text-lg text-white/70 mt-2'>As  a MERN stack developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in creating responsive user interfaces, developing RESTful APIs, managing databases, and ensuring seamless frontend-backend integration.</p>
             </div>
            </div>
           </div>



         </div>
      </div>
  )
}

export default About
