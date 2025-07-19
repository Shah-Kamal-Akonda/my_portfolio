import React from 'react'
import { FaLinkedin,FaGit } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='mt-12 text-white/70 py-8 max-w-[1000px] mx-auto  border-t border-gray-700 pt-4 flex justify-between items-center'>

        <h1 className='text-2xl font-bold'>Md shah kamal</h1>
 
        <div className='flex space-x-6 mt-4'> 
            <a href="https://www.linkedin.com/in/md-shah-kamal-akonda-902352350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='hover:text-gray-300'>
                <FaLinkedin size={24}/>
            </a>
              <a href="https://github.com/Shah-Kamal-Akonda" className='hover:text-gray-300'>
                <FaGit size={24}/>
            </a>

            
        </div>
      
    </div>
  )
}

export default Footer
