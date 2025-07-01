import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-primary mb-6">
              Hi, I'm <span className="text-portfolio-accent">Chris Batista</span>
            </h1>
            <p className="text-xl text-portfolio-secondary mb-8 leading-relaxed">
              Computer Science student passionate about full-stack development and capturing the world through photography. I love building innovative solutions and documenting life's beautiful moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => handleScrollTo("projects")}
                className="bg-portfolio-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-portfolio-accent/90 transition-colors"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleScrollTo("contact")}
                className="border-portfolio-accent text-portfolio-accent px-8 py-3 rounded-lg font-medium hover:bg-portfolio-accent hover:text-white transition-colors"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://drive.google.com/uc?export=view&id=1z94eMoonc5eNMxx-fm8plqL227t4YAUJ" 
              alt="Chris Batista - Professional Portrait" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
