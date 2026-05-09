import React from 'react'
import img from '../assets/don.png'

const Home = () => {
  return (
    
    <section id="home" className="h-screen flex items-center px-20">

          {/* left-side */}
          <div className="w-1/2">

            <p className="text-yellow-500 tracking-[8px] mb-4">
              FULL-STACK DEVELOPER
            </p>

            <h1 className="text-7xl font-bold text-yellow-500 leading-tight">
              I BUILD THINGS <br />
              YOU CAN'T REFUSE.
            </h1>

            <p className="text-gray-400 mt-6 text-xl">
              JAVA • REACT • SQL
            </p>

            <button className="mt-10 border border-yellow-500 text-yellow-500 px-8 py-4 w-fit hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.7)] transition duration-300">
              VIEW MY WORK
            </button>

          </div>

          {/* right-side */}
          <div className="w-1/2 flex justify-center">
            <img
              src={img}
              alt="profile"
              className="h-[450px] w-[550px] object-cover rounded-lg border border-yellow-500"
            />
          </div>

        </section>

  )
}

export default Home