import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen px-20 py-32 flex items-center justify-between gap-20">

      {/* LEFT SIDE */}

      <div className="w-1/2">

        <p className="text-yellow-500 tracking-[6px] mb-4">
          CONTACT
        </p>

        <h2 className="text-6xl text-yellow-500 font-bold mb-10 leading-tight">
          LET'S WORK <br />
          TOGETHER
        </h2>

        <p className="text-gray-400 text-xl leading-10">
          Whether it's frontend development,
          backend systems, or cinematic UI experiences,
          I'm always open to discussing creative projects
          and new opportunities.
        </p>

      </div>


      {/* RIGHT SIDE */}

      <div className="w-1/2 border border-yellow-500 p-10 rounded-lg bg-[#111]">

        <form className="flex flex-col gap-8">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-black border border-yellow-500 p-4 text-white outline-none rounded-md"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-black border border-yellow-500 p-4 text-white outline-none rounded-md"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            className="bg-black border border-yellow-500 p-4 text-white outline-none rounded-md resize-none"
          ></textarea>

          <button
            className="border border-yellow-500 text-yellow-500 py-4 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.7)] transition duration-300"
          >
            SEND MESSAGE
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact