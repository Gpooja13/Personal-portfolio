import Image from "next/image";
import { FiClock, FiTag, FiLink, FiGithub } from "react-icons/fi";
import PagesMetaHead from "../../components/PagesMetaHead";
import { projectsData } from "../../data/projectsData";
import RelatedProjects from "../../components/projects/RelatedProjects";

function ProjectSingle(props) {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title={props.project.title} />

      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {props.project.ProjectHeader.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-12 flex flex-col lg:flex-row gap-10 justify-between">
        {/* Left: Iframe (Larger) */}
        {props.project.ProjectImages.map((project) => (
          <div
            className="relative w-full sm:w-full lg:w-[80%] overflow-hidden aspect-video mb-10 sm:mb-0"
            key={project.id}
          >
            <iframe
              src={`https://www.youtube.com/embed/${project.img}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        ))}

        {/* Single project technologies */}
        <div className="text-left lg:w-[20%] sm:w-full border-l hidden lg:flex flex-col justify-between">
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light ml-10 mb-5 mx-auto">
              {props.project.ProjectInfo.Technologies[0].title}
            </p>
            <div className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.Technologies[0].techs.map(
                (tech, index) => (
                  <ul key={index}>
                    <li  className="inline-block ml-11 mb-3">
                      {tech}
                    </li>
                  </ul>
                )
              )}
            </div>
          </div>
          <div className="flex gap-4 ml-10">
            <div className="bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer">
              <a
                href={props.project.ProjectLinks.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLink className="hover:text-gray-500 text-xl text-ternary-dark dark:text-ternary-light dark:hover:text-primary-light" />
              </a>
            </div>
            <div className=" bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer">
              <a
                href={props.project.ProjectLinks.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="hover:text-gray-500 text-xl text-ternary-dark dark:text-ternary-light dark:hover:text-primary-light" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {props.project.ProjectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
              {props.project.ProjectInfo.CompanyInfo.map((info) => {
                return (
                  <li
                    className="font-general-regular text-ternary-dark dark:text-ternary-light text-justify"
                    key={info.id}
                  >
                    {info.details}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Single project objectives */}
          <div className="mb-7 leading-loose">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light text-justify">
              {props.project.ProjectInfo.ObjectivesDetails}
            </p>
          </div>

          <div className="mb-7 lg:hidden">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.Technologies[0].techs.join(" ")}
            </p>
            <div className="flex gap-4 mt-4">
            <div className="bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer">
              <a
                href={props.project.ProjectLinks.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLink className="hover:text-gray-500 text-xl text-ternary-dark dark:text-ternary-light dark:hover:text-primary-light" />
              </a>
            </div>
            <div className=" bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer">
              <a
                href={props.project.ProjectLinks.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="hover:text-gray-500 text-xl text-ternary-dark dark:text-ternary-light dark:hover:text-primary-light" />
              </a>
            </div>
          </div>
          </div>

          {/* Single project social sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.SocialSharingHeading}
            </p>
          </div>
        </div>

        {/*  Single project right section details */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-semibold mb-3">
            {props.project.ProjectInfo.ProjectDetailsHeading}
          </p>
          {props.project.ProjectInfo.ProjectDetails.map((details) => {
            return (
              <ul class="list-inside list-disc leading-relaxed"  key={details.id}>
                <li
                
                  className="font-general-regular mb-1 text-ternary-dark dark:text-ternary-light text-justify"
                >
                  {details.details}
                </li>
              </ul>
            );
          })}
        </div>
      </div>

      <RelatedProjects />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      project: projectsData.filter((project) => project.id === parseInt(id))[0],
    },
  };
}

export default ProjectSingle;
