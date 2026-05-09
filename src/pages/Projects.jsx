import ProjectCard from "../components/ProjectCard"

import img1 from "../assets/cine1.png"
import img2 from "../assets/quiz.jpg"
import img3 from "../assets/port.jpg"

const Projects = () => {
  return (
    <section className="px-20 py-32 min-h-screen">

      <p className="text-yellow-500 tracking-[6px] mb-4">
        MY WORK
      </p>

      <h2 className="text-5xl text-yellow-500 font-bold mb-16">
        FEATURED PROJECTS
      </h2>

      <div className="grid grid-cols-3 gap-10">

        <ProjectCard
          image={img1}
          title="Cineflix"
          desc="Movie browsing UI built using React and Tailwind CSS."
        />

        <ProjectCard
          image={img2}
          title="AI Quiz App"
          desc="Quiz platform with multiple categories and score tracking."
        />

        <ProjectCard
          image={img3}
          title="Portfolio Website"
          desc="Cinematic portfolio UI inspired by The Godfather theme."
        />

      </div>

    </section>
  )
}

export default Projects