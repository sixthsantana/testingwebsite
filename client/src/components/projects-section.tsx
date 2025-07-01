import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hand Tracking Application",
      description: "Developing a real-time hand tracking system using AI and computer vision to detect hand movements.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["MediaPipe", "Python", "OpenCV", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Volume Hand Control",
      description: "An extension of the hand tracking project that allows users to raise or lower system volume using hand gestures.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["MediaPipe", "Python", "OpenCV", "Pycaw", "Numpy"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "YouTube Downloader",
      description: "A tool that downloads YouTube videos in either MP3 (audio) or MP4 (video) formats, with a simple user interface.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Pytube", "Os", ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Image Converter",
      description: "A flexible image conversion tool that supports various formats (e.g., PNG to WEBP, JPEG to BMP).",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Pillow", "Scikit-learn", "Plotly"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const getColorClasses = (index: number) => {
    const colors = ["blue", "green", "purple", "yellow"];
    const color = colors[index % colors.length];

    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-800";
      case "green":
        return "bg-green-100 text-green-800";
      case "purple":
        return "bg-purple-100 text-purple-800";
      case "yellow":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-primary mb-4">Computer Science Projects</h2>
          <p className="text-portfolio-secondary text-lg max-w-2xl mx-auto">
            A showcase of my technical projects and programming achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} Project`} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-primary mb-3">{project.title}</h3>
                <p className="text-portfolio-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className={getColorClasses(techIndex)}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.liveUrl} 
                    className="text-portfolio-accent hover:text-blue-600 transition-colors flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="text-portfolio-accent hover:text-blue-600 transition-colors flex items-center"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
