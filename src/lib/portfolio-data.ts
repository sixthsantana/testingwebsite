export const portfolioData = {
  personal: {
    name: "Chris Batista",
    title: "Computer Science Student & Photographer",
    email: "crispyvisuals76@gmail.com",
    phone: "+1 (401) 489-9770",
    location: "Rhode Island",
    bio: "Computer Science student passionate about full-stack development and capturing the world through photography. I love building innovative solutions and documenting life's beautiful moments.",
    stats: {
      projectsCompleted: 4,
      photosCaptured: 100+
    }
  },
  
  skills: [
    {
      category: "Frontend Development",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      category: "Backend Development",
      technologies: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "Figma", "Photoshop", "Lightroom"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Rhode Island, Kingston RI",
      period: "2024 - 2028 (Expected)",
      description: "Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Machine Learning, Web Development",
      gpa: "GPA: 3.3/4.0"
    },
    {
      degree: "High School Diploma",
      institution: "Saint Raphael Academy",
      period: "2020 - 2024",
      description: "Valedictorian, President of Computer Science Club, National Honor Society",
      achievement: "Summa Cum Laude"
    }
  ],

  experience: [
    {
      title: "Frontend Developer Intern",
      company: "TechStart Solutions",
      period: "June 2023 - August 2023",
      description: "Developed responsive web applications using React and TypeScript, collaborating with cross-functional teams to deliver user-centric solutions. Implemented new features that improved user engagement by 25%.",
      technologies: ["React", "TypeScript", "Git", "Agile"]
    },
    {
      title: "Web Development Teaching Assistant",
      company: "UC San Diego",
      period: "September 2022 - Present",
      description: "Assist in teaching web development fundamentals to 50+ students. Conduct lab sessions, grade assignments, and provide one-on-one mentoring for complex programming concepts.",
      technologies: ["JavaScript", "HTML/CSS", "Teaching", "Mentoring"]
    },
    {
      title: "Freelance Photographer",
      company: "Self-Employed",
      period: "January 2020 - Present",
      description: "Provide photography services for events, portraits, and landscapes. Manage client relationships, post-production workflow, and deliver high-quality visual content for various occasions.",
      technologies: ["Photoshop", "Lightroom", "Client Management", "Creative Direction"]
    }
  ],

  projects: [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with user authentication, payment processing, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ],

  photography: {
    categories: ["All", "Landscapes", "Portraits", "Street", "Events"],
    photos: [
      {
        title: "Mountain landscape at golden hour",
        category: "Landscapes",
        featured: true
      },
      {
        title: "Portrait with bokeh background",
        category: "Portraits",
        featured: true
      }
    ]
  }
};
