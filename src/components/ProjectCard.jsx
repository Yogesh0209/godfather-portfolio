const ProjectCard = (props) => {
  return (
    <div className="border border-yellow-500 rounded-lg overflow-hidden hover:scale-105 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] transition duration-300 bg-[#111]">

      <img
        src={props.image}
        alt="project"
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl text-yellow-500 font-bold mb-4">
          {props.title}
        </h3>

        <p className="text-gray-400">
          {props.desc}
        </p>

      </div>

    </div>

    
  )
}

export default ProjectCard