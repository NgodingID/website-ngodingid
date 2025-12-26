"use client"

type HeroProps = {
  member: number
  projects: number
}

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export default function Hero({member, projects}:HeroProps){
    return(
            <section className="flex justify-around items-center max-md:flex-col-reverse h-screen">
                <motion.div
             initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
            >
                 <div className="flex flex-col max-md:items-center">
                      <h1 className="bg-gradient-to-r max-md:text-center font-extrabold from-red-400 to-red-600 text-7xl max-md:max-w-8xl max-w-xl max-md:text-3xl bg-clip-text text-transparent">Best Community For Programmer!</h1>
                  <p className='text-xl max-md:text-sm text-gray-500 max-md:text-center max-md:text-sm mt-2 text-wrap text-shadow-2xl text-shadow-black max-w-xl'>Komunitas programmer tempat belajar, sharing ilmu, ngobrol, dan berkembang bersama!</p>
                  <div className="flex mt-5 gap-4">
                   <Link href={'#sosial'} className="bg-red-500 px-3 rounded-lg inset-shadow-sm inset-shadow-red-400 hover:scale-110 outline-0 cursor-pointer transition-all py-2 text-white font-semibold">Join Now!</Link>
                   <Link href={'https://github.com/NgodingID'} target="_blank" className="bg-red-500 px-3 rounded-lg inset-shadow-sm inset-shadow-red-400 hover:scale-110 outline-0 cursor-pointer transition-all py-2 text-white font-semibold">Our Github</Link>
                  </div>
                  <div className="mt-7 flex gap-8">
                    <div className="flex flex-col items-center">
                      <p className="text-md font-bold text-red-500">{member}</p>
                      <p className="text-gray-500 text-sm">Member</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-md font-bold text-red-500">{projects}</p>
                      <p className="text-gray-500 text-sm">Projects</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-md font-bold text-red-500">tiap hari</p>
                      <p className="text-gray-500 text-sm">scroll reels</p>
                    </div>
                   </div>
                    </div>
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="max-md:h-0 w-100 max-md:w-70">
                              <Image src={'/logo.webp'} height={550} width={550} alt="logo"/>
                            </div>
                </motion.div>   
      </section>
    )
}