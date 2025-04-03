
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-lg font-medium text-primary">Hello, I'm</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 leading-tight">
              Joseph <span className="text-gradient">Vineeth Reddy</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mt-4 max-w-lg">
              Front End Developer specializing in creating visually appealing and user-friendly web experiences.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://github.com/josephkatakam" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full gradient-border">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/joseph-vineeth-reddy-katakam-9b5632299/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full gradient-border">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:vineethgaming@gmail.com">
                <Button variant="outline" size="icon" className="rounded-full gradient-border">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
              <a href="tel:+917075321860">
                <Button variant="outline" size="icon" className="rounded-full gradient-border">
                  <Phone className="h-5 w-5" />
                </Button>
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Joseph_Vineeth_Reddy_Resume.pdf';
                  link.click();
                }}
                className="gradient-border"
              >
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative mx-auto">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/lovable-uploads/e1637f95-8902-4d05-b8d5-68e2456bbd0c.png" 
                  alt="Joseph Vineeth Reddy" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: "40% center" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-primary rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-primary rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
