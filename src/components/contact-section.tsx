import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "crispyvisuals76@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (401) 489-9770"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Providence, RI"
    }
  ];

  const socialLinks = [
    { icon: , href: "https://github.com/sixthsantana", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chris-batista/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/chri1spy/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@Chri1spy", label: "Youtube" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-primary mb-4">Get In Touch</h2>
          <p className="text-portfolio-secondary text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">Let's Connect</h3>
            <p className="text-portfolio-secondary mb-8 leading-relaxed">
              I'm always interested in new opportunities, collaborations, and interesting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <item.icon className="text-portfolio-accent text-xl" />
                  </div>
                  <div>
                    <div className="text-portfolio-primary font-medium">{item.title}</div>
                    <div className="text-portfolio-secondary">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-medium text-portfolio-primary mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-portfolio-accent/10 rounded-lg flex items-center justify-center text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-portfolio-primary mb-2">
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="border-slate-300 focus:ring-2 focus:ring-portfolio-accent focus:border-portfolio-accent"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-portfolio-primary mb-2">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="border-slate-300 focus:ring-2 focus:ring-portfolio-accent focus:border-portfolio-accent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-portfolio-primary mb-2">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="border-slate-300 focus:ring-2 focus:ring-portfolio-accent focus:border-portfolio-accent"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-portfolio-primary mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    className="border-slate-300 focus:ring-2 focus:ring-portfolio-accent focus:border-portfolio-accent resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-accent text-white py-3 rounded-lg font-medium hover:bg-portfolio-accent/90 transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
