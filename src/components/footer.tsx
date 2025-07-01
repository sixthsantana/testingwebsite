import { Github, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/sixthsantana", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chris-batista/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/chri1spy/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@Chri1spy", label: "Youtube" }
  ];

  return (
    <footer className="bg-portfolio-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Chris Batista</h3>
          <p className="text-slate-300 mb-6">Computer Science Student & Photographer</p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-slate-300 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">&copy; 2025 Chris Batista. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
