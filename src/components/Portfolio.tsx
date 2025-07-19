'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

import project1 from '../assets/proj5.png'
import project2 from '../assets/proj6.png'
import project3 from '../assets/proj7.jpg'



const Projects = [
    {
        title:"T-Shirt Ecommerce Products",
        desc: "fully ecommerce ",
        devstack:"postgrace Sql, Express , React , Node js",
        link:"#",
        git: "https://github.com/Shah-Kamal-Akonda/T-Shirt-Ecommerce",
        src: project1

    },

    {
        title:"Kick root  Ecommerce",
        desc: "fully ecommerce ",
        devstack:"postgrace Sql, Express , React , Node js",
        link:"#",
        git: "https://github.com/Shah-Kamal-Akonda/KickRoot",
        src: project2

    },


    {
        title:"Digital Watches",
        desc: "fully ecommerce ",
        devstack:"postgrace Sql, Express , React , Node js",
        link:"#",
        git: "https://github.com/Shah-Kamal-Akonda",
        src: project3

    },
]

const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52' id='portfolio'>
       
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>
            Selected <span className='text-orange-400'>Projects</span></h1>

       <div className='px-6 md:px-0 max-w-[1000px] mt-40  mx-auto space-y-24'>
        {Projects.map((project,index) =>(
            <motion.div 
            key={index}
            initial={{opacity: 0, y: 75}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.25}}
            className={`mt-12 flex flex-col ${index % 2===1 ? '  md:flex-row-reverse gap-12' :' md:flex-row gap-12 '}`}
            > 

            <div className='space-y-2 max-w-[550px]'>
                      
                     <h2 className='text-7xl my-4 text-white/70'> {`0${index+1}`} </h2>
                     <h2>{project.title}</h2>
                     <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                     <p className='text-xl text-orange-400 font-semibold'>{project.devstack}</p>
                     <div className='w-64 h-[1px] bg-gray-400 my-4'>
                       
                        <a href={project.git}>Git</a>

                     </div>
            </div>

            <div className='flex  justify-center items-center'>
                <Image src={project.src} alt={project.title}  className='h-[350px] w-[500px] object-cover border
                      rounded border-gray-700'/>
            </div>
            
            </motion.div>
        ) )}

       </div>
    </div>
  )
}

export default Portfolio
