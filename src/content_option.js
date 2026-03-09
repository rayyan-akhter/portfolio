import my_img from "./components/assets/myself.png";
import iphone from "./components/assets/iphone.png";
import skysearch from "./components/assets/skysearch.png";
import e_commerce from "./components/assets/eCommerce.png";
import telegram from "./components/assets/telegram.png";
import stocksGrapher from "./components/assets/stocksGrapher.png";
import maze from "./components/assets/maze.png";
import githubProfile from "./components/assets/githubProfile.png";
import carBuyFinder from "./components/assets/carBuyFinder.png";
import designForge from "./components/assets/designForge.png";
import formForger from "./components/assets/formForger.png";
import taskMaster from "./components/assets/taskMaster.png";
import blankBuilder from "./components/assets/blankBuilder.png";
import chess from "./components/assets/chessImg.png";

const logotext = "RAYYAN";
const meta = {
  title: "Rayyan Akhter",
  description: "I’m Rayyan Akhter data scientist _ Frontend devloper,",
};

const introdata = {
  title: "I’m Rayyan Akhter",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop web apps",
  },
  description:
    "I am a passionate Full Stack Developer who enjoys transforming ideas into powerful and scalable digital solutions. With experience in modern frontend technologies like React, JavaScript, and CSS, along with backend development using Node.js and APIs, I build applications that are visually engaging, highly functional, and performance-driven. I focus on creating seamless user experiences while ensuring robust and efficient server-side systems.",
  your_img_url: my_img,
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
  "I am a Full Stack MERN Developer passionate about building dynamic and scalable web applications. My expertise includes developing modern user interfaces with React and JavaScript, as well as building robust backend systems using Node.js, Express.js, and MongoDB. I enjoy solving complex problems and continuously learning new technologies to improve my development skills. Along with strong technical abilities, I have a keen eye for design, ensuring that every application I build is not only functional and efficient but also visually engaging and user-friendly.",
};
const worktimeline = [
  {
    jobtitle: "Intermediate",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "React",
    value: 85,
  },
  {
    name: "Express",
    value: 75,
  },
  {
    name: "MongoDB  ",
    value: 70,
  },
  {
    name: "Node",
    value: 50,
  },
  {
    name: "ReactNative",
    value: 50,
  },
  {
    name: "GSAP",
    value: 60,
  },
  {
    name: "TypeScript",
    value: 90,
  },
  {
    name: "C",
    value: 70,
  },
];

const services = [
  {
    title: "Frontend Developer",
    description:
"I am a Full Stack MERN Developer specializing in building scalable, high-performance web applications from front-end interfaces to backend systems. With strong proficiency in React, JavaScript, Node.js, Express.js, and MongoDB, I develop responsive and visually compelling user interfaces while also designing secure and efficient server-side architectures and APIs.I focus on transforming complex UI/UX designs into clean, interactive, and accessible applications that perform seamlessly across all major browsers and devices. My expertise includes integrating dynamic interactions, animations, and modern UI patterns to create engaging user experiences, while ensuring strong backend logic and reliable data management.I follow modern development practices such as component-driven architecture, RESTful API design, state management (Redux/Zustand), and modular styling with tools like Tailwind CSS and CSS Modules to build scalable and maintainable applications.I am also experienced in database design, authentication systems, performance optimization, SEO fundamentals, accessibility (WCAG), and version control using Git. I strive to build end-to-end solutions that are secure, fast, and production-ready. Passionate about continuous learning, I stay updated with the latest advancements in full stack development and modern web technologies."  },
];

const dataportfolio = [
  {
    img: iphone,
    description:
      "A meticulously crafted showcase of the iPhone 15 Pro, featuring dynamic animations and a 3D model.",

    link: "https://apple-iphone-15pro-series.netlify.app/",
  },
  {
    img: chess,
    description:
      "A fully functional chess game built with modern web technologies, featuring a clean UI and the ability to play against a computer powered by AI.",
    link: "https://raychess.netlify.app/",
  },
  {
    img: designForge,
    description:
      "Design Forge is a web-based platform hosted on Netlify that offers a suite of tools for UI/UX design and front-end development. It provides a collection of reusable components, design patterns, and resources aimed at streamlining the design-to-development workflow. The platform is designed to assist designers and developers in creating consistent and efficient user interfaces.",
    link: "https://design-forge.netlify.app/",
  },
  {
    img: e_commerce,
    description:
      "A modern e-commerce site with a clean design, product search, filters, and user authentication, including Google login.",
    link: "https://ecommerce-shopify-01.netlify.app/",
  },
  {
    img: skysearch,
    description:
      "A flight ticket booking website offering a streamlined interface for searching and booking flights.",
    link: "https://sky-search.netlify.app/",
  },
  {
    img: maze,
    description:
      "The webpage offers an interactive maze game where players navigate through a space-themed labyrinth.",
    link: "https://rocket-maze.netlify.app/",
  },
  {
    img: telegram,
    description:
      "The website  is a Telegram chat app clone , featuring a similar UI and core functionalities like chat lists and message displays using React and GSAP",
    link: "https://demo-telegram.netlify.app",
  },
  {
    img: stocksGrapher,
    description:
      "It allows users to visualize stock data through interactive graphs, providing insights into market trends and performance.",
    link: "https://voltcrypto.netlify.app/",
  },

  {
    img: taskMaster,
    description:
      "Task Operator is a web-based task management application built with React and Redux. It offers a clean, responsive interface for creating, editing, and organizing tasks. Users can manage their to-do lists efficiently.",
    link: "https://task-operator.netlify.app/",
  },

  {
    img: formForger,
    description:
      "FormForger is a sleek web app for quickly creating and customizing forms. Built with a user-friendly interface, it allows users to generate forms effortlessly and preview them in real-time.",
    link: "https://formforger.netlify.app/",
  },
  {
    img: githubProfile,
    description:
      "Users can enter a GitHub username to view detailed insights such as public repositories, top languages, and a contribution activity graph",
    link: "https://githubprofilevisualizer.netlify.app/",
  },
  {
    img: carBuyFinder,
    description:
      "Designed to help users easily search, filter, and explore cars for sale. It features real-time car filtering, detailed car view pages, a wishlist powered by Local Storage, and smooth pagination for browsing.",
    link: "https://carbuyfinder.netlify.app/",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description: "Vyb-store home page",
    link: "https://vyb-store.netlify.app/",
  },
  {
    img: blankBuilder,
    description:
      "BlankBuilder is a minimalist web application designed to assist users in creating and deploying blank or starter templates for web projects.",
    link: "https://blankbuilder.netlify.app/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "rayyanakhter2003@gmail.com",
  YOUR_PHONE: "+91 9675070725",
  description: "Feel free to reach out to me anytime! ",

  YOUR_SERVICE_ID: "service_yi9exoo",
  YOUR_TEMPLATE_ID: "template_11izmnd",
  YOUR_USER_ID: "egPArZRs47Ed7Z7RD",
};

const socialprofils = {
  github: "https://github.com/rayyan-akhter",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/rayyan-akhter-6292a8263/",
  twitter: "https://twitter.com",
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
  socialprofils,
  logotext,
};
