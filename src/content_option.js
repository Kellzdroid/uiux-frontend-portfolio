import { Button } from "react-bootstrap";
import myProfile from "./assets/images/photo.png";
import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import img3 from "./assets/images/img3.png";
import img4 from "./assets/images/img4.png";
import img5 from "./assets/images/img5.png";
import img6 from "./assets/images/img6.png";
import img7 from "./assets/images/img7.png";
import img8 from "./assets/images/img8.png";
import img9 from "./assets/images/img9.png";

const logotext = "CALEB";
const meta = {
  title: "Caleb Anderson",
  description:
    "I'm caleb Anderson a UI/UX Designer & Front-End Devloper, currently working freelance",
};

const introdata = {
  title: "I'm Caleb Anderson",
  animated: {
    first: "UI/UX Designer",
    second: "Front-End Developer",
    third: "I design & build Web apps",
  },
  description:
    "I design interfaces and build front-end experiences that feel simple, intentional, and timeless. Blending creativity with structure, I help brands turn ideas into clean, functional digital products",
  your_img_url: myProfile,
};

const dataabout = {
  title: "Read about me",
  aboutme:
    "I'm Caleb Anderson — a UI/UX Designer and Front-End Developer who enjoys creating digital experiences that feel natural, thoughtful, and beautifully simple. I love blending modern creativity with the classic principles of clarity, structure, and purpose. My mission is straightforward: design with intention, build with precision, and always make the user feel at home.",
};
const worktimeline = [
  {
    jobtitle: "UI/UX Designer & Front-End Developer",
    where: "Freelance",
    date: "2022 - Present",
  },
  {
    jobtitle: "UI/UX Designer",
    where: "Jamalya",
    date: "2019 - 2020",
  },
  {
    jobtitle: "Junior Designer",
    where: "Alquds",
    date: "2018 - 2019",
  },
];

const skills = [
  {
    name: "Figma",
    value: 85,
  },
  {
    name: "Html",
    value: 80,
  },
  {
    name: "Css",
    value: 85,
  },
  {
    name: "Javascript",
    value: 75,
  },
  {
    name: "React + Tailwindcss",
    value: 86,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Crafting intuitive and visually appealing interfaces that prioritize user experience. From wireframes to high-fidelity prototypes, every design is focused on clarity, usability, and timeless appeal.",
  },

  {
    title: "Branding & Visual Identity",
    description:
      "Designing consistent brand visuals, including logos, color schemes, and typography. I help brands communicate their story clearly and maintain a professional presence across digital platforms.",
  },
  {
    title: "Design Systems",
    description:
      "Creating scalable and reusable UI components with clear guidelines for color, typography, and spacing. My design systems ensure consistency across all digital products and streamline development.",
  },
  {
    title: "Web Development",
    description:
      "Building responsive and performance-driven websites using modern tools like React and TailwindCSS. I transform designs into functional, reliable, and scalable digital experiences.",
  },
  {
    title: "Website Redesigns",
    description:
      "Revamping outdated websites by improving structure, user flows, and visual design. I focus on enhancing usability while keeping the brand’s essence intact.",
  },
];

const dataportfolio = [
  {
    img: img1,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://www.behance.net/gallery/239649557/Andersons-Shawarma-Shop",
  },
  {
    img: img2,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://www.behance.net/gallery/228108921/Traffic-Congestion-Gateway-Mobile-App",
  },
  /*{
    img: img3,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
 {
    img: img4,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  }, 
  {
    img: img5,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://www.behance.net/gallery/233471309/MVOI-NGO-Website-Design",
  },
  {
    img: img6,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://www.behance.net/gallery/233471309/MVOI-NGO-Website-Design",
  }, */

  {
    img: img7,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://www.behance.net/gallery/233471309/MVOI-NGO-Website-Design",
  },
  {
    img: img8,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: img9,
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "dmankellz@gmail.com",
  YOUR_PHONE: "08118294640",
  description:
    "If you're looking for someone who combines creativity with structure, and modern UI with classic discipline, I'm your guy. Let's build something clean, meaningful, and long-lasting.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_kellzdroid",
  YOUR_TEMPLATE_ID: "template_wwybpln",
  YOUR_USER_ID: "R3DT5-GaCE8TX3mzy",
};

const socialprofiles = {
  github: "https://github.com/Kellzdroid",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com/Kellzdroid",
  twitter: "https://twitter.com/Kellzdroid",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofiles,
  logotext,
};
