import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-8 border-b border-yellow-500 bg-black sticky top-0 z-50">

      {/* LOGO */}

      <div>

        <h1 className="text-4xl font-bold text-yellow-500 tracking-wide">
          DON YOGESH
        </h1>

        <p className="text-gray-500 text-sm tracking-[6px] mt-1">
          PORTFOLIO
        </p>

      </div>


      {/* NAV LINKS */}

      <ul className="flex gap-12 text-yellow-500 text-lg tracking-[3px]">

        <li>
          <Link
            to="/"
            className="hover:text-yellow-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)] transition duration-300"
          >
            HOME
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="hover:text-yellow-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)] transition duration-300"
          >
            ABOUT
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            className="hover:text-yellow-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)] transition duration-300"
          >
            PROJECTS
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-yellow-300 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)] transition duration-300"
          >
            CONTACT
          </Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar