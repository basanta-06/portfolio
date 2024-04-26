import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex h-20 w-full fixed rounded-sm px-4 justify-between items-center bg-black  text-white">
      <div>
        <h1
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className=" text-5xl ml-2  font-signature"
        >
          Basanta
        </h1>
      </div>

      {/* for display less than 750px */}
      <div
        onClick={() => setNav(!nav)}
        className="z-10  hover:cursor-pointer  md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex text-4xl capitalize flex-col absolute bg-gradient-to-b from-black to-gray-800 justify-center top-0 left-0 w-screen h-screen items-center bg-black text-gray-500 py-4">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-4 hover:cursor-pointer hover:scale-110 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* for display size greater than 750px */}

      <ul className="hidden md:flex text-gray-400 capitalize ">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 hover:cursor-pointer hover:scale-110 duration-200"
          >
            <Link to={link.link} smooth duration={500}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
