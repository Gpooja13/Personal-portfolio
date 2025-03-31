import { v4 as uuidv4 } from "uuid";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaFire,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiPython,
  SiNextdotjs,
  SiPostman,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFlask,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";

export const aboutMeData = [
  {
    id: uuidv4(),
    bio: "Hi, I'm Pooja Gupta! I'm a highly motivated and passionate Full Stack Developer with expertise in the MERN stack. I hold a Master’s degree in Computer Applications (MCA) and a Bachelor's degree in the technology field.",
  },
  {
    id: uuidv4(),
    bio: "I have a strong foundation in software development, database management, and IT project management, gained through both academic studies and hands-on industry experience. Additionally, I have earned an IBM Full Stack Development certification from Coursera.",
  },
  {
    id: uuidv4(),
    bio: "Currently, I’m working as a Front-End Developer at Luminar Media Company, where I focus on building dynamic and user-friendly web applications.",
  },
  {
    id: uuidv4(),
    bio: " ",
    techStack: [
      {
        category: "Languages/Development",
        items: [
          { name: "C++", icon: <SiCplusplus /> },
          { name: "Java", icon: <FaJava /> },
          { name: "Python", icon: <SiPython /> },
          { name: "JavaScript", icon: <FaReact /> },
          { name: "TypeScript", icon: <SiTypescript /> },
          { name: "HTML5", icon: <FaHtml5 /> },
          { name: "CSS", icon: <FaCss3Alt /> },
        ],
      },
      {
        category: "Frameworks/Libraries",
        items: [
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "React.js", icon: <FaReact /> },
          { name: "Node.js", icon: <FaNodeJs /> },
          { name: "Express.js", icon: <SiExpress /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss /> },
          { name: "Bootstrap", icon: <FaBootstrap /> },
          { name: "React Native", icon: <FaReact /> },
          { name: "Flask", icon: <SiFlask /> },
        ],
      },
      {
        category: "Databases",
        items: [
          { name: "MongoDB", icon: <SiMongodb /> },
          { name: "Firebase", icon: <FaFire /> },
          { name: "MySQL", icon: <FaDatabase /> },
          { name: "PostgreSQL", icon: <SiPostgresql /> },
        ],
      },
      {
        category: "Version Control",
        items: [
          { name: "Git", icon: <FaGit /> },
          { name: "GitHub", icon: <FaGithub /> },
        ],
      },
      {
        category: "Other Tools",
        items: [
          { name: "Visual Studio", icon: <BiLogoVisualStudio /> },
          { name: "Thunderclient", icon: <AiFillThunderbolt /> },
          { name: "Postman", icon: <SiPostman /> },
        ],
      },
    ],
  },
];
