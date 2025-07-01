import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Food Service Worker",
      company: "Oak View Group",
      period: "August 2024 - Present",
      description: "Food Service Worker at Ryan Center and Boss Ice Arena - Experienced in preparing and serving food in a fast-paced concession stand environment while maintaining high standards of cleanliness, customer service, and efficiency during high-volume events.",
      technologies: ["Food Preparation", "Problem Solving Under Pressure", "Customer Service", "Efficiency in Fast-Paced Environments"],
      color: "blue"
    },
    {
      title: "Freelance Photographer and Videographer",
      company: "Self-Employed",
      period: "September 2023 - Present",
      description: "Provide photography services for events, portraits, and landscapes. Manage client relationships, post-production workflow, and deliver high-quality visual content for various occasions.",
      technologies: ["Photoshop", "Lightroom", "Client Management", "Creative Direction", "Davinci Resolve", "Adobe Premiere Pro"],
      color: "purple"
    },
    {
      title: "Recreation Center Assistant",
      company: "City of Providence Recreation",
      period: "June 2022 - September 2022",
      description: "Assisted with daily operations by managing pool access, participant sign-ins, distributing wristbands, and maintaining a clean and welcoming environment for guests.",
      technologies: ["Front Desk Operations", "Team Collaboration", "Guest Service and Hospitality"],
      color: "green"
    },
    {
      title: "Food Service and Event Support",
      company: "United Skates of America Inc",
      period: "March 2022 - May 2022",
      description: "Responsible for preparing and serving food, operating the cash register, and ensuring timely and friendly service. Additionally, assisted with post-event cleanup and maintained a clean and organized environment for private parties and group events.",
      technologies: ["Food Preparation and Service", "Customer Service Management", "Event Setup and Breakdown"],
      color: "red"
    },
    {
      title: "Solar Sales Representative",
      company: "Apollo Energy",
      period: "June 2021 - September 2021",
      description: "Professionally and confidentially engaged with homeowners to present customized solar energy solutions to reduce electricity costs. Provided accurate, needs-based information, built trust through exceptional customer service, and consistently delivered sales pitches focused on customer satisfaction. Notably, achieved high daily interaction rates, a testament to the effectiveness of the sales approach, and consistently met or exceeded weekly sales targets.",
      technologies: ["Sales and Lead Generation", "Sales Pitch Development", "Professional and Confidential Engagement"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-800";
      case "green":
        return "bg-green-100 text-green-800";
      case "purple":
        return "bg-purple-100 text-purple-800";
      case "red":
        return "bg-red-100 text-red-800";
      case "orange":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-primary mb-4">Experience</h2>
          <p className="text-portfolio-secondary text-lg max-w-2xl mx-auto">
            Professional experiences that shaped my technical expertise
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-white shadow-lg border-l-4 border-portfolio-accent">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-primary">{experience.title}</h3>
                    <h4 className="text-portfolio-accent font-medium">{experience.company}</h4>
                  </div>
                  <div className="text-portfolio-secondary">{experience.period}</div>
                </div>
                <p className="text-portfolio-secondary mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className={getColorClasses(experience.color)}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
