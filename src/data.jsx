import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink, FiBriefcase } from "react-icons/fi";

import Work1 from "./assets/Project-1.jpg";
import Work2 from "./assets/Project-2.jpg";
import Work3 from "./assets/Project-3.jpg";
import Work4 from "./assets/Project-4.jpg";

import Theme1 from "./assets/Purple.png";
import Theme2 from "./assets/Red.png";
import Theme3 from "./assets/Blueviolet.png";
import Theme4 from "./assets/Blue.png";
import Theme5 from "./assets/Goldenrod.png";
import Theme6 from "./assets/Magenta.png";
import Theme7 from "./assets/Yellowgreen.png";
import Theme8 from "./assets/Orange.png";
import Theme9 from "./assets/Green.png";
import Theme10 from "./assets/Yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Matt Jerson",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Figueroa",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years Old",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Filipino",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Dasmariñas, Cavite",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+63 961 183 1986",
  },

  {
    id: 8,
    title: "Email : ",
    description: "mattjersonn@gmail.com",
  },

  {
    id: 9,
    title: "Teams : ",
    description: "Matt Jerson Figueroa",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Tagalog, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "4+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "4+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "4+",
    title: " Awards <br /> Won",
  },
];

export const resume = [

  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Web Developer <span> Envato </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2013 - 2018",
    title: "UI/UX Designer <span> Themeforest </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2005 - 2013",
    title: "Consultant <span> Videohive </span>",
    desc: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
  },
  
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015",
    title: "Engineering Degree <span> De La Salle University - Dasmariñas </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "Master Degree <span> Lyceum of the Philippines University - Cavite </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009",
    title: "Bachelor Degree <span> Saint Paul Technological Institute Of Cavite </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    icon: "FaHtml5",
  },

  {
    id: 2,
    title: "CSS",
    icon: "FaCss3Alt",
  },

  {
    id: 3,
    title: "JavaScript",
    icon: "DiJavascript",
  },

  {
    id: 4,
    title: "Python",
    icon: "FaPython",
  },

  {
    id: 5,
    title: "Angular",
    icon: "FaAngular",
  },

  {
    id: 6,
    title: "React",
    icon: "FaReact",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Classic GameVault",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Entertainment Website",
      },
      {
        icon: <FiBriefcase />,
        title: "Work : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "TechSnap",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Educational/Informational Website",
      },
      {
        icon: <FiBriefcase />,
        title: "Work : ",
        desc: "Research Project",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Flask, HTML, CSS, JavaScript, Python",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiBriefcase />,
        title: "Work : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiBriefcase />,
        title: "Work : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
