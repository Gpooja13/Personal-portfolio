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
    bio: "Hi there! I'm Pooja Gupta. I’m a highly motivated and passionate Full Stack Developer currently pursuing my Master of Computer Applications (MCA). I have a strong foundation in software development, database management, and IT project management, gained through academic pursuits and hands-on experience in the industry.",
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
