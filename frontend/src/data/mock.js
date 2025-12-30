// Mock data for Arpit Lal's Portfolio

export const personalInfo = {
  name: "Arpit Lal",
  title: "Software Developer & ML Engineer",
  tagline: "Building Intelligent Systems with Machine Learning",
  email: "Sinhaarpit415@gmail.com",
  phone: "+91-7992289647",
  location: "Punjab, India",
  linkedin: "https://www.linkedin.com/in/arpit-lal-506b07248/",
  github: "https://github.com/Akkissss23",
  bio: "Final-year Electrical Engineering undergraduate with hands-on experience in Backend Development ,\n" +
      "Machine Learning, NLP, and Data Analysis . Built and deployed end-to-end ML pipelines for\n" +
      "clustering, recommendation, and prediction problems. Proficient in DSA and backend development using\n" +
      "Flask and Django. Seeking ML Engineer / SDE-1 roles in IT companies.",
  roles: ["Software Developer", "ML Engineer", "Data Scientist", "Problem Solver"]
};

export const skills = {
  programming: [
    { name: "Python", level: 95, color: "#3776AB" },
    { name: "C/C++", level: 80, color: "#00599C" },
    { name: "SQL", level: 85, color: "#CC2927" }
  ],
  machineLearning: [
    { name: "Scikit-learn", level: 90, color: "#F7931E" },
    { name: "TensorFlow", level: 85, color: "#FF6F00" },
    { name: "Keras", level: 85, color: "#D00000" },
    { name: "NLP", level: 88, color: "#8B5CF6" },
    { name: "Deep Learning", level: 82, color: "#059669" }
  ],
  dataAnalysis: [
    { name: "Pandas", level: 92, color: "#150458" },
    { name: "NumPy", level: 90, color: "#013243" },
    { name: "Matplotlib", level: 88, color: "#11557C" },
    { name: "Seaborn", level: 85, color: "#4C72B0" }
  ],
  devOps: [
    { name: "Git/GitHub", level: 88, color: "#F05032" },
    { name: "Docker", level: 78, color: "#2496ED" },
    { name: "GitHub Actions", level: 75, color: "#2088FF" },
    { name: "CI/CD", level: 80, color: "#4FC08D" }
  ],
  embedded: [
    { name: "Arduino", level: 85, color: "#00979D" },
    { name: "Raspberry Pi", level: 82, color: "#A22846" },
    { name: "MATLAB", level: 80, color: "#0076A8" },
    { name: "EagleCAD", level: 75, color: "#CC0000" }
  ],
  databases: [
    { name: "MySQL", level: 85, color: "#4479A1" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "E-Tongue System",
    category: "Machine Learning",
    description: "Designed an Electronic Tongue system integrating hardware (sensors, circuitry) and software for data acquisition and analysis. Applied ML/DL techniques for pattern recognition and classification of sensor responses.",
    technologies: ["EagleCAD", "MATLAB", "LabView", "Python", "Machine Learning", "Deep Learning"],
    featured: true,
    color: "#ff84e4",
    association: "NIT Patna Internship"
  },
  {
    id: 2,
    title: "Stock Prediction System",
    category: "Deep Learning",
    description: "Built a stock price prediction pipeline using historical market data and ML/DL models. Implemented data fetching, preprocessing, model training, and visualization of predicted vs actual trends.",
    technologies: ["yfinance", "Pandas", "Matplotlib", "Scikit-learn", "Keras"],
    github: "https://github.com/Akkissss23/Data-analysis-ML-Projects/blob/main/stock%20predictor%203.ipynb",
    featured: true,
    color: "#88a2ff"
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    category: "NLP",
    description: "Developed a movie recommender system leveraging NLP and similarity-based approaches. Processed movie metadata and plots to generate personalized recommendations for users.",
    technologies: ["NumPy", "Pandas", "NLTK", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/Akkissss23/Data-analysis-ML-Projects/tree/main/movie%20recommendation",
    featured: true,
    color: "#d987ff"
  },
  {
    id: 4,
    title: "Fake News Detector",
    category: "NLP",
    description: "Implemented a text classification pipeline to detect fake news articles. Used TF-IDF features and Logistic Regression to achieve robust performance, evaluated via accuracy metrics.",
    technologies: ["NLTK", "TfidfVectorizer", "LogisticRegression", "Pandas", "NumPy"],
    github: "https://github.com/Akkissss23/Data-analysis-ML-Projects/blob/main/fake%20news%202%20.ipynb",
    featured: true,
    color: "#ffe03d"
  },
  {
    id: 5,
    title: "Customer Segmentation",
    category: "Machine Learning",
    description: "Performed unsupervised learning for customer segmentation using clustering algorithms. Evaluated clustering quality using Silhouette score, and visualized segments for business insights.",
    technologies: ["Scikit-learn", "Pandas", "Seaborn", "Scipy", "K-Means"],
    github: "https://github.com/Akkissss23/Data-analysis-ML-Projects/blob/main/custermer%20segmentattion%201%20.ipynb",
    featured: true,
    color: "#78d692"
  },
  {
    id: 6,
    title: "CI/CD Pipeline",
    category: "DevOps",
    description: "Designed a CI/CD pipeline to automate build, test, and deployment workflows. Integrated Docker and GitHub Actions/GitLab for streamlined DevOps processes.",
    technologies: ["GitHub Actions", "Docker", "GitLab", "YAML"],
    github: "https://github.com/Akkissss23/CI-CD-Pipeline-Getting-Started",
    featured: true,
    color: "#ff965a"
  },
  {
    id: 7,
    title: "Smart Autonomous Street Light",
    category: "Embedded Systems",
    description: "Worked on an autonomous street lighting system using sensor-based control and Raspberry Pi. Simulated and tested the circuit using Fritzing and Proteus to validate design.",
    technologies: ["Python", "Fritzing", "Proteus", "Raspberry Pi 4"],
    color: "#b7fbff"
  }
];

export const experience = [
  {
    id: 1,
    type: "internship",
    title: "Summer Intern - ML Research",
    organization: "NIT Patna",
    period: "2024",
    description: "Designed and worked on an E-Tongue system integrating hardware (sensors, circuitry) and software for data acquisition and analysis. Applied ML/DL techniques for pattern recognition and classification of sensor responses.",
    skills: ["Python", "Machine Learning", "Deep Learning", "EagleCAD", "MATLAB"]
  }
];

export const education = [
  {
    id: 1,
    degree: "B.E. Electrical Engineering",
    institution: "Sant Longowal Institute of Engineering and Technology (SLIET)",
    location: "Longowal, Punjab",
    period: "2022 - 2026 (Expected)",
    grade: "CGPA: 7.5",
    status: "Final Year"
  },
  {
    id: 2,
    degree: "XII (CBSE)",
    institution: "Holy Mission Senior Secondary School",
    location: "Patna, Bihar",
    period: "March 2021",
    grade: "75.4%"
  },
  {
    id: 3,
    degree: "X (CBSE)",
    institution: "Loyola High School",
    location: "Patna, Bihar",
    period: "March 2019",
    grade: "85.6%"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Research Paper Selection",
    organization: "IISc, Bangalore",
    description: "Review paper on White Dwarf Binary System and Binary Pulsars got selected.",
    icon: "Award"
  },
  {
    id: 2,
    title: "Techfest Winner",
    organization: "IIT Roorkee",
    description: "Participated in Cognizance 2025 and Secured 1st Position in Robo Tug of War , 2nd Position in Truss  , 4th Position LFR",
    icon: "Trophy"
  },
  {
    id: 3,
    title: "Techfest Paticipated",
    organization: "IIT Roorkee",
    description: "Participated in Cognizance 2024 for RC Plan, Robo Soccer, RC Car events.",
    icon: "Trophy"
  },
  {
    id: 4,
    title: "Smart India Hackathon",
    organization: "SIH",
    description: "Cleared the first round of SIH at college level.",
    icon: "Code"
  },
  {
    id: 5,
    title: "Youth Parliament Representative",
    organization: "MIT WPU, Pune",
    description: "Represented NSS YP SLIET at 13th BCS assembly in January 2024.",
    icon: "Users"
  }
];

export const responsibilities = [
  {
    id: 1,
    role: "Convener (2024-2025)",
    organization: "Endeavour (Robotics Team)",
    description: "Led and coordinated robotics activities, competitions, and team projects."
  },
  {
    id: 2,
    role: "Co-ordinator (2025-2026)",
    organization: "Sur & Rhythm (Music Band)",
    description: "Organized and managed band practices and performances for institute events."
  },
  {
    id: 3,
    role: "Co-coordinator (2023-2024)",
    organization: "Youth Parliament (NSS)",
    description: "Coordinated Youth Parliament activities under NSS, promoting student engagement and public speaking."
  }
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" }
];
