import Hero from "../assets/heroImage.jpeg";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-scroll";
import Portfolio from "./Portfolio";
export default function Home() {
  return (
    <div
      name="Home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg  mx-auto flex flex-col md:flex-row place-items-center h-full px-4">
        <div className="flex flex-col mt-8 sm:pt-14 justify-center sm:w-2/3 md:w-full h-full pt-10">
          <h2 className="text-4xl  sm:text-6xl md:text-7xl  font-bold text-white  ">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md  ">
            I have a years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, JS .
          </p>
          <div className="sm:mb-7">
            <Link
              smooth
              to="Portfolio"
              duration={500}
              className="group rounded-md  text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer flex flex-row items-center px-6 py-3 w-fit"
            >
              Portfolio
              <span className="text-white  ml-3 group-hover:rotate-90 duration-200">
                <FaAngleRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className=" w-3/4 md:w-2/4 h-2/3  sm:pb-10 mb-5  my-auto">
          <img
            src={Hero}
            alt="my profile"
            className="rounded-2xl   mx-auto w-2/3  sm:w-2/4 md:w-full sm:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
