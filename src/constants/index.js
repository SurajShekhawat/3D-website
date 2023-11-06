import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  appinventers,
  Portfolio,
  Amazonclone,
  Youtubelite,
  cargo,
  emitra
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Data Mangement & Data Entry",
    company_name: "Shekhawati Cargo",
    icon: cargo,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "The all data enter in excel sheet.",
      "Mange a Data of Excel and Curior.",
    ],
  },
  {
    title: "E-mitra",
    // company_name: "Tesla",
    icon: emitra,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - May 2022",
    points: [
      "Fill up online exam forms and other forms.",
      "Entering data in excel sheet."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Appinventer",
    icon: appinventers,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "I have learned a lot in Appinventures company and still learning.",
      "I work as a frontend developer at Appinventers.",
      "I have been working for 6 months.",
      "Developing and maintaining web applications using Angular.js and other related technologies.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Amazon Clone",
    description:
      "An Amazon clone built with React, Node.js, MongoDB, and CSS. It replicates core e-commerce features, providing users with a familiar shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "red-text-gradient",
      },
    ],
    image: Amazonclone,
    source_code_link: "https://github.com/SurajShekhawat",
  },
  {
    name: "Portfolio",
    description:
      "Portfolio web app showcases my skills, projects, and achievements. Built with HTML, JS, and CSS, it offers an interactive and visually appealing platform for visitors to explore my work and learn more about me.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/SurajShekhawat",
  },
  {
    name: "Youtube Lite",
    description:
      "YouTube Lite: A sleek web application built with ReactJS, REST API integration, and CSS. Enjoy seamless video streaming, simplified user interface, and fast loading times. Experience YouTube's vast content library with optimal performance.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Youtubelite,
    source_code_link: "https://github.com/SurajShekhawat",
  },
];

export { services, technologies, experiences, testimonials, projects };
