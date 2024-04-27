import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import php from "../assets/php.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 7,
      src: php,
      title: "Php",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
    },
  ];

  return (
    <div>
      <div
        name="Experience"
        className="bg-gradient-to-b    from-gray-800 to-black w-full md:h-screen"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-sm hover:scale-105 duration-500 py-2 rounded-lg shadow-slate-500 `}
              >
                <img src={src} alt="exp" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
