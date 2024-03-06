import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, description }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-2xl duration-300">
      <img src={img} alt={title} className=" rounded-t-lg w-full object-cover h-64" />
      <div className="capitalize p-8">
        <h2 className="text-xl font-bold tracking-wide ">{title}</h2>
        <p className="mt-4 text-slate-700 leading-relaxed whitespace-pre-wrap">{description}</p>
        <div className="flex mt-4 gap-x-2">
          <a href={url} target="_blank">
            <TbWorldWww className="w-8 h-8 text-slate-600 hover:text-black" />
          </a>
          <a href={github} target="_blank">
            <FaGithubSquare className="w-8 h-8 text-slate-600 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
