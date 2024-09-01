import my_img from "./components/assets/myself.png";
import iphone from "./components/assets/iphone.png";
import skysearch from "./components/assets/skysearch.png";
import e_commerce from "./components/assets/eCommerce.png";
import telegram from "./components/assets/telegram.png";
import stocksGrapher from "./components/assets/stocksGrapher.png";

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
    "I am a passionate frontend developer with a knack for turning ideas into interactive digital experiences. With expertise in React, JavaScript, and CSS, I specialize in crafting websites and applications that are both visually appealing and highly functional.",
  your_img_url: my_img,
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I am a frontend developer with a passion for creating dynamic and responsive user interfaces. My expertise includes working with modern JavaScript frameworks like React, as well as incorporating animations and 3D elements using GSAP and Three.js. I enjoy solving complex problems and continuously learning new technologies to enhance my skills. In addition to technical abilities, I have a keen eye for design, ensuring that every project I work on is not only functional but also visually appealing.",
};
const worktimeline = [
  {
    jobtitle: "Fresher",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "ReactNative",
    value: 30,
  },
  {
    name: "GSAP",
    value: 50,
  },
];

const services = [
  {
    title: "Frontend Developer",
    description:
      "I specialize in developing responsive and visually engaging web applications. With expertise in React, JavaScript, HTML, and CSS, I transform designs into interactive, user-friendly interfaces. My work ensures cross-browser compatibility, optimized performance, and seamless user experiences. I also have experience with animations and 3D elements, adding a dynamic edge to your web presence.",
  },
];

const dataportfolio = [
  {
    img: iphone,
    description:
      "A meticulously crafted showcase of the iPhone 15 Pro, featuring dynamic animations and a 3D model.",

    link: "https://apple-iphone-15pro-series.netlify.app/",
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
    img: telegram,
    description:
      "The website  is a Telegram chat app clone , featuring a similar UI and core functionalities like chat lists and message displays using React and GSAP",
    link: "https://demo-telegram.netlify.app",
  },
  {
    img: stocksGrapher,
    description:
      "It allows users to visualize stock data through interactive graphs, providing insights into market trends and performance.",
    link: "https://stocks-grapher.netlify.app",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://ourtodoapp.netlify.app",
  },

  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "https://otp-input-area.netlify.app",
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

