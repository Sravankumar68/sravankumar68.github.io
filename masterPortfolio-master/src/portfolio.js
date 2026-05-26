/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true,
};

// SEO Related settings
const seo = {
  title: "Sravan Kumar Portfolio",

  description:
    "Full Stack & Artificial Intelligence Developer passionate about building scalable web applications, AI-powered tools and modern software solutions.",

  image: "profile.jpg.jpg",

  url: "https://sravankumar68.github.io/",
};

// Home Page
const greeting = {
  title: "MOTHUKU SRAVAN KUMAR",
  logo_name: "SravanKumar",
  nickname: "sravan_dev",

  subTitle:
    "Full Stack & Artificial Intelligence Developer passionate about building scalable applications, AI-powered tools and modern web experiences.",

  resumeLink: "/resume.pdf",

  portfolio_repository: "https://github.com/Sravankumar68",

  githubProfile: "https://github.com/Sravankumar68",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Sravankumar68",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },

  {
    name: "LinkedIn",
    link:
      "https://www.linkedin.com/in/sravan-kumar-mothuku-333287304",

    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },

  {
    name: "Gmail",
    link: "mailto:sravankumarmothuku68@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/bunnyy_mudhiraj24/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

// Skills Section
// Skills Section
const skills = {
  data: [
    {
      title: "Full Stack Development",

      fileName: "FullStackImg",

      skills: [
        "⚡ Building scalable full stack web applications using modern technologies",

        "⚡ Developing responsive and user-friendly modern web experiences",

        "⚡ Working with ReactJS, NodeJS, JavaScript and databases",

        "⚡ Creating REST APIs and modern software solutions",
      ],

      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",

          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",

          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",

          style: {
            color: "#339933",
          },
        },

        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",

          style: {
            color: "#E34F26",
          },
        },

        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",

          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa-github",

          style: {
            color: "#ffffff",
          },
        },
      ],
    },

    {
      title: "Artificial Intelligence & Machine Learning",

      fileName: "DataScienceImg",

      skills: [
        "⚡ Developing AI-powered tools and intelligent systems",

        "⚡ Passionate about Machine Learning and Deep Learning",

        "⚡ Building automation systems and AI-based applications",

        "⚡ Working with Python, Streamlit and AI frameworks",
      ],

      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",

          style: {
            color: "#3776AB",
          },
        },

        {
          skillName: "Machine Learning",
          imageSrc: "deeplearning_ai_logo.png",
        },

        {
          skillName: "Artificial Intelligence",
          imageSrc: "deeplearning_ai_logo.png",
        },

        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",

          style: {
            color: "#FF4B4B",
          },
        },

        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",

          style: {
            color: "#ffffff",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",

          style: {
            color: "#4479A1",
          },
        },
      ],
    },

    {
      title: "Prompt Engineering & Cyber Security",

      fileName: "CloudInfraImg",

      skills: [
        "⚡ Interested in Prompt Engineering and Generative AI systems",

        "⚡ Exploring AI automation and intelligent workflows",

        "⚡ Learning Cyber Security concepts and secure application development",

        "⚡ Passionate about Open Source AI Projects and emerging technologies",
      ],

      softwareSkills: [
        {
          skillName: "Prompt Engineering",
          imageSrc: "deeplearning_ai_logo.png",
        },

        {
          skillName: "Cyber Security",
          fontAwesomeClassname: "simple-icons:securityscorecard",

          style: {
            color: "#00FFFF",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",

          style: {
            color: "#1488C6",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",

          style: {
            color: "#F05032",
          },
        },

        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
        },

        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",

          style: {
            color: "#ffffff",
          },
        },
      ],
    },
  ],
};
// Competitive Sites
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",

      iconifyClassname: "simple-icons:leetcode",

      style: {
        color: "#F79F1B",
      },

      profileLink: "https://leetcode.com/u/sravankumar_24/",
    },

    {
      siteName: "GitHub",

      iconifyClassname: "simple-icons:github",

      style: {
        color: "#ffffff",
      },

      profileLink: "https://github.com/Sravankumar68",
    },

    {
      siteName: "LinkedIn",

      iconifyClassname: "simple-icons:linkedin",

      style: {
        color: "#0077B5",
      },

      profileLink:
        "https://www.linkedin.com/in/sravan-kumar-mothuku-333287304",
    },
  ],
};

// Education Section
const degrees = {
  degrees: [
    {
      title: "Parul University",

      subtitle: "Bachelor's Degree in Computer Science Engineering",

      logo_path: "parul_logo.jpg",

      alt_name: "Parul University",

      duration: "2023 - 2027",

      descriptions: [
        "⚡ AI & Tech Enthusiast passionate about Full Stack Development and Artificial Intelligence.",

        "⚡ Interested in building intelligent systems, automation tools and real-world AI applications.",

        "⚡ Currently learning Prompt Engineering, Machine Learning and Cyber Security.",

        "⚡ Focused on building scalable web applications and modern software solutions.",
      ],

      website_link: "https://paruluniversity.ac.in/",
    },
  ],
};

// Certifications
const certifications = {
  certifications: [],
};

// Experience Section
const experience = {
  title: "Experience",

  subtitle: "Learning, Building & Growing",

  description:
    "Waiting for opportunities to work on real-world problems in Artificial Intelligence and Business Analysis as a Software Engineer.",

  header_image_path: "experience.svg",

  sections: [
    {
      title: "Career Goals",

      experiences: [
        {
          title: "Full Stack & Artificial Intelligence Developer",

          company: "Open To Opportunities",

          company_url: "https://github.com/Sravankumar68",

          logo_path: "github_logo.png",

          duration: "2026 - Present",

          location: "India",

          description:
            "Passionate about building intelligent systems, automation tools and scalable web applications using Artificial Intelligence and modern technologies.",

          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Section
const projectsHeader = {
  title: "Projects",

  description:
    "Here are some of my Full Stack, Artificial Intelligence and Machine Learning projects built using modern technologies.",

  avatar_image_path: "projects_image.svg",
};

// Publications
const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

const publications = {
  data: [
    {
      id: "inventory-system",

      name: "Intelligent Barcode-Based Inventory System",

      createdAt: "2025-01-01T00:00:00Z",

      description:
        "Built an intelligent inventory management system using barcode-based product tracking with real-time stock monitoring and automated inventory updates.",

      url: "https://github.com/Sravankumar68",
    },

    {
      id: "ai-research-paper-agent",

      name: "AI Research Paper Summarizer Agent",

      createdAt: "2025-01-01T00:00:00Z",

      description:
        "Developed an AI-powered research paper summarization system using Python, Celery, Redis and Telegram Bot API for automated content analysis and instant summary delivery.",

      url: "https://github.com/Sravankumar68",
    },

    {
      id: "diabetes-prediction-app",

      name: "Diabetes Prediction Web Application",

      createdAt: "2025-01-01T00:00:00Z",

      description:
        "Created a Machine Learning based web application for diabetes prediction using Streamlit, Scikit-learn and Pandas with interactive UI and healthcare dataset processing.",

      url: "https://github.com/Sravankumar68",
    },
  ],
};

// Contact Section
const contactPageData = {
  contactSection: {
    title: "Contact Me",

    profile_image_path: "profile.jpg.jpg",

    description:
      "Full Stack & Artificial Intelligence Developer passionate about building scalable AI-powered applications, intelligent systems and modern web experiences. Open to opportunities and collaborations on real-world projects.",
  },

  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },

  addressSection: {
    title: "Address",

    subtitle: "Vaghodia, Gujarat, India",

    locality: "Vaghodia",

    country: "India",

    region: "Gujarat",

    postalCode: "391760",

    streetAddress: "Parul University Campus",

    avatar_image_path: "parul_logo.jpg",

    location_map_link:
      "https://www.google.com/maps/place/Parul+University+Vadodara",
  },

  phoneSection: {
    title: "Phone Number",

    subtitle: "+91 9701943391",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};