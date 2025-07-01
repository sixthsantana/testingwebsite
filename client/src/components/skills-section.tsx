import { Code, Camera, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "Python", "React","JavaScript", "HTML/CSS"],
      color: "blue"
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git", "VS Code", "Adobe Premiere Pro", " Davinci Resolve", "Adobe Photoshop", "Adobe Lightroom"],
      color: "purple"
    },
    {
      title: "Photography & Videography",
      icon: Camera,
      skills: ["Color grading", "Portraits"," event", "React","JavaScript", "HTML/CSS"],
      color: "blue"
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-800";
      case "green":
        return "bg-green-100 text-green-800";
      case "purple":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-primary mb-4">Skills & Technologies</h2>
          <p className="text-portfolio-secondary text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on projects and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className="text-portfolio-accent text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-portfolio-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={getColorClasses(category.color)}
                    >
                      {skill}
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

export default SkillsSection;
