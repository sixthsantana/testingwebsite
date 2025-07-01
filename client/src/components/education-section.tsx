import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Rhode Island, Kingston, RI",
      period: "2024 - 2028 (Expected)",
      description: "Relevant Coursework: Data Structures & Algorithms, Computer Programming, Algorithm Analysis",
      gpa: "GPA: 3.3/4.0"
    },
    {
      degree: "High School Diploma",
      institution: "Saint Raphael Academy, Pawtucket, RI",
      period: "2020 - 2024",
      description: "Sport Photography and Videography",
      gpa: "3.1/4.0"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-primary mb-4">Education</h2>
          <p className="text-portfolio-secondary text-lg max-w-2xl mx-auto">
            My academic journey in computer science and beyond
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-portfolio-accent"></div>

          {education.map((item, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-portfolio-accent rounded-full border-4 border-white shadow"></div>
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                <Card className="bg-slate-50 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-portfolio-primary mb-2">{item.degree}</h3>
                    <h4 className="text-portfolio-accent font-medium mb-2">{item.institution}</h4>
                    <p className="text-portfolio-secondary mb-3">{item.period}</p>
                    <p className="text-portfolio-secondary mb-3">{item.description}</p>
                    <Badge className="bg-portfolio-accent text-white">{item.gpa}</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
