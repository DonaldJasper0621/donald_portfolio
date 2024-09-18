export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I am currently an Master student of MHI, I am open for internships or projects! ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/DonaldProfile.PNG",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with working in different citys.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title:
      "Trans Voxia - The Best Speech_to_speech Conversion ToolKit Web Application",
    des: "At present, the official Trans Voxia can have three types of output: translated text, translated audio, and translated video. Users can freely decide the output format according to the material they want to translate (podcast, movie, etc.).",
    img: "/TransVoxiaPic.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/DonaldJasper0621/Trans-Voxia-Speech-to-Speech-Converter",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "As a professor and over the past three semesters, I have had the privilege of observing Donald Jasper Su's outstanding performance in our Software Security Lab. As the team leader of their project team, Donald's ability to guide teams effectively and mentor peers stands out during intricate project undertakings. He led the team to two Intel Dev Cup awards and executed the graduation project perfectly.",
    name: "YU Fang",
    title: "Professor, Department of Management of Information Systems, NCCU",
  },
  {
    quote:
      "It is my pleasure to recommend Donald Su, During his year-long internship at MediaTek Inc., Donald consistently excelled and could contribute to any industry program in this field. As a self-starter who is capable of tackling complex challenges and demonstrating exceptional performance and responsibility, he is a fast learner who is proactive.",
    name: "Ken Hsieh",
    title: "Ken Hsieh, ASIC BU General Manager, MediaTek Inc.",
  },
  {
    quote:
      "It is my pleasure to recommend Donald Jasper Su. I am a professor in the Department of MIS at National Chengchi University. I specialize in artificial neural networks and first came to know Donald Regarding his personality, Donald is a well-disciplined and assiduous student with a pleasant personality. Throughout the classes, I noticed that Donald had showed great perseverance and initiative. He was also willing to aid his colleague students in finishing their duties.",
    name: "Rua-Huan Tsaih",
    title:
      "Distinguished Professor Department of Management Information Systems National Chengchi University",
  },
];

export const companies = [
  {
    id: 1,
    name: "",
    img: "",
    nameImg: "/Intelligo_Inc.png",
  },
  {
    id: 2,
    name: "",
    img: "",
    nameImg: "/NCCU.png",
  },
  {
    id: 3,
    name: "",
    img: "",
    nameImg: "/Info.png",
  },
  {
    id: 4,
    name: "",
    img: "",
    nameImg: "/Umich.jpg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
