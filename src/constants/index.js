import {
  meta,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  css,
  git,
  html,
  javascript,
  react,
  reactNative,
  nextJs,
  blackNext,
  elctron,
  github,
  BOT,
  Artist,
  Guide,
  Reflection,
} from "../assets/index";

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
    title: "React Native Developer",
    icon: reactNative,
  },
  {
    title: "Frontend Web Developer",
    icon: nextJs,
  },
  {
    title: "Desktop App Developer",
    icon: elctron,
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
    name: "React JS",
    icon: react,
  },

  {
    name: "Next JS",
    icon: blackNext,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "electron",
    icon: elctron,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    months: "18 months",
    icon: starbucks,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    months: "13 months",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    months: "7 months",
    icon: shopify,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    months: "Working...",
    color: "black",
    icon: meta,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Discord BOT",
    icon: github,
    iconBg: "#050816",
    description:
      "An advanced discord bot that have to many functions like saying hello to new users with a custom message provided by the server owner",
    date: "Jan 2023 - Present",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: BOT,
    source_code_link: "https://github.com/",
  },
  {
    name: "Artist Portfolio",
    icon: github,
    iconBg: "#050816",
    description:
      "This is an simple design of an portfolio for artists when they can post they works and sell them",
    date: "Jan 2022 - Jan 2023",
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
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: Artist,
    source_code_link: "https://github.com/",
  },
  {
    name: "City Guide",
    icon: github,
    iconBg: "#050816",
    description:
      "In this website we have shown a simple city guide website for an specific city and you can post every important place for tourists to visit",
    date: "Jan 2021 - Feb 2022",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgress",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Guide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Image Reflection",
    icon: github,
    iconBg: "#050816",
    description:
      "Here is an beautiful image galery with an reflection which is very cool for you if youre planing for an new image gallery design",
    date: "March 2020 - April 2021",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: Reflection,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
