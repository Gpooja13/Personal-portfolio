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
  SiBlockchaindotcom,
  SiOpenai 
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";

export const aboutMeData = [
  {
    id: uuidv4(),
    bio: "Hi, I'm Pooja Gupta!",
  },
  {
    id: uuidv4(),
    bio: "I'm a passionate Full Stack Developer with 1.5+ years of experience specializing in the MERN stack. I build scalable web applications, RESTful APIs, and responsive user interfaces with a strong focus on performance and user experience.",
  },
  {
    id: uuidv4(),
    bio: "Currently working as a Frontend-Focused Full Stack Developer at Luminar Media, I develop dynamic and user-friendly applications while collaborating closely with design and backend teams.",
  },
  {
    id: uuidv4(),
    bio: "I hold a Master’s in Computer Applications (MCA) and am certified in Full Stack Development by IBM (Coursera). I have hands-on experience in JavaScript, API development, authentication systems, and database management, along with strong skills in debugging, performance optimization, and Agile development.",
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
          { name: "Firebase", icon: <FaFire /> },
        ],
      },
      {
        category: "Other Technologies",
        items: [
          { name: "Blockchain", icon: <SiBlockchaindotcom />},
          { name: "OpenAI API", icon: <SiOpenai /> },
        ],
      },
    ],
  },
];
